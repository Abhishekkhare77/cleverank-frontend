"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "./ui/button";

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
      <div>
        <Button className="w-full py-5" variant="outline" disabled>
          <Image
            src="/assets/google-icon.png"
            alt="google"
            width={22}
            height={22}
            className=" text-center mx-2"
          />
          <span>Loading...</span>
        </Button>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div>
        <Button
          className="w-full py-5"
          variant="outline"
          onClick={signOut}
        >
          <Image
            src="/assets/google-icon.png"
            alt="google"
            width={22}
            height={22}
            className=" text-center mx-2"
          />
          <span>Logout</span>
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="w-full py-5"
      variant="outline"
      onClick={() => signIn("google")}
    >
      <Image
        src="/assets/google-icon.png"
        alt="google"
        width={22}
        height={22}
        className=" text-center mx-2"
      />
      <span>
        Google
      </span>
    </Button>
  );
};

export default GoogleLogin;
