"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import GoogleLogin from "@/components/GoogleLogin";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://cleverank.cumulate.live/auth/login", { email, password })
      .then((response) => {
        console.log("User logged in:", response.data);
        setLoading(false);
        localStorage.setItem("token", response.data.access_token);
        router.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        setError("Login failed. Please check your credentials.");
      });
  };

  const handleGoogleRegister = (googleData) => {
    setLoading(true);
    console.log(googleData);

    const options = {
      method: "POST",
      url: "https://cleverank.cumulate.live/auth/google",
      data: { email: googleData.email, name: googleData.name },
    };
    console.log(options);

    axios
      .request(options)
      .then((response) => {
        console.log("Google registration successful:", response.data);
        setLoading(false);
        router.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Google registration failed. Please try again.", {
          position: "top-center",
        });
        console.error("Google registration error:", error);
      });
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100">
      <div className="bg-white px-8 py-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
          Login to Your Institute Account
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full py-5 ">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
      <div>
        <p className="text-center text-gray-500 mt-4">
          Don&apos;t have an account?{" "}
          <Link
            href="/institute-register"
            className="text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
