"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
const GoogleLogin = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {
      const { user } = session;
      const { name, email, image } = user || {};
      if (email && name) {
        const [first_Name, last_Name] = name.split(" ");

        console.log("masti hai ye toh", email, first_Name, last_Name, image);
      }
    }
  }, [status, session]);

  if (status === "loading")
    return (
      <div className="w-fit sm:w-32 flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg mt-4 md:mt-0">
        <Image
          src="/assets/GOOGLE.png"
          alt="google"
          width={30}
          height={30}
          className=" text-center mx-2"
        />
        <span className="  ">Google</span>
      </div>
    );

  if (status === "authenticated") {
    return (
      <div>
        <button
          className="w-fit sm:w-32 flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg mt-4 md:mt-0"
          onClick={signOut}
        >
          <Image
            src="/assets/GOOGLE.png"
            alt="google"
            width={30}
            height={30}
            className=" text-center mx-2"
          />
          <span className=" hidden  sm:block  ">Logout</span>
        </button>
      </div>
    );
  }
  return (
    <button
      className=" flex items-center justify-center border-[1px] border-[#E5E5E5] shadow rounded-sm text-sm h-12 px-7 w-full py-5  sm:py-7 "
      onClick={() => signIn("google")}
    >
      <Image
        src="/assets/GOOGLE.png"
        alt="google"
        width={24}
        height={24}
        className=" text-center mx-2"
      />
      <span className="text-[#d93f21] text-sm lg:text-lg font-semibold">
        Google
      </span>
    </button>
  );
};

export default GoogleLogin;
