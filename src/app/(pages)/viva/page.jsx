"use client";
import CameraFeed from "@/components/CameraFeed";
import SpeechToText from "@/components/SpeechToText";
import { Button } from "@/components/ui/button";
import { ThumbsDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const questions = [
  "What is the meaning of fluid when we speak about Dynamic fluid in the context of laminar flow?",
  "What is Bernoulli’s theorem?",
  "Define viscosity and its effect on fluid dynamics.",
  "Explain Reynolds number and its significance.",
  "What is meant by turbulent flow?",
];

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showVideoUI, setShowVideoUI] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!showVideoUI && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowVideoUI(true);
      setIsListening(true);
    }
  }, [timeLeft, showVideoUI]);

  const handleAnswer = () => {
    setShowVideoUI(true);
    setIsListening(true);
  };

  const handleSubmit = () => {
    setCompletedSteps((prev) => [...prev, currentQuestion + 1]);
    setIsListening(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowVideoUI(false);
      setTimeLeft(10);
    } else {
      router.push("/score");
    }
  };

  return (
    <div className="flex flex-col justify-center my-5 mx-36">
      <div className="flex items-center mb-6">
        {questions.map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full border-2 ${
                completedSteps.includes(index + 1) ? "bg-black" : "bg-white"
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

          <div className="flex gap-6">
            <div className="flex flex-col items-center ">
              <X  className="h-8 w-8"/>
              <p className="text-xs">Don't Know</p>
            </div>
            <div className="flex flex-col items-center">
              <ThumbsDown />
              <p className="text-xs">Dislike</p>
            </div>
          </div>
        </div>

        {!showVideoUI ? (
          <div className="flex flex-col items-center justify-center w-[60rem] h-[28rem]">
            <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-gray-200 mb-4">
              <span className="text-2xl font-bold">{timeLeft}</span>
            </div>
            <Button className="px-4 py-2  mt-4" onClick={handleAnswer}>
              Answer
            </Button>
          </div>
        ) : (
          <div className="flex  gap-6">
            <CameraFeed />
            <div className=" w-1/3 flex flex-col ">
              <SpeechToText isListening={isListening} />
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
