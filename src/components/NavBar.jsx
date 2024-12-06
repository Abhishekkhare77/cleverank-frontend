import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" shadow rounded-b-lg ">
      <div className="w-full py-2 px-8 flex items-center justify-between container mx-auto ">
        <div className="antialiased  font-semibold">Cleverank</div>
        <Link href="/profile">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
