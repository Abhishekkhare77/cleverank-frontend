import Hero from "@/components/landingPage/Hero";
import Process from "@/components/landingPage/Process";
import ScheduleEasy from "@/components/landingPage/ScheduleEasy";
import ScheduleTeam from "@/components/landingPage/ScheduleTeam";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto h-full px-20">
        <NavBar />
        <Hero />
        <ScheduleEasy />
        <Process />
        <ScheduleTeam />
      </div>
    </div>
  );
}
