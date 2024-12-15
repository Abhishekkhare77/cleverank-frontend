// pages/papers/[id]/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDot, Download, MoveUpRight, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import RecoPDF from "@/components/Tabs/RecoPDF";
import RecoSummary from "@/components/Tabs/RecoSummary";
import RecoExplanation from "@/components/Tabs/RecoExplanation";
import RecoQuiz from "@/components/Tabs/RecoQuiz";

const Page = () => {
  const [paper, setPaper] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("basic");

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);

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
      console.log(data);
      window.open(data.file_url, "_blank");
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!id) return; // Ensure paper_id exists before fetching data

    const fetchPaper = async () => {
      try {
        const response = await fetch(`https://cleverank.adnan-qasim.me/papers/get-paper/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch paper");
        }
        const data = await response.json();
        console.log(data);
        setPaper(data.paper); // Set the paper data
        setIsStarted(data.get_user_paper.is_reading ?? false);
        setIsComplete(data.get_user_paper.is_complete ?? false);
        setStartTime(data.get_user_paper.start_reading_time ? new Date(data.get_user_paper.start_reading_time) : null);
        setEndTime(data.get_user_paper.end_reading_time ? new Date(data.get_user_paper.end_reading_time) : null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPaper();

  }, [id, isStarted, isComplete]);

  useEffect(() => {
    if (endTime) {
      const endDate = new Date(endTime);
      const currentDate = new Date();
      const timeDiff = endDate.getTime() - currentDate.getTime();
      const daysLeftCalc = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert time diff to days
      setDaysLeft(daysLeftCalc);
    }
  }, [endTime]);
  const handleStart = async () => {
    try {
      const response = await fetch(`https://cleverank.adnan-qasim.me/papers/start-reading-paper/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to start reading");
      }

      console.log("Started reading paper");
    }
    catch (err) {
      console.error(err);
    }
    setIsStarted(true);
  };

  const handleComplete = async () => {
    try {
      const response = await fetch(`https://cleverank.adnan-qasim.me/papers/finish-reading-paper/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to complete reading");
      }

      console.log("Completed reading paper");
    }
    catch (err) {
      console.error(err);
    }
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
      <Skeleton height="1000px" width="100%" />
    </div>
  )

  return (
    <>
      <Tabs defaultValue="pdf" className="w-full flex items-center justify-center flex-col">
        <TabsList className="flex items-center w-full justify-between bg-white">
          <div className="bg-secondary rounded-md p-1">
            <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-white" value="pdf">View PDF</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-white" value="summary">Summary</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-white" value="explanation" >Explanation</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-white" value="quiz" >Test Your Understanding</TabsTrigger>
          </div>
          <div className="flex items-center justify-end space-y-4">
            {isComplete && !isStarted ? (
              <div className="flex gap-4">
                <Button className="px-8 py-2 text-sm w-full" onClick={handleStartAssessment}>
                  Start Assessment
                </Button>
              </div>
            ) : null}
            {!isStarted && !isComplete ? (
              <Button className="px-8 py-2 text-sm" onClick={handleStart}>
                Start Reading
              </Button>
            ) : null}
            {!isComplete && isStarted ? (
              <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-bold tracking-tight text-pretty text-gray-700 pr-10">
                  {daysLeft !== null ? (daysLeft > 0 ? `${daysLeft} days left` : "Time's up") : ""}
                </h2>
                <div className="flex gap-2">
                  <Button className="px-8 py-2 text-sm" onClick={handleComplete}>
                    Complete
                  </Button>
                  <Button onClick={handleDownloadPaper}>
                    <Download />
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </TabsList>
        <TabsContent value="pdf">
          <RecoPDF paper={paper} />
        </TabsContent>
        <TabsContent value="summary">
          <RecoSummary paper={paper} id={id} />
        </TabsContent>
        <TabsContent value="explanation" className="w-full px-5">
          <RecoExplanation paper={paper} id={id} />
        </TabsContent>
        <TabsContent value="quiz">
          <RecoQuiz paper={paper} id={id} />
        </TabsContent>
      </Tabs>
      <div className="py-2 flex flex-col xl:flex-row items-center">
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
                  <Card onClick={() => setDifficulty("basic")} className={`text-sm cursor-pointer hover:bg-secondary hover:text-black transition-all duration-100 border-2 border-primary h-32 w-32 flex flex-col items-center justify-center ${difficulty === "basic" ? "bg-primary text-white" : "bg-white"}`}>
                    <CardTitle >Basic</CardTitle>
                  </Card>
                  <Card onClick={() => setDifficulty("intermediate")} className={`text-sm cursor-pointer hover:bg-secondary hover:text-black transition-all duration-100 border-2 border-primary h-32 w-32 flex flex-col items-center justify-center ${difficulty === "intermediate" ? "bg-primary text-white" : "bg-white"}`}>
                    <CardTitle >Intermediate</CardTitle>
                  </Card>
                  <Card onClick={() => setDifficulty("expert")} className={`cursor-pointer hover:bg-secondary hover:text-black transition-all duration-100 border-2 border-primary h-32 w-32 flex flex-col items-center justify-center text-sm ${difficulty === "expert" ? "bg-primary text-white" : "bg-white"}`}>
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
    </>
  );
};

export default Page;