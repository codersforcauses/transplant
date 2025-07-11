import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useRegister } from "@/hooks/useUser";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("PARTICIPANT");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const register = useRegister();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    register.mutate(
      { email, password, role },
      {
        onSuccess: () => {
          setMessage("Registration successful! Redirecting to login...");
          setTimeout(() => router.push("/login"), 2000);
        },
        onError: (error: any) => {
          setMessage(
            error?.response?.data?.email?.[0] ||
              error?.response?.data?.password?.[0] ||
              error?.response?.data?.role?.[0] ||
              "Registration failed. Please try again.",
          );
        },
        onSettled: () => setIsLoading(false),
      },
    );
  };

  return (
    <div className="mx-auto max-w-md p-8">
      <h2 className="mb-6 text-center text-2xl font-bold">Register</h2>
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
        <div className="mb-4">
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
        <div className="mb-6">
          <label
            htmlFor="role"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Role:
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            <option value="PARTICIPANT">Participant</option>
            <option value="ADMIN">Admin</option>
          </select>
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
          {isLoading ? "Registering..." : "Register"}
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
        <span>Already have an account? </span>
        <Link href="/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </div>
    </div>
  );
};

export default Register;
