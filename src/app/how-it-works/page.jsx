import HowClaverankWork from "@/components/How-Claverank-Work/HowClaverankWork";
import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto h-full px-8">
        <NavBar />
        <HowClaverankWork />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default Page;
