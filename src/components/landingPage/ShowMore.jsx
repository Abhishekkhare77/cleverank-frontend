"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const ShowMore = () => {
  const testimonials = [
    {
      name: "Guillermo Rauch",
      handle: "@rauchg",
      text: "Coolest domain. Check. Coolest mission. Check. Coolest product. Check. cal.com",
    },
    {
      name: "Nick",
      handle: "@MrNick_Buzz",
      text: "Switched from @Calendly to @calcom last week and already adding a potential $4,500 MRR and Zero spam to my calendar. I used to have time slots available 5 days a week on Calendly, but now it’s just two days. I feel more productive and have more time for other things.",
    },
    {
      name: "Nickolas Tazes",
      handle: "@nickolas_tazes",
      text: "I had a Calendly and a cal.com account. Now I only have @calcom. It’s a no-brainer!",
    },
    {
      name: "Wilson Wilson",
      role: "Co-founder of Senja",
      text: "I just learned about cal.com this morning and now they have a new customer. I’m head over heels about Peer’s project. It just works! Well done!",
    },
    {
      name: "victoriame",
      handle: "@vmelnikova_en",
      text: "A couple of days back, I tweeted about choosing between @calcom and @Calendly - @peer_rich responded and kindly offered to showcase the product. We had a quick call where he did a demo of functionality. I am hooked! Specifically, I am excited to use...",
    },
    {
      name: "Andrew S. Rosen",
      handle: "@Andrew_S_Rosen",
      text: "Regarding productivity software that I’ve been binging lately, I just tried out (@calcom), and it is an amazing (better) alternative to Calendly in my opinion. This is particularly true for the free tier. I think I’ll add this one to my email signature.",
    },
    {
      name: "Denis",
      handle: "@denisrasulev",
      text: "One of the best tools for scheduling and my favorite after so many other options tried.",
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
            className="px-6 py-2 absolute bottom-16 "
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
