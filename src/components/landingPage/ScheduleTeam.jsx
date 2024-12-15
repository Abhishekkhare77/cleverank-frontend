import Image from "next/image";
import Link from "next/link";
import TitleSubTitle from "../TitleSubTitle";
import { Button } from "../ui/button";
import ShowMore from "./ShowMore";

const ScheduleTeam = () => {
  return (
    <div>
      <div className="px-1 py-6 md:py-20">
        <div className="flex gap-10">
          <div className="flex items-center">
            <div className="flex flex-col pb-3.5 w-full items-center text-center md:items-start md:text-left">
              <h1 className="text-6xl pb-3 font-semibold ">
                Engage with Research Leaders Worldwide
              </h1>

              <p className=" text-[#898989] ">
                Connect with top minds globally through Cleverank. <br />
                Discuss groundbreaking ideas, climb leaderboards, earn badges,{" "}
                <br />
                and rise through the ranks as you collaborate on research
                projects.
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
            <Image
              src="/students-image.png"
              alt="img"
              height={1000}
              width={1000}
              quality={100}
              className=" rounded-xl opacity-50   "
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
