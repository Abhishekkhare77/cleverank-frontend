"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book, CircleDot, Pause, Play, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const Page = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [audio, setAudio] = useState(null);
  const [loadingPapers, setLoadingPapers] = useState({}); // Per-paper loading state
  const [currentPlayingId, setCurrentPlayingId] = useState(null); // Currently playing paper ID
  const [progressPapers, setProgressPapers] = useState({}); // Tracks progress for each paper
  const [durationPapers, setDurationPapers] = useState({}); // Tracks duration for each paper
  const [currentTimePapers, setCurrentTimePapers] = useState({}); // Tracks current time for each paper

  // Helper function to format time
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimeUpdate = useCallback(() => {
    if (audio && audio.duration && currentPlayingId) {
      const progress = (audio.currentTime / audio.duration) * 100;
      setProgressPapers((prev) => ({
        ...prev,
        [currentPlayingId]: progress,
      }));
      setCurrentTimePapers((prev) => ({
        ...prev,
        [currentPlayingId]: audio.currentTime,
      }));
    }
  }, [audio, currentPlayingId]);

  // Fetch recommended papers on component mount
  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch(
          `https://cleverank.adnan-qasim.me/papers/recommend-from-model?paper_to_recommend=50`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch papers");
        }
        const data = await response.json();
        console.log(data);
        setPapers(data);
      } catch (err) {
        toast.error("Failed to fetch papers");
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  const handleConvertTextToSpeech = async (paper_id) => {
    // Toggle play/pause if the same paper is clicked
    if (currentPlayingId === paper_id) {
      if (audio) {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }
      return;
    }

    // Set loading state for the new paper
    setLoadingPapers((prev) => ({ ...prev, [paper_id]: true }));

    try {
      const response = await fetch(
        `https://cleverank.adnan-qasim.me/convert-text-to-speech/${paper_id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to convert text to speech");
      }

      const data = await response.json();
      console.log(data);

      if (data.audio_url) {
        // Pause existing audio if any
        if (audio) {
          audio.pause();
        }

        const newAudio = new Audio(data.audio_url);
        setAudio(newAudio);
        setCurrentPlayingId(paper_id);
        setProgressPapers((prev) => ({ ...prev, [paper_id]: 0 })); // Reset progress
        setCurrentTimePapers((prev) => ({ ...prev, [paper_id]: 0 })); // Reset current time

        newAudio.play();

        // Reset progress when audio ends handled in useEffect
      } else {
        throw new Error("Audio URL not found in response");
      }
    } catch (err) {
      toast.error("Failed to convert text to speech");
      setError(err.message);
    } finally {
      // Reset loading state for this paper
      setLoadingPapers((prev) => ({ ...prev, [paper_id]: false }));
    }
  };

  // Manage audio event listeners
  useEffect(() => {
    if (!audio) return;

    const handleLoadedMetadata = () => {
      if (currentPlayingId && audio.duration) {
        setDurationPapers((prev) => ({
          ...prev,
          [currentPlayingId]: audio.duration,
        }));
      }
    };

    const handleEnded = () => {
      setCurrentPlayingId(null);
      setProgressPapers((prev) => ({
        ...prev,
        [currentPlayingId]: 0,
      }));
      setCurrentTimePapers((prev) => ({
        ...prev,
        [currentPlayingId]: 0,
      }));
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    // Cleanup event listeners on audio change or component unmount
    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audio, currentPlayingId, handleTimeUpdate]);

  if (loading)
    return (
      <div>
        <div className="space-y-2">
          <Skeleton className={"w-1/4 h-8"} />
          <Skeleton className={"w-1/2 h-6"} />
        </div>
        <div>
          <Skeleton className={"w-full h-44 my-5"} />
          <Skeleton className={"w-full h-44 my-5"} />
          <Skeleton className={"w-full h-44 my-5"} />
          <Skeleton className={"w-full h-44 my-5"} />
        </div>
      </div>
    );

  return (
    <>
      <div className="text-xl font-semibold">Recommended Papers</div>
      <div className="text-gray-500 text-sm pb-5">
        Here is a list of papers recommended for you.
      </div>
      <div className="flex flex-col gap-3">
        {papers.length === 0 && (
          <div className="text-center text-gray-700 my-5 tracking-tight font-semibold">
            No papers found.
          </div>
        )}
        {papers.map((paper, index) => {
          const circleLength = 2 * Math.PI * 50; // Radius = 50, so circumference = 2πr = 2π(50)
          const strokeDasharray = circleLength; // Full circle
          const progress = progressPapers[paper._id] || 0;
          const strokeDashoffset = circleLength - (progress / 100) * circleLength;
          const currentTime = currentTimePapers[paper._id] || 0;
          const duration = durationPapers[paper._id] || 0;
          const remainingTime = duration - currentTime;

          return (
            <Card
              key={paper._id}
              className={`relative shadow-sm hover:shadow transition-shadow duration-200 w-full flex rounded-sm ${index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
                } items-center justify-between pr-3`}
            >
              <div className="flex items-center">
                <CardHeader className="relative flex-shrink-0">
                  <CardTitle>
                    <img
                      src={paper.image_url || "/fallback-image.png"}
                      alt={`Cover for ${paper.paper_title}`}
                      className="w-full h-36 object-cover border"
                      onError={(e) => {
                        e.currentTarget.src = "/fallback-image.png";
                      }}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-4 px-1 max-w-4xl">
                  <strong className="font-semibold text-gray-800 line-clamp-2">
                    {paper.paper_title}
                  </strong>
                  <div className="flex items-center gap-4 text-sm pt-1 pb-3">
                    <div>
                      <strong> Year : </strong>
                      {paper.year || "N/A"}
                    </div>
                    <div>
                      <strong>Authors :</strong>{" "}
                      {paper.author.length > 3
                        ? `${paper.author
                          .slice(0, 3)
                          .map(
                            (author) =>
                              `${author.first_name} ${author.last_name}`
                          )
                          .join(", ")}...`
                        : paper.author
                          .map(
                            (author) =>
                              `${author.first_name} ${author.last_name}`
                          )
                          .join(", ")}
                    </div>
                  </div>

                  <div className="line-clamp-3 text-gray-600">
                    {paper?.creative_summary?.creative_summary ??
                      "Summary Not Available."}
                  </div>
                </CardContent>
              </div>

              <div className="flex flex-col items-end justify-end">
                <div className="flex items-center justify-end">
                  <div className="flex items-center mr-2">
                    {/* Circular Progress */}
                    <div className="relative">
                      <svg className="size-10" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#d1d1d1"
                          strokeWidth="10"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#59C009"
                          strokeWidth="10"
                          fill="none"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          transform="rotate(-90 60 60)"
                          className="transition-all duration-300 ease-in-out"
                        />
                      </svg>

                      {/* Play/Pause Button */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {loadingPapers[paper._id] ? (
                          <div className="spinner"></div>
                        ) : (
                          <button
                            onClick={() => handleConvertTextToSpeech(paper._id)}
                            className="text-[#59C009] p-1 rounded-full focus:outline-none"
                            disabled={loadingPapers[paper._id]}
                            aria-label={
                              currentPlayingId === paper._id
                                ? "Pause audio"
                                : "Play audio"
                            }
                          >
                            {currentPlayingId === paper._id && audio && !audio.paused ? (
                              <Pause className="size-6 pt-1 cursor-pointer" />
                            ) : (
                              <Play className="size-6 pt-1 cursor-pointer" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Dialog className="flex flex-col">
                  <div className="flex items-center gap-3 my-3 justify-end">
                    <div className="text-[#59C009] p-1.5 bg-gray-100 rounded-full">
                      <ThumbsUp className="size-5" />
                    </div>
                    <div className="text-gray-500 p-1.5 bg-gray-100 rounded-full">
                      <ThumbsDown className="size-5" />
                    </div>
                  </div>
                  <DialogTrigger className="text-base font-semibold bg-[#59C009] text-gray-50 px-5 py-2 flex items-center justify-center gap-1 rounded-full">
                    <Book className="size-5" />Read
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="mb-3">{paper.paper_title}</DialogTitle>
                      <DialogDescription>
                        <span>{paper?.creative_summary?.creative_summary ?? "Summary Not Available."}</span>

                        <h2 className="text-lg font-semibold leading-none tracking-tight py-5 text-black">
                          What you will learn:
                        </h2>
                        <div className="space-y-2">
                          {paper?.creative_summary?.concepts_learned.map((concept, index) => (
                            <div key={index} className="flex items-start gap-1">
                              <CircleDot className="mt-1" size={14} /> <span>{concept}</span>
                            </div>
                          ))}
                        </div>
                      </DialogDescription>
                      <DialogFooter>
                        <Link
                          href={`/recommended/${paper._id}`}
                          className="text-base font-semibold bg-[#59C009] text-gray-50 px-5 py-2 flex items-center justify-center gap-1 rounded-full mt-3"
                        >
                          Start Reading
                        </Link>
                      </DialogFooter>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Page;
