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
      className={`flex min-h-screen flex-col items-center justify-center font-sans ${fontSans.variable}`}
    >
      <div className="flex w-full max-w-[312px] flex-col items-center justify-center py-[60px] sm:max-w-[780px] sm:rounded-[20px] sm:border sm:border-border sm:px-[76]">
        <div className="flex w-full flex-col gap-[25px] pb-10 text-center sm:pb-[50px]">
          <h1 className="text-3xl font-bold text-primary">Sign Up</h1>
          <p className="text-subtle">
            Please enter your details to get started.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center gap-[25px] pb-[25px] text-center sm:gap-[35px] sm:pb-[35px]">
          <Button className="h-12" variant="oauth">
            <GoogleIcon />
            Continue with Google
          </Button>
          <Separator />
          <p className="text-subtle">Sign up with your email address</p>
        </div>

        <form className="flex w-full flex-col">
          <div className="flex flex-col gap-2.5 pb-[15px] sm:pb-[30px]">
            <label htmlFor="email" className="font-medium text-primary">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Email"
              className="h-12 rounded-md border border-border bg-input px-[15px] py-3 text-base placeholder-border"
              required
            />
          </div>

          <div className="flex flex-col gap-[15px] pb-10 md:flex-row md:gap-x-[30px] md:pb-[50px]">
            <div className="flex flex-1 flex-col gap-2.5">
              <label htmlFor="password" className="font-medium text-primary">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                className="h-12 rounded-md border border-border bg-input px-[15px] py-3 placeholder-border"
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
                className="h-12 rounded-md border border-border bg-input px-[15px] py-3 placeholder-border"
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
          <a className="text-primary underline" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
