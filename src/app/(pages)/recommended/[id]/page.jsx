// pages/papers/[id]/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const PdfRender = dynamic(() => import("@/components/pdfView/PdfRender"), {
  ssr: false,
});

const Page = () => {
  const [paper, setPaper] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("basic");

  // Get paper_id from URL params
  const { id } = useParams(); // Dynamically get the paper ID

  const handleDownloadPaper = async () => {
    try {
      const response = await fetch(`https://cleverank.adnan-qasim.me/papers/download-paper/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch paper");
      }
      const data = await response.json();
      window.open(data.file_url, "_blank");
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!id) return; // Ensure paper_id exists before fetching data

    const fetchPaper = async () => {
      try {
        const response = await fetch(`https://cleverank.adnan-qasim.me/papers/get-paper/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch paper");
        }
        const data = await response.json();
        setPaper(data); // Set the paper data
      } catch (err) {
        console.error(err);
      }
    };

    fetchPaper();
  }, [id]); // Fetch paper data when paper_id changes

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleStartAssessment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!paper) return (
    <div className="space-y-4 my-5" >
      <div className="space-y-2">
        <Skeleton className="h-8 max-w-xl" />
        <Skeleton className="h-8 max-w-xl" />
        <Skeleton className="h-4 max-w-xl" />
      </div>
      <Skeleton className="h-64 max-w-xl" />
      <Skeleton className="h-36 max-w-xl" />
    </div>)

  return (
    <div className="py-2 flex flex-col xl:flex-row items-center">
      {/* Left Column: Paper Info */}
      <div className="flex flex-col space-y-3 w-full max-w-xl">
        <div>
          <div className="font-bold text-2xl text-gray-800">{paper.paper_title}</div>
          <div className="text-sm text-gray-500">
            {paper.author.map((author, index) => (
              <span key={index}>
                {author.first_name} {author.last_name}
                {index < paper.author.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>

        {/* Abstract Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-6 ">
          <h3 className="text-lg font-semibold text-gray-700">Abstract</h3>
          <p className="text-sm text-gray-600 mt-2 h-64 overflow-y-auto">{paper.paper_abstract}</p>
        </div>

        {/* Keywords Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Keywords</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {paper.keywords && paper.keywords.map((keyword, index) => (
              <span key={index} className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Paper Actions */}
        <div className="flex flex-col items-center justify-start space-y-4">
          {!isStarted && !isComplete ? (
            <Button className="px-8 py-2 text-sm w-1/2" onClick={handleStart}>
              Start Reading
            </Button>
          ) : isComplete ? (
            <div className="flex gap-4 w-1/2">
              <Button className="px-8 py-2 text-sm w-full" onClick={handleStartAssessment}>
                Start Assessment
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <h2 className="text-lg font-bold tracking-tight text-pretty  text-gray-700">7 days left</h2>
              <div className="flex gap-2">
                <Button className="px-8 py-2 text-sm" onClick={handleComplete}>
                  Complete
                </Button>
                <Button onClick={handleDownloadPaper}>
                  <Download />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: PDF Viewer */}
      <div className="w-full mx-5 mt-6 sm:-mt-4">
        <PdfRender file_url={paper.file_url} />
      </div>

      {/* Modal for Assessment */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center w-screen m-0 bg-black bg-opacity-50 z-50">
          <Card className="w-1/2 text-center">
            <CardHeader className="flex flex-row-reverse w-full">
              <X onClick={handleCloseModal} className="cursor-pointer" />
            </CardHeader>
            <CardContent>
              <h2 className="mb-4 text-lg font-semibold">What is your understanding?</h2>
              <div className="flex gap-8 justify-center">
                <Card onClick={() => setDifficulty("basic")} className={`text-sm cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center ${difficulty === "basic" ? "bg-gray-200" : "bg-white"}`}>
                  <CardTitle >Basic</CardTitle>
                </Card>
                <Card onClick={() => setDifficulty("intermediate")} className={`text-sm cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center ${difficulty === "intermediate" ? "bg-gray-200" : "bg-white"}`}>
                  <CardTitle >Intermediate</CardTitle>
                </Card>
                <Card onClick={() => setDifficulty("expert")} className={`cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center text-sm ${difficulty === "expert" ? "bg-gray-200" : "bg-white"}`}>
                  <CardTitle >Expert</CardTitle>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end mt-6">
              <Link href={`/assessment/?paper_id=${id}&selected_difficulty=${difficulty}`}>
                <Button>Submit</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Page;
