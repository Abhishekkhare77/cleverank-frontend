import Learning from "@/components/about-us/Learning";
import Transforming from "@/components/about-us/Transforming";
import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto h-full px-8">
        <NavBar />
        <Transforming />
        <Learning />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default Page;

// deployment commmit
