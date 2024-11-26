"use client";

import React, { useState } from "react";
import axios from "axios";
import GoogleLogin from "@/components/GoogleLogin"; // Assuming GoogleLogin component exists
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle normal registration
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://127.0.0.1:8000/auth/register", {
        email,
        name,
        password,
      })
      .then((response) => {
        console.log("User registered:", response.data);
        setLoading(false);
        // Redirect or do further actions if registration is successful
        // Example: redirect to login page or dashboard
      })
      .catch((error) => {
        setLoading(false);
        setError("Registration failed. Please try again.", error);
      });
  };

  // Handle Google registration (after successful Google login)
  const handleGoogleRegister = (googleData) => {
    setLoading(true);
    console.log(googleData);

    const options = {
      method: "POST",
      url: "http://127.0.0.1:8000/auth/google",
      data: { email: googleData.email, name: googleData.name },
    };
    console.log(options);

    axios
      .request(options)
      .then((response) => {
        console.log("Google registration successful:", response.data);
        setLoading(false);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
          Create an Account
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
          <Button
            type="submit"
            className="w-full py-5 bg-blue-500 hover:bg-blue-600"
            disabled={loading}
          >
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
    </div>
  );
};

export default Page;
