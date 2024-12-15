"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const paperId = searchParams.get("paper_id");
  const difficulty = searchParams.get("selected_difficulty");
  const router = useRouter();

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [permissionError, setPermissionError] = useState("");

  const [paper, setPaper] = useState(null);

  const contentData = [
    {
      title: "Assessment Process",
      sections: [
        {
          subtitle: "Purpose of Viva Voce",
          items: [
            "The Viva Voce is designed to evaluate the user’s understanding of the research paper and their ability to provide articulate and well-thought-out responses in a live setting.",
          ],
        },
        {
          subtitle: "Format of the Assessment",
          items: [
            "The user will be asked five questions based on the research paper.",
            "Each question will be presented live on camera.",
            "The user will have 3 minutes to answer each question.",
          ],
        },
        {
          subtitle: "Question Types",
          items: [
            "Summary and key takeaways",
            "Analysis and critical insights",
            "Real-world applications or implications of the research",
            "Limitations or challenges discussed in the paper",
            "User’s personal opinion or reflection on the content",
          ],
          additionalText:
            "Questions will focus on key elements of the research paper, including:",
        },
      ],
    },
    {
      title: "Rules and Guidelines",
      sections: [
        {
          subtitle: "Live Camera Requirement",
          items: [
            "The assessment will be conducted via a live camera to ensure authenticity and engagement.",
            "Ensure the camera is clear and operational for the entire duration of the assessment.",
          ],
        },
        {
          subtitle: "No Cheating",
          items: [
            "The user must not use external help, pre-written scripts, or electronic devices (other than the camera setup).",
            "Notes are not permitted during the live session.",
          ],
        },
        {
          subtitle: "Time Management",
          items: [
            "Each response must be completed within the allotted 3 minutes per question.",
            "Exceeding the time limit may result in deductions or termination of the session.",
          ],
        },
        {
          subtitle: "Honesty and Authenticity",
          items: [
            "All answers must be original and reflect the user’s understanding of the research paper.",
          ],
        },
        {
          subtitle: "Environment Requirements",
          items: [
            "Choose a quiet, distraction-free environment for the Viva Voce session.",
            "Ensure good lighting and clear audio for seamless communication.",
          ],
        },
      ],
    },
    {
      title: "Do’s and Don’ts",
      sections: [
        {
          subtitle: "Do’s",
          items: [
            "Stay calm and composed during the assessment.",
            "Provide clear, concise, and structured answers.",
            "Use examples and references from the research paper to substantiate your points.",
          ],
        },
        {
          subtitle: "Don’ts",
          items: [
            "Avoid looking away from the camera or appearing disengaged.",
            "Do not read directly from external materials or rely on others for help.",
            "Avoid giving generic or off-topic answers.",
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    if (!paperId) return; // Ensure paper_id exists before fetching data

    const fetchPaper = async () => {
      try {
        const response = await fetch(`https://cleverank.adnan-qasim.me/papers/get-paper/${paperId}`, {
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
      } catch (err) {
        console.error(err);
      }
    };

    fetchPaper();

  }, [paperId]);

  const handleStart = async () => {
    setIsLoading(true);
    setPermissionError("");

    try {
      // Request camera and microphone permissions
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

      // Permissions granted, navigate to the viva page
      router.push(
        `/viva/?paper_id=${encodeURIComponent(paperId)}&selected_difficulty=${encodeURIComponent(
          difficulty
        )}`
      );
    } catch (error) {
      console.error("Permission Error:", error);
      setPermissionError(
        "Unable to access camera and microphone. Please check your browser settings and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-8 md:mx-32 mt-4 mb-10">
      <div className="font-semibold text-2xl text-center">
        Viva Voce Assessment Guidelines
      </div>
      <div className="flex flex-col md:flex-row md:justify-between my-4">
        <div className="text-black text-center md:text-left">
          {/* Replace with actual paper title */}
          <span className="block max-w-xl text-xl font-bold tracking-tight">{paper?.paper_title ??
            (
              <div>
                <Skeleton className={"w-96 h-4"} />
                <Skeleton className={"w-96 h-4"} />
              </div>
            )
          }</span>
        </div>
        <div className="font-semibold text-xl text-center md:text-right">
          60 Points
        </div>
      </div>

      {contentData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-xl font-semibold mt-6">{section.title}</h2>
          {section.sections.map((subsection, subIndex) => (
            <div key={subIndex} className="mt-4">
              <p className="text-lg font-medium">
                {subIndex + 1}. {subsection.subtitle}
              </p>
              {subsection.additionalText && (
                <p className="mt-2 text-gray-500">
                  {subsection.additionalText}
                </p>
              )}
              <ul className="mt-2 ml-6 list-disc text-gray-700">
                {subsection.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mt-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      {/* Acknowledgment section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Acknowledgment</h2>
        <p className="text-gray-500 mt-2">
          By participating in this Viva Voce assessment, I confirm that I have
          read and understood the rules and guidelines stated above, and I agree
          to abide by them.
        </p>
      </div>

      {/* Checkbox and Start Button */}
      <div className="mt-6 flex items-center">
        <Checkbox
          checked={isChecked}
          onCheckedChange={(checked) => setIsChecked(checked)}
          id="acknowledgment-checkbox"
        />
        <label htmlFor="acknowledgment-checkbox" className="ml-2 text-gray-700">
          I understand the terms and conditions of Viva Voce.
        </label>
      </div>

      {permissionError && (
        <p className="mt-2 text-red-600">{permissionError}</p>
      )}

      <Button
        className="px-12 mt-4"
        onClick={handleStart}
        disabled={!isChecked || isLoading}
      >
        {isLoading ? "Starting..." : "Start"}
      </Button>
    </div>
  );
};

export default Page;
