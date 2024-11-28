import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <div className="container mx-auto px-8">

      {children}
      </div>
    </div>
  );
};

export default layout;
