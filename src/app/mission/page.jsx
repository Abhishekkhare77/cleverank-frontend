import Footer from "@/components/landingPage/Footer";
import Mission from "@/components/mission/Mission";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto h-full px-8">
        <NavBar />
        <Mission />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default Page;
