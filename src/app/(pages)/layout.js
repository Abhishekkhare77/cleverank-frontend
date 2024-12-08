import MainSidebar from "@/components/MainSidebar";
import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <MainSidebar>
        <div className="max-w-6xl">{children}</div>
      </MainSidebar>
    </div>
  );
};

export default layout;
