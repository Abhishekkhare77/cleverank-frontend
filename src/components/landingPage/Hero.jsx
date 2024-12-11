import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import HeroCardAnimation from "./HeroCardAnimation";

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
        <CardHeader className="flex flex-col gap-5 w-1/2">
          <CardTitle className="text-6xl">
            The better way <br /> to schedule
          </CardTitle>
          <CardDescription>
            A fully customizable scheduling experience for individuals,
            businesses taking calls and developers building scheduling platforms
            where users meet users.
          </CardDescription>
          <CardDescription className="text-black text-lg">
            10,000 Paper <br />
            3,500 Student <br /> R145,343 Bounties
          </CardDescription>
        </CardHeader>
        <CardContent className=" w-1/2 flex justify-end ">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPx7zWwNhPBcu1qzwMlhVfEo1WVvoMwwGctT6TMs09GKsi98feFdPLqc3kxtBGnGDP0Tk&usqp=CAU"
            alt="img"
            className="object-cover h-96  "
          /> */}

          <HeroCardAnimation />
        </CardContent>
      </Card>
      <div className=" border-b border-t flex justify-between items-center py-5 mt-6 px-2">
        <p className="text-[#898989]">
          Trusted by fast-growing <br /> companies around the world
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
