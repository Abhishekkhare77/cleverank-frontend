import React from "react";
import { Button } from "../ui/button";

const HowClaverankWork = () => {
  const content = [
    {
      title: "Get Started in Minutes",
      text: [
        "Register with Cleverank by providing your academic details, interests, and career goals. Our AI will tailor research recommendations and learning paths to suit you. Or, if you’re part of an institution, contact your professor for access to your academic account and begin building your research portfolio.",
      ],
    },
    {
      title: "Discover What Matters Most to You",
      text: [
        "Cleverank leverages advanced AI to analyze your interests, career goals, and expertise, curating research papers based on key metrics like impact factor, h-index, peer citations, and emerging trends, keeping you at the forefront of your field.",
      ],
    },
    {
      title: "Engage with Research like Never Before",
      text: [
        "Engage with the content in a way that suits your learning style. From concept explanations and real-time chat to quizzes and assessments, we make complex research more digestible, allowing you to grasp the core ideas and practical applications quickly.",
      ],
    },
    {
      title: "AI-Powered Learning & Assessment",
      text: [
        "As you study a research paper, Cleverank offers interactive quizzes, flashcards, and concept breakdowns to reinforce your learning. Afterward, you can take an automated assessment where AI evaluates your understanding and provides personalized feedback.",
      ],
    },
    {
      title: "Earn by Completing Research Papers",
      text: [
        "Some research papers come with bounties! As you complete assignments and master research papers, you can earn passive income, turning your learning efforts into financial rewards. Explore bounties in your field and start earning while you learn.",
      ],
    },
    {
      title: "Showcase Your Mastery and Earn Rewards",
      text: [
        "Complete research papers, engage with assessments, and earn Karma points as you demonstrate mastery of complex topics. Complete tracks, earn badges, unlock career-boosting opportunities, and showcase your expertise to the global community.",
      ],
    },
    {
      title: "Validate Your Expertise and Advance Your Career",
      text: [
        "Grab your chance to showcase your expertise to potential employers, academic institutions, and professional networks. Earn scholarships, PhD placements, job opportunities, and career advancement based on your research achievements and skills.",
      ],
    },
  ];
  return (
    <div className="mx-48 mt-12">
      <h1 className="text-center text-4xl font-bold ">How Cleverank Works?</h1>
      {content.map((section, index) => (
        <div key={index} className="mt-10">
          <h1 className="text-2xl font-semibold mb-4">{section.title}</h1>
          {section.text.map((paragraph, textIndex) => (
            <p key={textIndex} className="text-[#686868]">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
      <div className="flex bg-gray-100 py-8 px-6 justify-between rounded-lg mt-8">
        <h1 className="text-2xl font-bold">
          Ready to Take Your Learning to the Next Level?
        </h1>
        <Button className="bg-black hover:bg-black/85">Join Cleverank</Button>
      </div>
    </div>
  );
};

export default HowClaverankWork;
