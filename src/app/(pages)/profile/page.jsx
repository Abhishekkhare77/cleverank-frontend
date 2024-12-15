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

  const tabsData = profileData
    ? [
      {
        value: "Achievements",
        label: "Achievements",
        component: (
          <Achievements
            badges={profileData.badges || []}
            tracks={profileData.tracks || []}
            titles={profileData.titles || []}
          />
        ),
      },
      { value: "Interests", label: "Interests", component: <Interests /> },
      { value: "Followers", label: "Followers", component: <Followers /> },
      { value: "Peers", label: "Peers", component: <Peers /> },
      { value: "Submission", label: "Submission", component: <Submission /> },
    ]
    : [];

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-4 h-[calc(100vh-2vh)]">
      {/* Left Section */}
      <div className="w-64 border-r-2 flex flex-col gap-4 h-full mx-2">
        <div className="flex flex-col items-center mt-8">
          <div className="w-36 h-36 rounded-full border ml-4">
            <Image
              src={profileData.profileImage || "/assets/gaurav-mehta.png"}
              alt="Profile"
              width={1000}
              height={1000}
              quality={100}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <h1 className="text-2xl font-semibold text-center mt-4">
            {profileData.name || "User Name"}
          </h1>
          <h1 className="text-sm mt-2 text-center">
            {profileData?.interests[0]?.interest_stream || "No Stream Provided"}
          </h1>
          <div className="flex flex-col items-center mt-4">
            <Button className="w-44">Follow</Button>
            <Button className="w-44 mt-2">Edit Profile</Button>
            <div className="flex flex-col gap-3 my-8">
              <div className="flex items-center gap-2 text-sm">
                <Instagram />{" "}
                {profileData.social_details?.instagram || "Intellect124"}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Linkedin />{" "}
                {profileData.social_details?.linkedin || "Intellect124"}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Twitter />{" "}
                {profileData.social_details?.twitter || "Intellect124"}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail /> {profileData.email.split("@")[0]}
              </div>
            </div>
            <Button variant={"outline"} className="w-44 mt-2 border-2">
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className=" w-full ml-4 mt-8">
        <div className="w-full flex justify-between">
          <div>
            <div className="text-3xl font-bold">
              {profileData.titles[0]?.title_name || "No Title"}
            </div>
            <div className="w-[35rem] mt-2 text-sm">
              {profileData.about ||
                "No description provided. Please add a personal description."}
            </div>
          </div>
          <div>
            <div className="border-2 border-gray-300 shadow-xl flex flex-col items-center justify-center size-48 rounded-lg">
              <div className="text-4xl font-semibold">
                {profileData.paper_read_count || 0}
              </div>
              <div>Papers Read</div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex gap-14 w-full">
          <Tabs defaultValue="Achievements">
            <TabsList className="w-full bg-secondary py-6 flex items-center justify-start my-3">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-6 py-2.5"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabsData.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="mt-4 mx-8"
              >
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
