import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Learning = () => {
  const content = [
    {
      title: "Learning should be fun and rewarding!",
      text: [
        "As you progress, you’ll earn Karma points, unlock badges, and compete with other learners globally.",
        "Karma not only represents your academic achievements but also contributes to your position in the global Cleverank leaderboard, where you can see how you stack up against students and researchers worldwide.",
      ],
    },
    {
      title: "Bounties and Passive Income",
      text: [
        "Learning should be both fulfilling and financially rewarding. Many research papers featured on our platform come with bounties—rewards you can earn while enhancing your knowledge and building expertise in your field.",
      ],
    },
    {
      title: "Prove Your Expertise, Unlock Career Opportunities",
      text: [
        "Your Cleverank profile is more than just a record of your learning journey—it’s a powerful tool to help you advance in your career.",
      ],
      listItems: [
        {
          title: "Stand Out from Crowd",
          text: "Display your research and stand out to potential employers, academic advisors, and research institutions.",
        },
        {
          title: "Unlock Career Opportunities",
          text: "High-performing users have higher chances of access to bounties, scholarships, and opportunities in PhDs.",
        },
      ],
    },
    {
      title: "Why Choose Cleverank?",
      listItems: [
        {
          title: "Personalized Learning",
          text: "Research papers and journals tailored to your interests, goals, and career aspirations.",
        },
        {
          title: "Interactive Learning Tools",
          text: "AI-powered explanations, quizzes, and live chat with research papers help you learn effectively.",
        },
        {
          title: "Rewards and Recognition",
          text: "Earn Karma, badges, and bounties as you master papers and compete with a global community.",
        },
        {
          title: "Career Advancement",
          text: "Prove your expertise and unlock scholarships, job opportunities, and PhD admissions.",
        },
      ],
    },
    {
      title: "Join the Cleverank Community Today!",
      text: [
        "Cleverank is more than just a platform—it’s your partner in research and career growth. Whether you’re learning, earning, or advancing your career, we provide the tools, resources, and opportunities you need to succeed.",
        "Ready to start? Sign up today and begin your journey with Cleverank—where learning and opportunity meet.",
      ],
    },
  ];
  return (
    <div className="mx-48 ">
      {content.map((section, index) => (
        <div key={index}>
          <h1 className="text-2xl font-semibold mt-6">{section.title}</h1>
          {section.text &&
            section.text.map((paragraph, textIndex) => (
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

      <div className=" relative  w-full h-80 mt-10 ">
        <Image
          src="/AboutImg/about_backgroung.jpg"
          alt="img"
          height={1000}
          width={1000}
          quality={100}
          className=" absolute  w-full h-full rounded-lg opacity-50"
        />
        <div className="absolute top-20 left-8">
          <div className="text-4xl font-semibold">
            Join the Cleverank <br /> Community Today!
          </div>
          <div className="flex justify-between items-center pr-8">
            <div className="mt-4 text-[#686868] pr-36">
              Cleverank is more than just a platform—it&apos;s your partner in
              research and career growth. Whether you&apos;re learning, earning,
              or advancing your career, we provide the tools, resources, and
              opportunities you need to succeed.
            </div>
            <Button className="bg-black hover:bg-black/85"> Join Now </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
