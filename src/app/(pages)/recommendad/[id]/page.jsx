"use client";
import PdfRender from "@/components/pdfView/PdfRender";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [isStarted, setIsStarted] = useState(false); // State to track if "Start" is clicked
  const [isComplete, setIsComplete] = useState(false); // State to track if "Complete" is clicked
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleStartAssessment = () => {
    setIsModalOpen(true); // Open the modal when "Start Assessment" is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="py-3 flex flex-col items-center">
      <div className="flex w-[60rem] justify-between items-center">
        <div>
          Paper title will come here in the headings <br /> another line of
          paper title
        </div>
        <div>
          {!isStarted && !isComplete ? (
            <Button
              className="px-8 py-1.5 text-sm"
              onClick={handleStart} 
            >
              Start
            </Button>
          ) : isComplete ? (
            <div className="flex gap-4">
              <Button
                className="px-8 py-1.5 text-sm"
                onClick={handleStartAssessment} 
              >
                Start Assessment
              </Button>
            </div>
          ) : (
            <>
              <h1>7 days left</h1>
              <div className="flex gap-4">
                <Button
                  className="px-8 py-1.5 text-sm"
                  onClick={handleComplete} 
                >
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
      <PdfRender />
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <Card className="w-1/2 text-center">
            <CardHeader className="flex flex-row-reverse w-full ">
              <X onClick={handleCloseModal} className="cursor-pointer" />
            </CardHeader>
            <CardContent>
              <h2 className="mb-4 text-lg font-semibold">
                What is your understanding?
              </h2>
              <div className="flex gap-8 justify-center">
                <Card className="cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center">
                  <CardTitle className=" text-sm">Basic</CardTitle>
                </Card>
                <Card className="cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center">
                  <CardTitle className=" text-sm">Intermediate</CardTitle>
                </Card>
                <Card className="cursor-pointer border-2 h-32 w-32 flex flex-col items-center justify-center">
                  <CardTitle className=" text-sm">Expert</CardTitle>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end mt-6 ">
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
