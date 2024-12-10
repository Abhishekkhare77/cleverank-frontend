import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <Image
        src="/assets/cleverank-logo-final-black.png"
        alt="logo"
        width={90}
        height={90}
        quality={100}
        className="object-cover "
      />
      <div className="flex  gap-4">
        <Button> Log in </Button>
        <Button> Sign Up</Button>
      </div>
    </div>
  );
};

export default NavBar;
