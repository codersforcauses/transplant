import Link from "next/link";
import React from "react";

import Navbar from "@/components/Navbar";

import { Button } from "../components/ui/button";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/landing-page-bg.PNG')",
            backgroundBlendMode: "overlay",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-start px-6 sm:px-10 lg:px-20">
          <div className="max-w-2xl text-white">
            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Register for the 2026
              <br />
              <span className="text-white">Australian Transplant</span>
              <br />
              <span className="text-white">Games</span>
            </h1>

            {/* Description */}
            <div className="mb-8 space-y-4 text-lg sm:text-xl">
              <p>
                The Transplant Australia Games are a powerful celebration of
                life, showcasing the strength and vitality of organ and tissue
                transplant recipients, living donors, and their supporters. This
                national event fosters connection, awareness, and recognition
                through sport and community. Register or log in now to access
                comprehensive event details, participation guidelines, and key
                updates.
              </p>
              <p>
                Join us in championing the life-saving impact of donation and
                the enduring spirit of those who thrive because of it.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="hover:bg-primary/90 w-full transform rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 sm:w-auto"
                >
                  Register
                </Button>
              </Link>

              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full transform rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary sm:w-auto"
                >
                  Login
                </Button>
              </Link>
            </div>

            {/* Learn More Link */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center text-lg text-white transition-colors duration-300 hover:text-gray-200"
              >
                Learn More About Registration
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
