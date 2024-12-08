// pages/papers/[id]/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

const PdfRender = dynamic(() => import("@/components/pdfView/PdfRender"), {
  ssr: false,
});

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

  if (!paper) return <div>Loading paper...</div>;

  return (
    <div className="py-6 flex flex-col lg:flex-row items-center">
      {/* Left Column: Paper Info */}
      <div className="flex flex-col space-y-6 w-full lg:w-1/2">
        <div className="font-bold text-2xl text-gray-800">{paper.paper_title}</div>
        <div className="text-sm text-gray-500 mb-4">
          {paper.author.map((author, index) => (
            <span key={index}>
              {author.first_name} {author.last_name}
              {index < paper.author.length - 1 && ", "}
            </span>
          ))}
        </div>

        {/* Abstract Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Abstract</h3>
          <p className="text-sm text-gray-600 mt-2">{paper.paper_abstract}</p>
        </div>

        {/* Keywords Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Keywords</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {paper.keywords && paper.keywords.map((keyword, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-xs">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Paper Actions */}
        <div className="flex flex-col items-center justify-start space-y-4">
          {!isStarted && !isComplete ? (
            <Button className="px-8 py-2 text-sm" onClick={handleStart}>
              Start
            </Button>
          ) : isComplete ? (
            <div className="flex gap-4">
              <Button className="px-8 py-2 text-sm" onClick={handleStartAssessment}>
                Start Assessment
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-md text-gray-600">7 days left</h2>
              <div className="flex gap-4">
                <Button className="px-8 py-2 text-sm" onClick={handleComplete}>
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

      {/* Right Column: PDF Viewer */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
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
