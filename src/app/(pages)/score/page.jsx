"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { MoveRight, StarIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {

  const searchParams = useSearchParams();
  const paperId = searchParams.get("paper_id");
  const [paper, setPaper] = useState(null);

  useEffect(() => {
    const fetchPaper = async () => {
      try {
        const response = await fetch(`https://cleverank.cumulate.live/papers/get-paper/${paperId}`);
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
  }, [paperId]);


  return (
    <div className="flex flex-col items-center justify-center mx-36 gap-2 my-6">
      <div className="text-xl font-semibold">Your total points will be calculated shortly and will be reflected in your profile.</div>
      <div className="text-xl font-semibold">Viva Voce</div>
      <div className="text-xl font-semibold text-pretty tracking-tight text-center">{paper?.paper_title}</div>
      <div className="border h-[25rem] w-full mt-2">
        <div className="flex items-center justify-center h-full">
          <div className="grid gap-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Rate your experience</h2>
              <p className="text-muted-foreground">Help us improve by sharing your feedback.</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <StarIcon className="w-8 h-8 cursor-pointer fill-primary" />
              <StarIcon className="w-8 h-8 cursor-pointer fill-primary" />
              <StarIcon className="w-8 h-8 cursor-pointer fill-primary" />
              <StarIcon className="w-8 h-8 cursor-pointer fill-primary" />
              <StarIcon className="w-8 h-8 cursor-pointer fill-muted stroke-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
      <Link href="/recommended" className={buttonVariants()}>
        Back To Recommendation <MoveRight />
      </Link>
    </div>
  );
};

export default Page;
