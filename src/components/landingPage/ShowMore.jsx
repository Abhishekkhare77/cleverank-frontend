"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const ShowMore = () => {
  const testimonials = [
    {
      name: "Ananya Sharma",
      handle: "@ananya_researcher",
      text: "Cleverank helped me secure a research internship at a leading university by showcasing my expertise. The AI-driven recommendations and progress tracking made it easy to build my research profile!",
    },
    {
      name: "Rahul Desai",
      handle: "@rahul_phdjourney",
      text: "I completed several papers with Cleverank’s bounty program and earned enough to fund my conference trip. Their personalized learning tools make understanding even the toughest topics enjoyable.",
    },
    {
      name: "Emily Nguyen",
      handle: "@emily_lovesdata",
      text: "After using Cleverank for just 6 months, I unlocked a scholarship for my PhD program. The platform's ability to highlight my research skills to academic advisors was a game-changer.",
    },
    {
      name: "Kabir Malhotra",
      handle: "@kabir_careerboost",
      text: "The interactive quizzes and automated assessments not only helped me learn but also stand out during job interviews. I recently got hired as a data analyst thanks to Cleverank's skills validation tools.",
    },
    {
      name: "Sophia Lee",
      handle: "@sophia_ai_enthusiast",
      text: "Cleverank introduced me to niche research areas in AI, helping me gain recognition on global forums. The Karma points and leaderboard feature kept me motivated, and I’ve even earned collaboration offers from industry leaders.",
    },
    {
      name: "David Johnson",
      handle: "@david_innovates",
      text: "Being a part of Cleverank’s global community helped me showcase my research to potential employers. I’ve received multiple offers and started freelancing on AI projects!",
    },
    {
      name: "Lina Martinez",
      handle: "@lina_tech_pioneer",
      text: "Thanks to Cleverank’s innovative learning modules and real-world project opportunities, I was able to transition from a career in marketing to AI research. The mentorship and resources were invaluable in building my new career path.",
    },
    {
      name: "James Kwon",
      handle: "@james_techie",
      text: "Cleverank’s tailored career tracks helped me sharpen my technical skills, and I landed a position at a top tech company. The progress tracking feature kept me focused and on track throughout my learning journey.",
    },
    {
      name: "Olivia Carter",
      handle: "@olivia_datawiz",
      text: "I used Cleverank to upskill in machine learning, and within a few months, I was able to land my dream role as a data scientist. The platform’s personalized learning path gave me exactly what I needed to succeed.",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="relative py-8">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 border border-gray-200"
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold">{testimonial.name}</h2>
              {testimonial.role && (
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              )}
              {testimonial.handle && (
                <p className="text-sm text-blue-500">{testimonial.handle}</p>
              )}
            </div>
            <p className="text-[#71717a]">{testimonial.text}</p>
          </div>
        ))}
      </div>
      {visibleCount < testimonials.length && (
        <div className=" absolute bg-gradient-to-t from-gray-50/70 via-gray-50/80 to-gray-100/50 h-72 w-full bottom-6  flex justify-center mt-8">
          <Button
            className="px-6 py-2 absolute bottom-16 bg-black hover:bg-black/85"
            onClick={handleShowMore}
          >
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShowMore;
