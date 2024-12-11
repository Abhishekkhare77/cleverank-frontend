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


const Page = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [duration, setDuration] = useState(0); // Total duration of the audio
  const [progress, setProgress] = useState(0); // Progress for the animation
  const progressBarRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  const handleTimeUpdate = () => {
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  useEffect(() => {
    setIsClient(true);
    if (isClient) {
      const audioObj = new Audio("https://storage.googleapis.com/clever_rank_answer_bucket/audios/6759437fda3ae6f021102382_None");
      setAudio(audioObj);
    }
  }, []);



  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch(
          "https://cleverank.adnan-qasim.me/papers/get-papers-recommendation/1?limit=50"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch papers");
        }
        const data = await response.json();
        setPapers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  useEffect(() => {
    setIsClient(true);
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
  }, [audio]);

  if (loading) return <div>Loading papers...</div>;
  if (error) return <div>Error: {error}</div>;

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

  if (!isClient) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <div className="text-xl font-semibold">Recommended Papers</div>
      <div className="text-gray-500 text-sm pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi soluta nam.</div>
      <div className="flex flex-col gap-3">
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

                <div className="line-clamp-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab nisi laboriosam expedita dicta unde porro modi necessitatibus quis. Repellendus atque perspiciatis rerum ea nam odit, fuga minus iste laborum temporibus omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi ipsum blanditiis.</div>
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
                        transform="rotate(-90 60 60)" // Rotate to make the animation start from top
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
                <Dialog className="w-[30rem]">
                  <DialogTrigger><div className="text-base font-semibold bg-[#59C009] text-gray-50 px-5 py-2 flex items-center justify-center gap-1 rounded-full"><Book className="size-5" /> Read</div></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{paper.paper_title}</DialogTitle>
                      <DialogDescription>
                        <span>This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores explicabo recusandae! Doloribus fuga maiores cum consectetur eius, quo exercitationem voluptas obcaecati rerum optio quis debitis numquam aliquid deleniti! Asperiores, sapiente molestiae?
                        </span>

                        <h2 className="text-lg font-semibold leading-none tracking-tight py-5 text-black">What you will learn: </h2>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2"><CircleDot size={18} /> <span>Test Lorem, ipsum dolor.</span></div>
                          <div className="flex items-center gap-2"><CircleDot size={18} /> <span>Test Lorem, ipsum dolor.</span></div>
                          <div className="flex items-center gap-2"><CircleDot size={18} /> <span>Test Lorem, ipsum dolor.</span></div>
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
