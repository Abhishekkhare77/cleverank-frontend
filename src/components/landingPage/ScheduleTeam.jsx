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

          <div className=" ">
            <img
              src="/students-image.png"
              alt="img"
              className=" object-cover rounded-xl opacity-50 "
            />
          </div>
        </div>
      </div>
      <TitleSubTitle
        title="See Why Our Users Love Cleverank"
        subtitle="Read how Cleverank has transformed the way our users engage with research, grow their expertise, and unlock amazing opportunities."
      />
      <ShowMore />
    </div>
  );
};

export default ScheduleTeam;
