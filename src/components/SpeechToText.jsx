"use client";
import { useRef, useEffect } from "react";
import { Textarea } from "./ui/textarea";

export default function SpeechToText({ isListening, text, setText }) {
  const recognition = useRef(null);

  useEffect(() => {
    // Initialize SpeechRecognition
    if ("webkitSpeechRecognition" in window) {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.lang = "en-US";

      recognition.current.onresult = (event) => {
        let interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setText((prevText) => prevText + transcript);
          } else {
            interimTranscript += transcript;
          }
        }
      };

      recognition.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
    }
  }, []);

  useEffect(() => {
    if (recognition.current) {
      if (isListening) {
        recognition.current.start();
      } else {
        recognition.current.stop();
      }
    }
  }, [isListening]);

  return (
    <Textarea
      rows={15}
      cols={15}
      placeholder="Your Answer"
      className="w-full border border-gray-300 p-3 rounded-md resize-none"
      value={text}
      onChange={(e) => setText(e.target.value)}
      disabled
    />
  );
}
