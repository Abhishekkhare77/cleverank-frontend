import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="mx-36 my-6">
      <div className=" flex justify-between gap-6">
        <div className="flex gap-10">
          <div className="border h-28 w-28 rounded-full"></div>
          <div className="">
            <div className="text-2xl font-semibold ml-3">Gyan Prakash</div>
            <div className="flex">
              <Award className="w-10 h-10 " />
              <Award className="w-10 h-10 " />
              <Award className="w-10 h-10 " />
              <Award className="w-10 h-10 " />
              <Award className="w-10 h-10 " />
              <Award className="w-10 h-10 " />
            </div>
          </div>
        </div>
        <div className=" w-40">
          <div className="text-center border p-6">
            <div className="text-4xl font-semibold">67</div>
            <div>Page Reads</div>
          </div>
          <div className="flex justify-between mt-3">
            <Button>Follow</Button>
            <Button>Contact</Button>
          </div>
          <div className="mt-3">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <div className="flex gap-14">
        <div>about</div>
        <div>about</div>
        <div>about</div>
        <div>about</div>
        <div>about</div>
        <div>about</div>
        <div>about</div>
      </div>
    </div>
  );
};

export default Page;
