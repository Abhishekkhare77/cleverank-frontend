import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import PrivacyPolicy from "@/components/Privacy-Policy/PrivacyPolicy";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto h-full px-8">
      <NavBar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default Page;
