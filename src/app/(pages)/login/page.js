"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import GoogleLogin from "@/components/GoogleLogin";
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
      .post("http://127.0.0.1:8000/auth/login", { email, password })
      .then((response) => {
        console.log("User logged in:", response.data);
        setLoading(false);
        router.push("/");
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
      url: "http://127.0.0.1:8000/auth/google",
      data: { email: googleData.email, name: googleData.name },
    };
    console.log(options);

    axios
      .request(options)
      .then((response) => {
        console.log("Google registration successful:", response.data);
        setLoading(false);
        // Redirect or update state after successful Google registration
        // Example: redirect to user dashboard
      })
      .catch((error) => {
        setLoading(false);
        setError("Google registration failed. Please try again.");
        console.error("Google registration error:", error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Login to Your Account
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
          <span className="text-gray-600">or</span>
        </div>
        <GoogleLogin onSuccess={handleGoogleRegister} />
      </div>
    </div>
  );
};

export default Login;
