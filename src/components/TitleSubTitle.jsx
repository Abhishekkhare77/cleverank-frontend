import React from "react";

const TitleSubTitle = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="text-4xl font-semibold">{title}</div>
      <div className="text-[#898989] w-[35rem] text-center">{subtitle}</div>
    </div>
  );
};

export default TitleSubTitle;
