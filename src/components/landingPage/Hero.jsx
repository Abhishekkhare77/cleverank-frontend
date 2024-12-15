import { Book, IndianRupee, User } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import HeroCardAnimation from "./HeroCardAnimation";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const institutionImage = [
    "/Marquee/logo-1.png",
    "/Marquee/logo-2.png",
    "/Marquee/logo-3.png",
    "/Marquee/logo-4.png",
    "/Marquee/logo-5.png",
    "/Marquee/logo-6.png",
    "/Marquee/logo-7.png",
    "/Marquee/logo-8.png",
    "/Marquee/logo-9.png",
    "/Marquee/logo-10.png",
    "/Marquee/logo-11.png",
    "/Marquee/logo-13.png",
    "/Marquee/logo-14.png",
    "/Marquee/logo-15.png",
    "/Marquee/logo-16.png",
    "/Marquee/logo-17.png",
    "/Marquee/logo-18.png",
    "/Marquee/logo-19.png",
    "/Marquee/logo-20.png",
    "/Marquee/logo-21.png",
    "/Marquee/logo-22.png",
    "/Marquee/logo-23.png",
    "/Marquee/logo-24.png",
    "/Marquee/logo-25.png",
    "/Marquee/logo-26.png",
    "/Marquee/logo-27.png",
    "/Marquee/logo-28.png",
  ];

  return (
    <div>
      <Card className="py-5 flex justify-between mt-8">
        <CardHeader className="flex flex-col gap-6 w-1/2 ml-3">
          <CardTitle className="text-6xl">
            Elevate Your <br /> Intellectual Persona
          </CardTitle>
          <CardDescription>
            Transform the way the world sees your intellect. Keep track of the
            research papers you&apos;ve read and share your intellectual
            achievements with a community that values knowledge.
          </CardDescription>
          <CardDescription className="text-black text-lg flex gap-5 ">
            <div className=" py-6 text-sm flex flex-col items-center justify-center gap-2 border border-gray-100 rounded-lg  w-40 mt-3 text-gray-500">
              <Book className="size-8 " />
              <span className="text-3xl font-extrabold "> 10,000+ </span>
              <span className="-mt-2 ">Paper</span>
            </div>
            <div className=" py-6   text-sm flex flex-col items-center justify-center gap-2 border border-gray-100 rounded-lg  w-40 mt-3 text-gray-500">
              <User className="size-8" />
              <span className="text-3xl font-extrabold">3,500+ </span>
              <span className="-mt-2">Student</span>
            </div>
            <div className=" py-6  text-sm flex flex-col items-center justify-center gap-2 border border-gray-100 rounded-lg  w-40 mt-3 text-gray-500">
              <IndianRupee className="size-8" />
              <span className="text-3xl font-extrabold"> 145,343</span>
              <span className="-mt-2">Bounties</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className=" w-1/2 flex justify-end ">
          <HeroCardAnimation />
        </CardContent>
      </Card>
      <div className=" border-b border-t flex justify-between items-center py-5 mt-6 px-2">
        <p className="text-[#898989] w-64">
          Trusted by students <br /> accros the colleges
        </p>
        <Marquee className="mt-2 md:mt-0 text-white">
          <div className="flex gap-14  mr-14 ">
            {institutionImage.map((url, index) => (
              <div key={index} className="h-14 w-14 flex items-center">
                <Image
                  src={url}
                  alt={`Image`}
                  height={1000}
                  width={1000}
                  quality={100}
                  className="object-cover "
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
