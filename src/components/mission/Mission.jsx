import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Mission = () => {
  const content = [
    {
      title: "Mission",
      list: [
        {
          heading: "Democratizing Knowledge",
          text: `Global research made accessible to everyone, breaking down the barriers that limit knowledge for students, researchers, and professionals alike.`,
        },
        {
          heading: "Driving Social Impact through Education",
          text: `High-quality research available to underserved communities, bridging knowledge gaps and fueling global innovation for a better future.`,
        },
        {
          heading: "Transforming the Future of Education",
          text: `By integrating AI, we are reshaping the learning experience, making it more dynamic, efficient, and aligned with the needs of today’s rapidly changing world.`,
        },
        {
          heading: "Creating a Level Playing Field",
          text: `Research and education open to all, with AI creating equal opportunities for learners to advance in their academic and career pursuits.`,
        },
        {
          heading: "Elevating Learning Habits",
          text: `Building effective research habits, enhancing knowledge retention, and staying ahead of trends through interactive tools and assessments.`,
        },
        {
          heading: "Providing Equal Opportunities",
          text: `Showcasing research achievements to unlock scholarships, PhD opportunities, and career advancements that propel growth and success.`,
        },
      ],
    },
  ];
  return (
    <div className="mx-48 mt-12">
      <Card className="py-5 flex mt-8">
        <CardHeader className="flex flex-col   ">
          <CardTitle className="text-6xl">What is problem today?</CardTitle>
        </CardHeader>
        <CardContent className="  flex justify-end  text-sm text-[#686868]">
          Access to cutting-edge research is increasingly limited due to
          paywalls, geographic disparities, and outdated learning models. Over
          50% of academic journals are locked behind expensive paywalls, making
          it difficult for individuals in low-resource settings to access
          critical knowledge. The rapid pace of global research—doubling every 9
          years—further compounds this problem, leaving many struggling to keep
          up. Traditional learning methods are passive and inefficient, with
          over 60% of students reporting disengagement with complex academic
          content. Additionally, without the right tools to showcase their
          expertise, individuals miss out on career opportunities, scholarships,
          and recognition. There’s a clear need to restructure how research is
          shared and how people engage with it, ensuring that everyone,
          regardless of their background, has equal access to the latest
          knowledge and opportunities.
        </CardContent>
      </Card>

      <div className=" flex justify-between mt-28">
        <div className="flex flex-col  w-1/2 ">
          <div className="text-4xl">Vision</div>
          <div className=" text-sm mt-4">
            At Cleverank, our vision is to democratize access to global research
            and knowledge, creating a level playing field where individuals from
            all backgrounds can engage with the latest discoveries and
            advancements. We believe in the transformative power of AI to bridge
            the knowledge gap, making research and learning accessible,
            interactive, and rewarding for everyone, regardless of their
            location, institution, or resources. We strive to elevate research
            and learning habits, empowering learners to continuously grow and
            unlock their full potential
          </div>
        </div>
        <CardContent className=" h-80 flex justify-end ">
          <div className="flex justify-center w-full">
            <Image
              src="/MissionImg/mission.png"
              alt="img"
              width={200}
              height={200}
              quality={100}
              className="w-full"
            />
          </div>
        </CardContent>
      </div>

      {content.map((section, index) => (
        <div key={index} className="mt-8">
          <h1 className="text-4xl mb-6">{section.title}</h1>
          {/* {section.text && <p className="text-[#686868]">{section.text}</p>} */}
          {section.list && (
            <div className="grid grid-cols-2 gap-4 mt-2">
              {section.list.map((item, idx) => (
                <div key={idx} className=" px-4 py-5 rounded-lg shadow-md">
                  <strong>{item.heading}</strong>
                  <p className="text-[#686868] text-sm mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Mission;
