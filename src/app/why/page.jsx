import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import ResearchDiscovery from "@/components/why/ResearchDiscovery";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto h-full px-8">
      <NavBar />
      <ResearchDiscovery />
      <Footer />
    </div>
  );
};

export default Page;
