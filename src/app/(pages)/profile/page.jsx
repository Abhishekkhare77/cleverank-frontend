import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, CircleUserRound } from "lucide-react";
import React from "react";

const Page = () => {
  const tabsData = [
    {
      value: "About",
      label: "About",
      content:
        "1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio impedit officiis quisquam et deleniti eveniet, voluptates explicabo quas vero incidunt laborum? Optio porro, commodi delectus a neque saepe libero quasi.",
    },
    {
      value: "Read",
      label: "Read",
      content:
        "2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio impedit officiis quisquam et deleniti eveniet, voluptates explicabo quas vero incidunt laborum? Optio porro, commodi delectus a neque saepe libero quasi.",
    },
    {
      value: "Badges",
      label: "Badges",
      content:
        "3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio impedit officiis quisquam et deleniti eveniet, voluptates explicabo quas vero incidunt laborum? Optio porro, commodi delectus a neque saepe libero quasi.",
    },
    {
      value: "Intrests",
      label: "Intrests",
      content:
        "4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio impedit officiis quisquam et deleniti eveniet, voluptates explicabo quas vero incidunt laborum? Optio porro, commodi delectus a neque saepe libero quasi.",
    },
    {
      value: "Followers",
      label: "Followers",
      content:
        "5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio impedit officiis quisquam et deleniti eveniet, voluptates explicabo quas vero incidunt laborum? Optio porro, commodi delectus a neque saepe libero quasi.",
    },
    {
      value: "Peers",
      label: "Peers",
      content:
        "6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio impedit officiis quisquam et deleniti eveniet, voluptates explicabo quas vero incidunt laborum? Optio porro, commodi delectus a neque saepe libero quasi.",
    },
    {
      value: "Submission",
      label: "Submission",
      content:
        "7 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio impedit officiis quisquam et deleniti eveniet, voluptates explicabo quas vero incidunt laborum? Optio porro, commodi delectus a neque saepe libero quasi.",
    },
  ];

  return (
    <div className="mx-36 my-6">
      <div className=" flex justify-between gap-6">
        <div className="flex gap-10">
          <CircleUserRound className="h-28 w-28 " />
          <div className="">
            <div className="text-2xl font-semibold ml-3">Abhishek Khare</div>
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
          <div className="text-center border pt-9  h-32 w-40 rounded-lg">
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
      <div className="flex gap-14 mt-6">
        <Tabs defaultValue="About" className="w-[400px]">
          <TabsList>
            {tabsData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className=" px-6">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-4">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
