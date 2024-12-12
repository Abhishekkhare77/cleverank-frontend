import Institution from "@/components/institution/Institution";
import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto h-full px-8">
      <NavBar />
      <Institution />
      <Footer />
    </div>
  );
};

export default Page;
