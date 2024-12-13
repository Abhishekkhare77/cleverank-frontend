"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4); // Detect scroll past top-2
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between py-3 px-6 sticky top-2 transition-all duration-300 z-50 ${
        scrolled ? "bg-gray-100 rounded-2xl shadow-md border border-gray-300" : ""
      }`}
    >
      <Link href="/">
        <Image
          src="/assets/cleverank-logo-final-black.png"
          alt="logo"
          width={90}
          height={90}
          quality={100}
          className="object-cover "
        />
      </Link>
      <div className="flex gap-6">
        <Link href="/about-us">
          <div className="">About Us</div>
        </Link>
        <Link href="/mission">
          <div className="">Mission</div>
        </Link>
        <Link href="/faq">
          <div className="">FAQ</div>
        </Link>
        <Link href="/why">
          <div className="">Why</div>
        </Link>
        <Link href="/how-it-works">
          <div className="">How it works?</div>
        </Link>
      </div>
      <div className="flex  gap-2">
        <Link href={"/institute-login"}>
          <Button
            variant="outline"
            className="border-black text-black bg-gray-50  hover:bg-transparent hover:text-black/75"
          >
            Institution
          </Button>
        </Link>
        <Link href={"/login"}>
          <Button className="bg-black hover:bg-black/85">Sign In</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
