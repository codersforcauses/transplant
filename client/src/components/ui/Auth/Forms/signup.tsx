import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { Button } from "../../button";
import { GoogleIcon } from "../../google-icon";
import { Separator } from "../../separator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SignUpForm = () => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center px-5 font-sans",
        fontSans.variable,
      )}
    >
      <div className="flex w-full max-w-[312px] flex-col items-center justify-center sm:max-w-[780px] sm:rounded-[20px] sm:border sm:border-border sm:px-[76] sm:py-[60px]">
        <div className="flex w-full flex-col gap-[25px] pb-[50px] text-center">
          <h1 className="text-3xl font-bold text-primary">Sign Up</h1>
          <p className="text-subtle">
            Please enter your details to get started.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center gap-[35px] pb-[35px] text-center">
          <Button className="h-12" variant="oauth">
            <GoogleIcon />
            Continue with Google
          </Button>
          <Separator />
          <p className="text-subtle">Sign up with your email address</p>
        </div>

        <form className="flex w-full flex-col">
          <div className="flex flex-col space-y-2.5 pb-[30px]">
            <label htmlFor="email" className="font-medium text-primary">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Email"
              className="h-12 rounded-md border border-border bg-input px-[15px] py-[12px] text-base placeholder-border"
              required
            />
          </div>

          <div className="flex flex-col gap-x-[30px] pb-[50px] md:flex-row">
            <div className="flex flex-1 flex-col gap-2.5">
              <label htmlFor="password" className="font-medium text-primary">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                className="h-12 rounded-md border border-border bg-input px-[15px] py-[12px] placeholder-border"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-2.5">
              <label
                htmlFor="confirmPassword"
                className="font-medium text-primary"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="h-12 rounded-md border border-border bg-input px-[15px] py-[12px] placeholder-border"
                required
              />
            </div>
          </div>

          <Button
            className="h-12 w-full text-lg"
            variant="gradient"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <p className="pt-5 text-sm">
          Already have an account?{" "}
          <a className="text-primary" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
