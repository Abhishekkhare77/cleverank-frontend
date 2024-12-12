"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const sections = [
    {
      title: "Assessment",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellat velit! Eum facere eius culpa voluptas recusandae ab quam alias itaque maxime dolorum, ducimus omnis ad necessitatibus, a nobis sed! Assumenda suscipit repellendus laboriosam tempora nihil iure eaque. Quidem, eveniet!",
    },
    {
      title: "Questions & Answers",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellat velit! Eum facere eius culpa voluptas recusandae ab quam alias itaque maxime dolorum, ducimus omnis ad necessitatibus, a nobis sed! Assumenda suscipit repellendus laboriosam tempora nihil iure eaque. Quidem, eveniet!",
    },
    {
      title: "Time Alloted",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellat velit! Eum facere eius culpa voluptas recusandae ab quam alias itaque maxime dolorum, ducimus omnis ad necessitatibus, a nobis sed! Assumenda suscipit repellendus laboriosam tempora nihil iure eaque. Quidem, eveniet!",
    },
    {
      title: "Camera Rules",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellat velit! Eum facere eius culpa voluptas recusandae ab quam alias itaque maxime dolorum, ducimus omnis ad necessitatibus, a nobis sed! Assumenda suscipit repellendus laboriosam tempora nihil iure eaque. Quidem, eveniet!",
    },
    {
      title: "AI Professor Expectations",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellat velit! Eum facere eius culpa voluptas recusandae ab quam alias itaque maxime dolorum, ducimus omnis ad necessitatibus, a nobis sed! Assumenda suscipit repellendus laboriosam tempora nihil iure eaque. Quidem, eveniet!",
    },
    {
      title: "Do's",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellat velit! Eum facere eius culpa voluptas recusandae ab quam alias itaque maxime dolorum, ducimus omnis ad necessitatibus, a nobis sed! Assumenda suscipit repellendus laboriosam tempora nihil iure eaque. Quidem, eveniet!",
    },
    {
      title: "Dont's",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellat velit! Eum facere eius culpa voluptas recusandae ab quam alias itaque maxime dolorum, ducimus omnis ad necessitatibus, a nobis sed! Assumenda suscipit repellendus laboriosam tempora nihil iure eaque. Quidem, eveniet!",
    },
  ];

  const searchParams = useSearchParams();
  const paperId = searchParams.get("paper_id");
  const difficulty = searchParams.get("selected_difficulty");

  return (
    <div className="mx-32 mt-4 mb-10">
      <div className="font-semibold  text-2xl">Viva Voce</div>
      <div className="flex w-full justify-between my-4">
        <div className="text-gray-500">
          Paper title will come here in the headings cleaverank <br /> another
          line of paper title
        </div>
        <div className="font-semibold text-xl">60 Marks</div>
      </div>
      <div>
        {sections.map((section, index) => (
          <div key={index} className="my-5">
            <div className=" ">{section.title}</div>
            <div className="text-gray-500 text-sm mt-1">{section.content}</div>
          </div>
        ))}
      </div>
      <div>
        <Checkbox /> <span className="ml-2"> I understand terms and conditions of viva voce.</span>
      </div>
      <Link href={`/viva/?paper_id=${paperId}&selected_difficulty=${difficulty}`}>
        <Button className="px-12 mt-6">Start</Button>
      </Link>
    </div>
  );
};

export default Page;
