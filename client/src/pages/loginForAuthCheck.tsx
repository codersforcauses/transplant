import Link from "next/link";
import React, { useState } from "react";

import { useAuth } from "@/context/auth-provider";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const result = await login(email, password);
      if (result === true) {
        setMessage("Login successful!");
        // Optionally redirect or fetch user info here
        // Log the access token for debugging
        const tokenStore = require("@/store/TokenStore");
        const accessToken = tokenStore.useTokenStore.getState().access;
        console.log("Received access token:", accessToken);
      } else {
        setMessage("Login failed: " + result);
      }
    } catch (err) {
      setMessage("Network error: Unable to connect to server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md p-8">
      <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded py-2 text-white transition-colors ${
            isLoading
              ? "cursor-not-allowed bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      {message && (
        <div
          className={`mt-4 rounded p-2 text-center ${
            message.includes("successful")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
      <div className="mt-4 text-center">
        <span>Don't have an account? </span>
        <Link href="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
