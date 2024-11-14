"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const GoogleLogin = ({ onSuccess }) => {
  const { data: session, status } = useSession();
  const [hasLoggedIn, setHasLoggedIn] = useState(false); // Flag to track if login has been handled

  // Handle Google login success and trigger the callback only once when session is authenticated
  useEffect(() => {
    if (status === "authenticated" && session && session.user && !hasLoggedIn) {
      const { name, email } = session.user;
      // Ensure name and email are available and trigger onSuccess only once
      if (name && email && onSuccess) {
        onSuccess({ email, name });
        setHasLoggedIn(true); // Set flag to true to prevent re-triggering
      }
    }
  }, [status, session, onSuccess, hasLoggedIn]); // Dependency on hasLoggedIn to prevent re-triggering

  if (status === "loading") {
    return (
      <div className="w-fit sm:w-32 flex items-center border bg-white rounded-lg text-lg h-12 shadow-lg mt-4 md:mt-0">
        <Image
          src="/assets/GOOGLE.png"
          alt="google"
          width={30}
          height={30}
          className=" text-center mx-2"
        />
        <span>Google</span>
      </div>
    );
  }

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
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    );
  }

  return (
    <button
      className="flex items-center justify-center border-[1px] border-[#E5E5E5] shadow rounded-sm text-sm h-12 px-7 w-full py-5 sm:py-7"
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
