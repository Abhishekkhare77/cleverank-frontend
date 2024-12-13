import About from "@/components/Tabs/About";
import Achievements from "@/components/Tabs/Achievements";
import Followers from "@/components/Tabs/Followers";
import Interests from "@/components/Tabs/Interests";
import Peers from "@/components/Tabs/Peers";
import Read from "@/components/Tabs/Read";
import Submission from "@/components/Tabs/Submission";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, CircleUserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  const tabsData = [
    { value: "About", label: "About", component: <About /> },
    { value: "Read", label: "Read", component: <Read /> },
    {
      value: "Achievements",
      label: "Achievements",
      component: <Achievements />,
    },
    { value: "Interests", label: "Interests", component: <Interests /> },
    { value: "Followers", label: "Followers", component: <Followers /> },
    { value: "Peers", label: "Peers", component: <Peers /> },
    { value: "Submission", label: "Submission", component: <Submission /> },
  ];

  return (
    <div className="flex gap-4 h-[calc(100vh-4.48rem)]">
      <div className="w-52 border-r-2 flex flex-col gap-4  ml-2 h-full ">
        <div>
          <div className="w-36 h-36 rounded-full border">
            <Image
              src="/assets/Abhishek-kahre-concur.png"
              alt="img"
              width={1000}
              height={1000}
              quality={100}
              className="  object-cover w-full h-full rounded-full"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-4"> Abhishek Khera</h1>
          <h1 className="text-sm mt-2">
            Bhilai Institute of Technology Raipur(CG), India
          </h1>
          <div className=" mt-4">
            <Button className="w-44">Follow</Button>
          </div>
        </div>
      </div>
      <div className=" w-[61.5rem] ml-4">
        <div className="w-full flex  justify-between pr-8">
          <div>
            <div className="text-3xl font-bold">Cleverank</div>
            <div className="w-[35rem] mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              accusamus numquam autem aut aliquam voluptatem culpa non. Porro,
              eveniet asperiores iure excepturi dolore adipisci numquam! Esse
              nobis corrupti id totam quasi iusto neque facilis commodi, fugit
              cum quas error, aspernatur magnam veniam at non sit blanditiis rem
              dolorum ex a.
            </div>
          </div>
          <div className=" w-40">
            <div className="text-center border pt-9  h-32 w-36 rounded-lg">
              <div className="text-4xl font-semibold">67</div>
              <div>Page Reads</div>
            </div>

            <div className="mt-3 text-sm">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>

        <div className="flex gap-14 ">
          <Tabs defaultValue="About" className="w-[400px]">
            <TabsList>
              {tabsData.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className="px-6">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabsData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-4">
                {tab.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Page;
