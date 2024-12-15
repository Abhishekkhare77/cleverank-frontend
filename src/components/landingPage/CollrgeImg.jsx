import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CollrgeImg = () => {
  return (
    <div className=" relative flex items-center justify-center ">
      <div className="h-[36rem] w-full">
        <img
          src="/college-building.png"
          alt="img"
          className="absolute rounded-t-lg h-full w-full left-0 object-cover opacity-20"
        />
      </div>

      <div className=" absolute flex flex-col items-center gap-4   ">
        <div className="text-4xl font-bold text-center">
          Explore latest Research Papers, <br />
          Engage and Excel
        </div>
        <Link href="/register">
          <Button className="bg-black hover:bg-black/85">
            {" "}
            Start Cleverank Journey Elevate Your
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CollrgeImg;
