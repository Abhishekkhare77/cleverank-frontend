"use client";
import CameraFeed from "@/components/CameraFeed";
import SpeechToText from "@/components/SpeechToText";
import { Button } from "@/components/ui/button";
import { ThumbsDown, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showVideoUI, setShowVideoUI] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answerTimer, setAnswerTimer] = useState(180);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);

  const searchParams = useSearchParams();
  const paperId = searchParams.get("paper_id");
  const difficulty = searchParams.get("selected_difficulty");

  const router = useRouter();

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`https://cleverank.adnan-qasim.me/research-paper/start-assessment/${paperId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch paper");
      }
      const data = await response.json();
      console.log(data);
      setQuestions(data.questions);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {


    if (!showVideoUI && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowVideoUI(true);
      setIsListening(true);
    }
  }, [timeLeft, showVideoUI]);

  useEffect(() => {
    if (answerTimer > 0) {
      const timer = setTimeout(() => setAnswerTimer(answerTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      currentQuestion < questions.length - 1
        ? setCurrentQuestion(currentQuestion + 1)
        : router.push("/score");
    }
  }, [answerTimer, router, currentQuestion]);

  const handleAnswer = () => {
    setShowVideoUI(true);
    setIsListening(true);
  };

  const handleSubmit = () => {
    setCompletedSteps((prev) => [...prev, currentQuestion + 1]);
    setIsListening(false);
    setAnswerTimer(180);
    setText("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowVideoUI(false);
      setTimeLeft(30);
    } else {
      router.push("/score");
    }
  };

  return (
    <div className="flex flex-col justify-center my-5 max-w-6xl mx-auto">
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

      <div>
        <h2 className="text-lg font-semibold mb-4">
          Question {currentQuestion + 1}
        </h2>
        <div className="flex justify-between">
          <p className="text-gray-700 text-base mb-8">
            {questions[currentQuestion]}
          </p>

          <div className="flex items-center gap-6 my-2">
            {showVideoUI && <div className="rounded-md p-3 border flex items-center justify-center">
              <div className="text-xs font-bold">Time Left : {answerTimer}s</div>
            </div>}
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
            <Button className="px-4 py-2  mt-4" onClick={handleAnswer}>
              Answer
            </Button>
          </div>
        ) : (
          <div className="flex  gap-6">
            <CameraFeed text={text} />
            <div className=" w-1/3 flex flex-col ">
              <SpeechToText isListening={isListening} text={text} setText={setText} />
              <Button className=" mt-5" onClick={handleSubmit}>
                Submit Answer
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Timer */}
    </div>
  );
};

export default Page;
