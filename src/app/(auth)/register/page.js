"use client";

import React, { useState } from "react";
import axios from "axios";
import GoogleLogin from "@/components/GoogleLogin";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Handle normal registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://cleverank.cumulate.live/auth/register", {
        email,
        name,
        password,
      });
      console.log("User registered:", response.data);
      localStorage.setItem("token", response.data.access_token);
      router.push("/create-profile");
    } catch (error) {
      console.error("Registration error:", error.response || error.message);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleRegister = async (googleData) => {
    setLoading(true);
    try {
      const response = await axios.post("https://cleverank.cumulate.live/auth/google", {
        email: googleData.email,
        name: googleData.name,
      });
      console.log("Google registration successful:", response.data);
      localStorage.setItem("token", response.data.access_token);
      router.push("/create-profile");
    } catch (error) {
      console.error(
        "Google registration error:",
        error.response || error.message
      );
      toast.error("Google registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
          Create an Account
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="w-full"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="w-full"
              placeholder="example@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              name="password"
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full py-5" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
        <div className="flex items-center justify-center my-4">
          <div className="w-full h-[1px] bg-gray-500"></div>
          <span className="text-gray-500 px-2">or</span>
          <div className="w-full h-[1px] bg-gray-500"></div>
        </div>
        <GoogleLogin onSuccess={handleGoogleRegister} />
      </div>
      <div>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
