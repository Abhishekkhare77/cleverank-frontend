import { ArrowUpRight, Eye } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="py-4 px-2">
      <div>
        <h1 className="text-3xl font-semibold">Good Morning, Gaurav</h1>
        <p className="my-1 text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          error debitis ratione quaerat ex eum.
        </p>
        <div className="flex gap-4 mt-8">
          <div className="h-52 w-72 shadow-md">
            <div className="py-2 px-4 flex justify-between">
              {" "}
              <h1 className="text-[#327202] font-semibold text-lg ">
                Total Paper
              </h1>
              <div className="mt-1">
                <img src="/booksIcon.png" alt="icon" />
              </div>
            </div>
            <div className="w-full flex items-center justify-center h-32 text-5xl font-bold bg-gradient-to-r from-[#59C009] to-[#295A04] text-transparent bg-clip-text">
              100
            </div>
          </div>
          <div className="h-52 w-72 shadow-md">
            <div className="py-2 px-4 flex justify-between">
              {" "}
              <h1 className="text-[#327202] font-semibold text-lg ">Tracks</h1>
            </div>
            <div className="w-full flex items-center justify-center h-32 text-5xl font-bold bg-gradient-to-r from-[#59C009] to-[#295A04] text-transparent bg-clip-text">
              03
            </div>
          </div>
          <div className="h-52 w-72 shadow-md">
            <dv className="py-2 px-4 flex justify-between">
              {" "}
              <h1 className="text-[#327202] font-semibold text-lg ">Unkonn</h1>
            </dv>
          </div>
          <div className="h-52 w-72 shadow-md">
            <div className="py-2 px-4 flex justify-between">
              {" "}
              <h1 className="text-[#327202] font-semibold text-lg ">Unkonn</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pr-6 mt-6 gap-4 ">
        <div className="shadow-md w-1/2 py-2 px-4">
          <h1 className="text-[#327202] font-semibold text-lg ">
            Your Research Paper
          </h1>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              {" "}
              <div className="h-12 w-10 bg-gray-300"></div>
              <div className="ml-3">
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur.....
                </h1>
                <h1 className="text-xs text-red-500">15 Days Left</h1>
              </div>
            </div>
            <div className="text-gray-500 flex items-center">
              <Eye />
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 mt-2"></div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              {" "}
              <div className="h-12 w-10 bg-gray-300"></div>
              <div className="ml-3">
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur.....
                </h1>
                <h1 className="text-xs text-red-500">15 Days Left</h1>
              </div>
            </div>
            <div className="text-gray-500 flex items-center">
              <Eye />
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 mt-2"></div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              {" "}
              <div className="h-12 w-10 bg-gray-300"></div>
              <div className="ml-3">
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur.....
                </h1>
                <h1 className="text-xs text-red-500">15 Days Left</h1>
              </div>
            </div>
            <div className="text-gray-500 flex items-center">
              <Eye />
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 mt-2"></div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              {" "}
              <div className="h-12 w-10 bg-gray-300"></div>
              <div className="ml-3">
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur.....
                </h1>
                <h1 className="text-xs text-red-500">15 Days Left</h1>
              </div>
            </div>
            <div className="text-gray-500 flex items-center">
              <Eye />
            </div>
          </div>
        </div>
        <div className="shadow-md w-1/2 py-2 px-4">
          <h1 className="text-[#327202] font-semibold text-lg ">
            Trending Paper
          </h1>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              {" "}
              <div className="h-12 w-10 bg-gray-300"></div>
              <div className="ml-3">
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur.....
                </h1>
                <div className="flex gap-5">
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AI
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-gray-500 flex items-center">
              <ArrowUpRight />
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 mt-2"></div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              {" "}
              <div className="h-12 w-10 bg-gray-300"></div>
              <div className="ml-3">
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur.....
                </h1>
                <div className="flex gap-5">
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AI
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-gray-500 flex items-center">
              <ArrowUpRight />
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 mt-2"></div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              {" "}
              <div className="h-12 w-10 bg-gray-300"></div>
              <div className="ml-3">
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur.....
                </h1>
                <div className="flex gap-5">
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AI
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-gray-500 flex items-center">
              <ArrowUpRight />
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 mt-2"></div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              {" "}
              <div className="h-12 w-10 bg-gray-300"></div>
              <div className="ml-3">
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur.....
                </h1>
                <div className="flex gap-5">
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AI
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                  <h1 className="text-xs bg-[#E7E7E7] px-2 py-0.5 rounded-full">
                    AML
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-gray-500 flex items-center">
              <ArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
