"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "./ui/button";

const GoogleLogin = ({ onSuccess }) => {
  const { data: session, status } = useSession();
  const [loginHandled, setLoginHandled] = useState(false);

  useEffect(() => {
    if (
      status === "authenticated" &&
      session &&
      session.user &&
      !loginHandled
    ) {
      const { name, email } = session.user;
      if (name && email && onSuccess) {
        onSuccess({ email, name });
        setLoginHandled(true);
      }
    }
  }, [status, session, onSuccess, loginHandled]);

  if (status === "loading") {
    return (
      <Button className="w-full py-5" variant="outline" disabled>
        <Image
          src="/assets/google-icon.png"
          alt="google"
          width={22}
          height={22}
          className="text-center mx-2"
        />
        <span>Loading...</span>
      </Button>
    );
  }

  if (status === "authenticated") {
    return (
      <Button className="w-full py-5" variant="outline" onClick={signOut}>
        <Image
          src="/assets/google-icon.png"
          alt="google"
          width={22}
          height={22}
          className="text-center mx-2"
        />
        <span>Logout</span>
      </Button>
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
        className="text-center mx-2"
      />
      <span>Google</span>
    </Button>
  );
};

export default GoogleLogin;
