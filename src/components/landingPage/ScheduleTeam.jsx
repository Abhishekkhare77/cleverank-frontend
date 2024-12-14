import React from "react";
import { Button } from "../ui/button";
import TitleSubTitle from "../TitleSubTitle";
import { Card } from "../ui/card";
import ShowMore from "./ShowMore";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ScheduleTeam = () => {
  return (
    <div>
      <div className="px-1 py-6 md:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex md:items-center">
            <div className="flex flex-col pb-3.5 w-full items-center text-center md:items-start md:text-left">
              <h1 className="text-6xl pb-3 font-semibold ">
                Collaboration for Research Simplified
              </h1>

              <p className=" text-[#898989] ">
                Unlock seamless teamwork with Cleverank&apos;s advanced
                collaboration features. Share, discuss, and work on research
                papers together to achieve more.
              </p>

              <div className="mt-6 flex items-center justify-center gap-4">
                <Link href="/register">
                  <Button className="bg-black hover:bg-black/85">
                    Join Now{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative grid aspect-video w-full grid-cols-1 ">
              <div className="absolute bg-yellow-100 h-full w-full bg-opacity-55">
                <div className="text-white p-4"> Empower your Team:</div>
                <div className="absolute text-white bottom-4 px-4 w-96 ">
                  {" "}
                  Use our AI-powered insights, shared annotations, and group
                  discussions to enhance your team&apos;s research capabilities
                  and efficiency.
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
        title="See Why Our Users Love Cleverank"
        subtitle="Read how Cleverank has transformed the way our users engage with research, grow their expertise, and unlock amazing opportunities."
      />
      <ShowMore />
      <Card className="h-64 mt-20 relative flex items-center justify-center">
        <img
          src="https://cal.com/_next/image?url=%2Fsquares-footer.png&w=1080&q=100"
          alt="img"
          className="object-cover h-[15.8rem] w-full"
        />

        <div className=" absolute flex flex-col items-center gap-4">
          <div className="text-4xl font-bold text-center">
            Explor, Learn <br /> Excel
          </div>
          <Link href="/register">
            <Button className="bg-black hover:bg-black/85">
              {" "}
              Get Started <ChevronRight />
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ScheduleTeam;
