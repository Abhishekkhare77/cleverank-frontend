"use client";
import CameraFeed from "@/components/CameraFeed";
import SpeechToText from "@/components/SpeechToText";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ThumbsDown, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showVideoUI, setShowVideoUI] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answerTimer, setAnswerTimer] = useState(180);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);

  const searchParams = useSearchParams();
  const paperId = searchParams.get("paper_id");
  const difficulty = searchParams.get("selected_difficulty");

  const [loadingQuestions, setLoadingQuestions] = useState(true);

  const router = useRouter();

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        `https://cleverank.adnan-qasim.me/research-paper/start-assessment/${paperId}?difficulty=${difficulty}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      setLoadingQuestions(false);
      const data = await response.json();
      setQuestions(data.questions || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // This effect handles the initial "thinking time" countdown
  useEffect(() => {
    if (!showVideoUI && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      // Once timeLeft hits 0, we show the video UI and start listening
      setShowVideoUI(true);
      setIsListening(true);
    }
  }, [timeLeft, showVideoUI]);

  // This effect handles the "answering time" once the video UI is visible.
  // The actual stop and upload happens in the CameraFeed component when answerTimer hits 0.
  useEffect(() => {
    if (showVideoUI && answerTimer > 0) {
      const timer = setTimeout(() => setAnswerTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [answerTimer, showVideoUI]);

  // Function to move to the next question after successful submission
  const goToNextQuestion = () => {
    if (answerTimer !== 0 && currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setShowVideoUI(false);
      setTimeLeft(15);
      setText("");
      setIsListening(false);
      setAnswerTimer(180);
    } else {
      router.push(`/score?paper_id=${paperId}`);
    }
  };

  return (
    <div className="flex flex-col justify-center my-5 max-w-6xl mx-auto">
      {/* Steps */}
      <div className="flex items-center mb-6">
        {questions.map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full border-2 ${completedSteps.includes(index + 1) ? "bg-black" : "bg-white"
                }`}
            ></div>

            {index < questions.length - 1 && (
              <div className="h-1 bg-gray-800 w-32"></div>
            )}
          </div>
        ))}
      </div>

      {/* Question */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Question {currentQuestion + 1}
        </h2>
        <div className="flex justify-between">
          <div className="text-gray-700 text-base mb-8 max-w-3xl">
            {loadingQuestions && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-[40rem]" />
                <Skeleton className="h-4 w-[20rem]" />
              </div>
            )}{" "}
            {questions[currentQuestion]}
          </div>

          <div className="flex items-center gap-6 my-2">
            {showVideoUI && (
              <div className="rounded-md p-3 border flex items-center justify-center">
                <div className="text-xs font-bold">
                  Time Left : {answerTimer}s
                </div>
              </div>
            )}
            <div className="flex flex-col items-center cursor-pointer">
              <X className="size-5" />
              <p className="text-xs pt-2">Don&apos;t Know</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <ThumbsDown className="size-5" />
              <p className="text-xs pt-2">Dislike</p>
            </div>
          </div>
        </div>

        {!showVideoUI ? (
          <div className="flex flex-col items-center justify-center w-full h-[28rem]">
            <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-gray-200 mb-4">
              <span className="text-2xl font-bold">{timeLeft}</span>
            </div>
            {/* No need for Answer button now since we automatically start recording */}
          </div>
        ) : (
          <div className="flex gap-6">
            <CameraFeed
              text={text}
              setCompletedSteps={setCompletedSteps}
              setIsListening={setIsListening}
              setAnswerTimer={setAnswerTimer}
              setText={setText}
              currentQuestion={currentQuestion}
              currentQuestionText={questions[currentQuestion]}
              questions={questions}
              setCurrentQuestion={setCurrentQuestion}
              setShowVideoUI={setShowVideoUI}
              setTimeLeft={setTimeLeft}
              router={router}
              paperId={paperId}
              answerTimer={answerTimer} // Pass answerTimer for auto submission
              goToNextQuestion={goToNextQuestion}
              difficulty={difficulty}
            />
            <div className="w-1/3 flex flex-col">
              <SpeechToText
                isListening={isListening}
                text={text}
                setText={setText}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
