"use client";
import Achievements from "@/components/Tabs/Achievements";
import Followers from "@/components/Tabs/Followers";
import Interests from "@/components/Tabs/Interests";
import Peers from "@/components/Tabs/Peers";
import Submission from "@/components/Tabs/Submission";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
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
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token not found in localStorage");
        return;
      }

      try {
        const response = await fetch(
          "https://cleverank.adnan-qasim.me/auth/my-profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Pass token as Bearer token
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        console.log(data);
        setProfileData(data); // Set the profile data to the state
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex gap-4 h-[calc(100vh-4.48rem)]">
      <div className="w-52 border-r-2 flex flex-col gap-4 ml-2 h-full ">
        <div>
          <div className="w-36 h-36 rounded-full border ml-4">
            <Image
              src="/assets/gaurav-mehta.png"
              alt="img"
              width={1000}
              height={1000}
              quality={100}
              className="  object-cover w-full h-full rounded-full"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-4"> Gaurav Mehta</h1>
          <h1 className="text-sm mt-2">
            National Institute of Technology Raipur(CG), India
          </h1>
          <div className="flex flex-col h-full justify-between mt-4 pb-3">
            <div>
              <Button className="w-44">Follow</Button>
              <Button className="w-44 mt-2">Edit Profile</Button>
            </div>
            <Button variant={"outline"} className="w-44 -mt-2">
              Download PDF
            </Button>
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
              <div className="flex items-center gap-2">
                <Instagram /> Gaurav Mehta
              </div>
              <div className="flex items-center gap-2">
                <Linkedin /> Gaurav Mehta
              </div>
              <div className="flex items-center gap-2">
                <Twitter /> Gaurav Mehta
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <Mail />
                Gaurav Mehta
              </div>
            </div>
          </div>
          <div>
            <div className=" border-2 flex flex-col items-center justify-center size-48 rounded-lg">
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
