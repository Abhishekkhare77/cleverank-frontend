"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const paperId = searchParams.get("paper_id");
  const difficulty = searchParams.get("selected_difficulty");

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

  return (
    <div className="mx-32 mt-4 mb-10">
      <div className="font-semibold text-2xl">
        Viva Voce Assessment Guidelines
      </div>
      <div className="flex w-full justify-between my-4">
        <div className="text-gray-500">
          Paper title will come here in the headings cleaverank <br /> another
          line of paper title
        </div>
        <div className="font-semibold text-xl">60 Points</div>
      </div>

      {contentData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h1 className="text-xl font-semibold mt-6">{section.title}</h1>
          {section.sections.map((subsection, subIndex) => (
            <div key={subIndex}>
              <p className="text-lg mt-2">
                {subIndex + 1}. {subsection.subtitle}
              </p>
              {subsection.additionalText && (
                <p className="mt-2 text-gray-500">
                  {subsection.additionalText}
                </p>
              )}
              <ul
                style={{ listStyleType: "disc", color: "black" }}
                className="mt-2 ml-10"
              >
                {subsection.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      {/* Acknowledgment section as an ordered list */}
      <div>
        <h1 className="text-xl font-semibold mt-6">Acknowledgment</h1>

        <p className="text-gray-500 mt-2">
          By participating in this Viva Voce assessment, I confirm that I have
          read and understood the rules and guidelines stated above, and I agree
          to abide by them.
        </p>
      </div>

      <div className="mt-6">
        <Checkbox />{" "}
        <span className="ml-2">
          I understand terms and conditions of viva voce.
        </span>
      </div>

      <Link
        href={`/viva/?paper_id=${paperId}&selected_difficulty=${difficulty}`}
      >
        <Button className="px-12 mt-2">Start</Button>
      </Link>
    </div>
  );
};

export default Page;
