"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
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
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";


const Page = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [duration, setDuration] = useState(0); // Total duration of the audio
  const [progress, setProgress] = useState(0); // Progress for the animation
  const handleTimeUpdate = () => {
    setProgress((audio.currentTime / audio.duration) * 100);
  };


  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch(
          `https://cleverank.adnan-qasim.me/papers/get-papers-recommendation`
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

  useEffect(() => {
    const audioObj = new Audio("https://storage.googleapis.com/clever_rank_answer_bucket/audios/6759437fda3ae6f021102382_None");
    setAudio(audioObj);

    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });

      // Listen to time updates while the audio is playing
      audio.addEventListener("timeupdate", handleTimeUpdate);

      // Reset progress when audio ends
      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
      });
    }
    // When the audio starts playing, update the duration

    // Cleanup event listeners on component unmount
    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", () => setDuration(audio.duration));
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", () => {
          setIsPlaying(false);
          setProgress(0);
        });
      }
    };
  }, []);

  if (loading) return <div>
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
  </div>;

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const circleLength = 2 * Math.PI * 50; // Radius = 50, so circumference = 2πr = 2π(50)
  const strokeDasharray = circleLength; // Full circle
  const strokeDashoffset = circleLength - (progress / 100) * circleLength; // Calculate how much of the circle to "cut off" based on progress

  return (
    <>
      <div className="text-xl font-semibold">Recommended Papers</div>
      <div className="text-gray-500 text-sm pb-5">Here is a list of papers recommended for you.</div>
      <div className="flex flex-col gap-3">
        {papers.length === 0 && <div className="text-center text-gray-700 my-5 tracking-tight font-semibold">No papers found.</div>}
        {papers.map((paper, index) => (
          <Card key={paper._id} className={`relative shadow-sm hover:shadow transition-shadow duration-200 w-full flex rounded-sm ${index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"} items-center justify-between pr-3`}>
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
                  <div><strong> Year : {" "}</strong>{paper.year || "N/A"}</div>
                  <div>
                    <strong>Authors :</strong>{" "}
                    {paper.author.length > 3
                      ? `${paper.author
                        .slice(0, 3)
                        .map(
                          (author) => `${author.first_name} ${author.last_name}`
                        )
                        .join(", ")}...`
                      : paper.author
                        .map(
                          (author) => `${author.first_name} ${author.last_name}`
                        )
                        .join(", ")}
                  </div>
                </div>

                <div className="line-clamp-3 text-gray-600">{paper?.creative_summary?.creative_summary ?? "Summary Not Available."}</div>
              </CardContent>
            </div>
            <div className="flex flex-col items-end justify-end">
              <div className="flex items-center gap-3 my-3 justify-end">
                <div className="text-[#59C009] p-1.5 bg-gray-100 rounded-full"><ThumbsUp className="size-5" /></div>
                <div className="text-gray-500 p-1.5 bg-gray-100 rounded-full"><ThumbsDown className="size-5" /></div>
              </div>
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
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#59C009] p-1 border-1 border-[#59C009] rounded-full">
                      {!isPlaying ? (
                        <Play onClick={handlePlayPause} className="size-5 cursor-pointer" />
                      ) : (
                        <Pause onClick={handlePlayPause} className="size-5 cursor-pointer" />
                      )}
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger className="text-base font-semibold bg-[#59C009] text-gray-50 px-5 py-2 flex items-center justify-center gap-1 rounded-full"><Book className="size-5" />Read</DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="mb-3">{paper.paper_title}</DialogTitle>
                      <DialogDescription>
                        <span>{paper?.creative_summary?.creative_summary ?? "Summary Not Available."}
                        </span>

                        <h2 className="text-lg font-semibold leading-none tracking-tight py-5 text-black">What you will learn: </h2>
                        <div className="space-y-2">
                          {paper?.creative_summary?.concepts_learned.map((concept, index) => (
                            <div key={index} className="flex items-start gap-1"><CircleDot className="mt-1" size={14} /> <span>{concept}</span></div>
                          ))
                          }
                        </div>
                      </DialogDescription>
                      <DialogFooter>
                        <Link href={`/recommended/${paper._id}`} className="text-base font-semibold bg-[#59C009] text-gray-50 px-5 py-2 flex items-center justify-center gap-1 rounded-full mt-3">Start Reading</Link>
                      </DialogFooter>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Page;
