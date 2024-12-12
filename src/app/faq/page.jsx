import Questions from "@/components/faq/Questions";
import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto h-full px-8">
      {" "}
      <NavBar />
      <Questions />
      <Footer />
    </div>
  );
};

export default Page;
