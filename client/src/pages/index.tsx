import { Inter as FontSans } from "next/font/google";
import { useState } from "react";

import Footer from "@/components/Footer";
import LandingPageBody from "@/components/landing-page-body";
import Navbar from "@/components/Navbar";
import { usePings } from "@/hooks/pings";
import { cn } from "@/lib/utils";

import { Button } from "../components/ui/button";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const { data, isLoading } = usePings({
    enabled: clicked,
  });

  return (
    <>
      <Navbar />
      <LandingPageBody />
      <Footer />
      <main
        className={cn(
          "flex min-h-screen flex-col items-center gap-4 p-24 font-sans",
          fontSans.variable,
        )}
      >
        <h1 className="text-3xl text-primary">Test title</h1>
        <Button onClick={() => setClicked(true)}>
          {isLoading ? "Loading" : "Ping"}
        </Button>
        <p>
          Response from server: <span>{data as string}</span>
        </p>
      </main>
    </>
  );
}
