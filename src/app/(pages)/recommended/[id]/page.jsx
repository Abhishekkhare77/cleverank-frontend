// pages/papers/[id]/page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDot, Download, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const PdfRender = dynamic(() => import("@/components/pdfView/PdfRender"), {
  ssr: false,
});

const Page = () => {
  const [paper, setPaper] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("basic");

  const [paperExplanations, setPaperExplanations] = useState(null);
  const [academicLevel, setAcademicLevel] = useState("");
  const [explanationLoading, setExplanationLoading] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);

  // New states for Quiz functionality
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSearchWithLevel = (value) => {
    console.log(value);
    setAcademicLevel(value);
    fetchPaperExplanations();
  }

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
      console.log(data);
      window.open(data.file_url, "_blank");
    } catch (err) {
      console.error(err);
    }
  }

  const handleGetQuiz = async () => {
    try {
      const response = await fetch(`https://cleverank.adnan-qasim.me/research-paper/get-quiz/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch quiz");
      }
      const data = await response.json();
      console.log(data);
      setQuizQuestions(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    handleGetQuiz();
  }, []);

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

  const fetchPaperExplanations = async () => {
    setExplanationLoading(true);
    try {
      const response = await fetch(`https://cleverank.adnan-qasim.me/papers/get-detailed-explanation/${id}?academic_level=${academicLevel}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch paper explanations");
      }

      const data = await response.json();
      setExplanationLoading(false);
      console.log(data);

      setPaperExplanations(data);
    } catch (err) {
      console.error("Error fetching paper explanations:", err);
      setExplanationLoading(false);
    }
  };

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

  // Handler for quiz option changes
  const handleOptionChange = (questionIndex, selectedOption) => {
    setUserAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
  }

  // Handler for quiz submission
  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    let calculatedScore = 0;
    quizQuestions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowResults(true);
  }

  // Determine if all questions have been answered
  const allAnswered = quizQuestions.length > 0 && quizQuestions.every((_, index) => userAnswers[index]);

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
          <div className="w-full">
            <div className="text-center mb-3 my-5">
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
            <PdfRender file_url={paper.file_url} />
          </div>
        </TabsContent>
        <TabsContent value="summary" className="mx-10">
          <div className="flex flex-col space-y-3 w-full">
            <div className="text-center mb-3 my-5">
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

            <div className="grid grid-cols-2 gap-4">

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
            </div>
          </div>

        </TabsContent>
        <TabsContent value="explanation" className="w-full px-5">
          <div className="flex items-center w-full justify-between">
            <h1 className="font-semibold tracking-tight text-pretty ">Explanations according to your academic level:</h1>
            <Select defaultValue={academicLevel} onValueChange={handleSearchWithLevel}>
              <SelectTrigger className="w-96" >
                <SelectValue placeholder="Select an academic level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Academic Level</SelectLabel>
                  <SelectItem value="High School">High School</SelectItem>
                  <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                  <SelectItem value="PhD">PhD</SelectItem>
                  <SelectItem value="Associate Degree">Associate Degree</SelectItem>
                  <SelectItem value="Vocational Training">Vocational Training</SelectItem>
                  <SelectItem value="Diploma">Diploma</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="text-center mb-3 my-10">
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
          {!paperExplanations && !explanationLoading && (
            <div className="flex items-center justify-center h-96">
              <Button onClick={() => handleSearchWithLevel("Undergraduate")}>
                Generate Explanations
              </Button>
            </div>
          )}
          <div className="mt-4">
            {explanationLoading && (
              <div className="space-y-4">
                <Skeleton className={"h-48 w-full"} />
                <Skeleton className={"h-48 w-full"} />
                <Skeleton className={"h-48 w-full"} />
              </div>
            )}
            {paperExplanations && paperExplanations.paper_abstract && (
              <div className="p-4 rounded-md shadow-sm mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Abstract</h3>
                <p className="text-sm text-gray-600 mt-2">{paperExplanations.paper_abstract}</p>
              </div>
            )}
            {paperExplanations && paperExplanations.detailed_explanation.map((explanation, index) => (
              <div key={index} className="m-4 rounded-md shadow-sm mb-6">
                <h3 className="text-lg font-semibold text-gray-700">{explanation.topic_title}</h3>
                <p className="text-sm text-gray-600 mt-2 ml-4 flex">{explanation.topic_content}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="quiz">
          <div className="text-center mb-3 my-5">
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
          <div className="flex flex-col items-center justify-center w-full">
            {quizQuestions.length === 0 ? (
              <p className="text-gray-500">No quiz available for this paper.</p>
            ) : (
              <form className="w-full" onSubmit={handleSubmitQuiz}>
                {quizQuestions.map((q, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm mb-6">
                    <p className="font-medium">{index + 1}. {q.question}</p>
                    <div className="mt-2">
                      {q.options.map((option, optIndex) => (
                        <label key={optIndex} className="block text-gray-800">
                          <input
                            type="radio"
                            name={`question_${index}`}
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            className="mr-2 size-3"
                            required
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    {showResults && (
                      <p className={userAnswers[index] === q.answer ? "text-green-600 mt-2" : "text-red-600 mt-2"}>
                        {userAnswers[index] === q.answer ? "✅ Correct" : `❌ Incorrect. Correct answer: ${q.answer}`}
                      </p>
                    )}
                  </div>
                ))}
                {!showResults ? (
                  <Button type="submit" disabled={!allAnswered} className="mt-1">
                    Submit Quiz
                  </Button>
                ) : (
                  <div className="mt-4 text-xl font-bold text-center">
                    You scored {score} out of {quizQuestions.length}
                  </div>
                )}
              </form>
            )}
          </div>
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
