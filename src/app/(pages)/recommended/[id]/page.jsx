// pages/papers/[id]/page.tsx
'use client';

import PdfRender from "@/components/pdfView/PdfRender";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const [paper, setPaper] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get paper_id from URL params
  const { id } = useParams(); // Dynamically get the paper ID

  useEffect(() => {
    if (!id) return; // Ensure paper_id exists before fetching data

    const fetchPaper = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/papers/get-paper/${id}`);
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

  if (!paper) return <div>Loading paper...</div>; // Loading state while fetching paper

  return (
    <div className="py-3 flex flex-col items-center">
      <div className="flex w-[60rem] justify-between items-center">
        <div>
          <div className="font-bold text-xl">{paper.paper_title}</div>
          <div className="text-sm text-gray-500">
            {paper.author.map((author, index) => (
              <span key={index}>
                {author.first_name} {author.last_name}
                {index < paper.author.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
        <div>
          {!isStarted && !isComplete ? (
            <Button className="px-8 py-1.5 text-sm" onClick={handleStart}>
              Start
            </Button>
          ) : isComplete ? (
            <div className="flex gap-4">
              <Button className="px-8 py-1.5 text-sm" onClick={handleStartAssessment}>
                Start Assessment
              </Button>
            </div>
          ) : (
            <>
              <h1>7 days left</h1>
              <div className="flex gap-4">
                <Button className="px-8 py-1.5 text-sm" onClick={handleComplete}>
                  Complete
                </Button>
                <Button>
                  <Download />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Render PDF */}
      <PdfRender file_url={paper.file_url} />

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <Card className="w-1/2 text-center">
            <CardHeader className="flex flex-row-reverse w-full">
              <X onClick={handleCloseModal} className="cursor-pointer" />
            </CardHeader>
            <CardContent>
              <h2 className="mb-4 text-lg font-semibold">What is your understanding?</h2>
              <div className="flex gap-8 justify-center">
                <Card className="cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center">
                  <CardTitle className="text-sm">Basic</CardTitle>
                </Card>
                <Card className="cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center">
                  <CardTitle className="text-sm">Intermediate</CardTitle>
                </Card>
                <Card className="cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center">
                  <CardTitle className="text-sm">Expert</CardTitle>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end mt-6">
              <Link href="/assessment">
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
