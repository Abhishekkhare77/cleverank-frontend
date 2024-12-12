import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import HeroCardAnimation from "./HeroCardAnimation";
import { Banknote, Book, User } from "lucide-react";

const Hero = () => {
  const Image = [
    "https://www.datocms-assets.com/77432/1726142372-deel-1.svg",
    "https://www.datocms-assets.com/77432/1726142372-vercel-logo.svg",
    "https://www.datocms-assets.com/77432/1731689014-angellist.svg",
    "https://www.datocms-assets.com/77432/1731350987-mercury.svg",
    "https://www.datocms-assets.com/77432/1731351596-clip-path-group-marketing-site-3-0.svg",
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
            <div className=" py-6 text-sm flex flex-col items-center justify-center gap-2 border border-black rounded-lg  w-40 mt-3">
              <Book className="size-8" />
              <span className="text-3xl font-extrabold"> 10,000 </span>
              <span className="-mt-2">Paper</span>
            </div>
            <div className=" py-6   text-sm flex flex-col items-center justify-center gap-2 border border-black rounded-lg  w-40 mt-3">
              <User className="size-8" />
              <span className="text-3xl font-extrabold">3,500 </span>
              <span className="-mt-2">Student</span>
            </div>
            <div className=" py-6  text-sm flex flex-col items-center justify-center gap-2 border border-black rounded-lg  w-40 mt-3">
              <Banknote className="size-8" />
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
        <p className="text-[#898989]">
          Trusted by top <br /> colleges in the world
        </p>
        <div className="flex gap-16">
          {Image.map((url, index) => (
            <img key={index} src={url} alt={`Image`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
