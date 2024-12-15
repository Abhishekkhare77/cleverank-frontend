import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Transforming = () => {
  const content = [
    {
      title: "What is Cleverank?",
      text: [
        "Cleverank is an Gemini AI-driven platform that curates research papers and journals based on your personal interests, career goals, and expertise. Whether you're a student exploring a new field, a researcher expanding your knowledge, or a professional looking to stay ahead of industry trends, Cleverank helps you discover, learn, and apply the latest research in a way that is engaging, interactive, and rewarding.",
        "Our platform does more than just suggest papers—it understands your learning journey. Through advanced AI algorithms, we identify research that aligns with your unique goals and provide tools to help you grasp complex concepts, interact with the content, and track your progress.",
      ],
    },
    {
      title: "Forget endlessly searching for papers!",
      text: [
        "Cleverank’s intelligent recommendation system uses advanced AI to suggest research papers based on your interests, career trajectory, and the latest trends in your field. With Impact Scores, expertise-building pathways, and cutting-edge developments, you’ll always have access to the most relevant and influential research.",
      ],
    },
    {
      title: "Learn, Interact, and Master",
      text: [
        "Research isn’t just about reading papers—it's about truly understanding and applying what you learn. Cleverank enhances your learning with:",
      ],
      listItems: [
        {
          title: "Concept Breakdown",
          text: "Gemini AI provides easy-to-understand explanations of complex concepts, so you can grasp difficult topics at your own pace.",
        },
        {
          title: "Chat with the Paper",
          text: "Have questions? You can interact directly with the paper’s key ideas through AI-powered chat, making learning feel like a conversation with the author.",
        },
        {
          title: "Automated Assessments",
          text: "Reinforce your learning with quizzes and challenges designed to test your knowledge and comprehension.",
        },
      ],
    },
  ];
  return (
    <div className="mx-48 mt-28">
      <div className="flex">
        <div className="text-6xl font-semibold w-1/2">
          Transforming how you Learn, Grow, and Succeed.
        </div>
        <div className=" h-64 w-1/2">
          <Image
            src="/AboutImg/research-gemini.png"
            alt="img"
            height={1000}
            width={1000}
            quality={100}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className=" flex  w-full justify-between items-center mt-16">
        <div className="w-[34rem]">
          At Cleverank, we’ve revolutionizing how you engage with research
          papers and journals. Powered by advanced Gemini AI, our platform
          curates personalized recommendations, enhances your learning
          experience, and unlocks career opportunities—all while making research
          interactive, rewarding, and fun.
        </div>
        <Link href="/register">
          <Button className=" bg-black hover:bg-black/85  py-8 px-12">
            {" "}
            Start Learning
          </Button>
        </Link>
      </div>

      {content.map((section, index) => (
        <div key={index} className="mt-6">
          <h1 className="text-2xl font-semibold">{section.title}</h1>
          {section.text.map((paragraph, textIndex) => (
            <div key={textIndex} className="mt-4 text-[#686868]">
              {paragraph}
            </div>
          ))}
          {section.listItems && (
            <div className="text-[#686868] mx-16">
              <ul style={{ listStyleType: "disc", color: "black" }}>
                {section.listItems.map((item, listIndex) => (
                  <li key={listIndex} className="my-3">
                    <strong className="">{item.title}:</strong>
                    <span className="ml-1.5 text-[#686868]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Transforming;
