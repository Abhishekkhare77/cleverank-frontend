import React from "react";
import { Button } from "../ui/button";
import TitleSubTitle from "../TitleSubTitle";
import { Card } from "../ui/card";
import ShowMore from "./ShowMore";

const ScheduleTeam = () => {
  return (
    <div>
      <div className="px-1 py-6 md:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex md:items-center">
            <div className="flex flex-col pb-3.5 w-full items-center text-center md:items-start md:text-left">
              <h1 className="text-6xl pb-3 font-semibold ">
                Scheduling for <br /> teams simplified
              </h1>

              <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">
                Unlock effortless collaboration with our advanced group meeting
                capabilities. Use our routing forms and round-robin features to
                enhance your team&apos;s efficiency.
              </p>

              <div className="mt-6 flex items-center justify-center gap-4">
                <Button>Sign Up</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative grid aspect-video w-full grid-cols-1 ">
              <div className="absolute bg-yellow-100 h-full w-full bg-opacity-55">
                <div className="text-white p-4"> shimmer</div>
                <div className="absolute text-white bottom-4 px-4 w-72 font-semibold text-lg">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <img
                src="https://www.datocms-assets.com/77432/1733237333-team-photo-from-campsite.png"
                alt="See how Shimmer transformed ADHD coaching with Cal.com"
                className="aspect-video w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <TitleSubTitle
        title="See why our users love Cal.com"
        subtitle="Read the impact we've had from those who matter most - our customers."
      />
      <ShowMore />
      <Card className="h-64 mt-20"></Card>
    </div>
  );
};

export default ScheduleTeam;
