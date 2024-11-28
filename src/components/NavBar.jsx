import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const NavBar = () => {
  return (
    <div className=" shadow rounded-b-lg ">
      <div className="w-full py-2 px-8 flex items-center justify-between container mx-auto ">
        <div className="antialiased  font-semibold">Cleverank</div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default NavBar;
