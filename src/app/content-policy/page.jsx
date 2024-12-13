import ContentPolicy from "@/components/content-policy/ContentPolicy";
import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto h-full px-8">
      <NavBar />
      <ContentPolicy />
      <Footer />
    </div>
  );
};

export default Page;
