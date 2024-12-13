"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {

  const searchParams = useSearchParams();
  const paperId = searchParams.get("paper_id");
  const [paper, setPaper] = useState(null);

  useEffect(() => {
    const fetchPaper = async () => {
      try {
        const response = await fetch(`https://cleverank.adnan-qasim.me/papers/get-paper/${paperId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch paper");
        }
        const data = await response.json();
        console.log(data);
        setPaper(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPaper();
  }, [paperId]); // Fetch paper data when paper_id changes


  return (
    <div className="flex flex-col items-center justify-center mx-36 gap-2 my-6">
      <div className="text-xl font-semibold">Your total points will be calculated soon and will be reflected in your profile.</div>
      <div className="text-lg font-semibold">Viva Voce</div>
      <div className="text-xl font-semibold text-pretty tracking-tight text-center">{paper?.paper_title}</div>
      <div className="border h-[30rem] w-full mt-2">
        Please fill out the survey form for your experience
      </div>
    </div>
  );
};

export default Page;
