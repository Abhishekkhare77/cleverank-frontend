import MainSidebar from "@/components/MainSidebar";
import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <MainSidebar>
        <div className="container mx-auto px-8">{children}</div>
      </MainSidebar>
    </div>
  );
};

export default layout;
