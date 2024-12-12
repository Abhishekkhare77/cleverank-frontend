import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";

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
      <div className="flex gap-6">
        <div className="">About Us</div>
        <div className="">Mission</div>
        <div className="">FAQ</div>
        <div className="">Why</div>
        <div className="">How it works?</div>
      </div>
      <div className="flex  gap-2">
        <Link href={"/login"} className={buttonVariants()}>
          Sign In
        </Link>
        <Link href={"/institute-login"} className={buttonVariants()}>
          Institution
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
