import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import Process from "@/components/landingPage/Process";
import ScheduleEasy from "@/components/landingPage/ScheduleEasy";
import ScheduleTeam from "@/components/landingPage/ScheduleTeam";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <div>
          <div className="max-w-7xl mx-auto h-full px-8">
            <NavBar />
            <Hero />
            <ScheduleEasy />
            <Process />
            <ScheduleTeam />
          </div>
        </div>
        <div className="bg-black">
          <Footer />
        </div>
      </div>
    </>
  );
}
