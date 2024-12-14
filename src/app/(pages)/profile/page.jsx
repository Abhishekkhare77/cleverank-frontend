"use client";
import About from "@/components/Tabs/About";
import Achievements from "@/components/Tabs/Achievements";
import Followers from "@/components/Tabs/Followers";
import Interests from "@/components/Tabs/Interests";
import Peers from "@/components/Tabs/Peers";
import Read from "@/components/Tabs/Read";
import Submission from "@/components/Tabs/Submission";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

const Page = () => {
  const tabsData = [
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

  const contentRef = useRef(null);

  const downloadPDF = () => {
    const element = contentRef.current;
    const options = {
      margin: 0.5,
      filename: "profile.pdf",
      html2canvas: { scale: 2 },  // Capture at higher resolution
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };


  return (
    <div ref={contentRef} className="flex gap-4 h-[calc(100vh-4.48rem)]">
      <div className="w-52 border-r-2 flex flex-col gap-4 ml-2 h-full ">
        <div>
          <div className="w-36 h-36 rounded-full border ml-4">
            <Image
              src="/assets/Abhishek-kahre-concur.png"
              alt="img"
              width={1000}
              height={1000}
              quality={100}
              className="  object-cover w-full h-full rounded-full"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-4"> Abhishek Khare</h1>
          <h1 className="text-sm mt-2">
            Bhilai Institute of Technology Raipur(CG), India
          </h1>
          <div className="flex flex-col h-full justify-between mt-4">
            <div>
              <Button className="w-44">Follow</Button>
              <Button className="w-44 mt-2">Edit Profile</Button>
            </div>
            <Button variant={"outline"} onClick={downloadPDF} className="w-44 -mt-2">Download PDF</Button>
          </div>
        </div>
      </div>
      <div className=" w-[61.5rem] ml-4">
        <div className="w-full flex  justify-between pr-8">
          <div>
            <div className="text-3xl font-bold">AI Ethics Guardian</div>
            <div className="w-[35rem] mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              accusamus numquam autem aut aliquam voluptatem culpa non. Porro,
              eveniet asperiores iure excepturi dolore adipisci numquam! Esse
              nobis corrupti id totam quasi iusto neque facilis commodi, fugit
              cum quas error, aspernatur magnam veniam at non sit blanditiis rem
              dolorum ex a.
            </div>
            <div className="grid grid-cols-2 gap-2 py-4">
              <div className="flex items-center gap-2"><Instagram /> abhishekkhare</div>
              <div className="flex items-center gap-2"><Linkedin /> abhishekkhare</div>
              <div className="flex items-center gap-2"><Twitter /> abhishekkhare</div>
              <div className="flex items-center gap-2"> <Mail /> abhishekkhare</div>
            </div>
          </div>
          <div>
            <div className=" border-2 flex flex-col items-center justify-center size-64 rounded-lg">
              <div className="text-4xl font-semibold">67</div>
              <div>Papers Read</div>
            </div>
          </div>
        </div>

        <div className="flex gap-14 w-full">
          <Tabs defaultValue="Achievements" className="w-full">
            <TabsList className="w-full flex items-center justify-start my-3">
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
