"use client";

import React, { useState } from "react";
import axios from "axios";
import GoogleLogin from "@/components/GoogleLogin"; // Assuming GoogleLogin component exists

const page = () => {
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
        setError("Registration failed. Please try again.");
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
          Create an Account
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            {loading ? "Registering..." : "Register"}
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

export default page;
