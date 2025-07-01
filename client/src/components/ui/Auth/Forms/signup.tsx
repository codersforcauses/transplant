import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { Button } from "../../button";
import { GoogleIcon } from "../../google-icon";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SignUpForm = () => {
  return (
    <div
      className={cn(
        "py-15 flex min-h-screen flex-col items-center px-5 font-sans",
        fontSans.variable,
      )}
    >
      <div className="flex w-full max-w-[312px] flex-col items-center justify-center sm:max-w-[628px]">
        <h1 className="text-3xl text-primary">Sign Up</h1>
        <p className="text-foreground">
          Please enter your details to get started.
        </p>
        <Button variant="oauth">
          <GoogleIcon />
          Continue with Google
        </Button>
        <p>Sign up with your email address</p>
        <form>
          <label htmlFor="email" className="text-primary">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="rounded-md border border-border bg-input"
            required
          />
          <br />
          <label htmlFor="password" className="text-primary">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="rounded-md border border-border bg-input"
            required
          />
          <br />
          <label htmlFor="confirmPassword" className="text-primary">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            className="rounded-md border border-border bg-input"
            required
          />
          <br />
          <Button variant="gradient" type="submit">
            Sign Up
          </Button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
