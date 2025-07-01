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
        "flex min-h-screen flex-col items-center justify-center px-5 font-sans",
        fontSans.variable,
      )}
    >
      <div className="flex w-full max-w-[312px] flex-col items-center justify-center sm:max-w-[628px]">
        <div className="flex w-full flex-col gap-[25px] pb-[50px] text-center">
          <h1 className="heading-lg">Sign Up</h1>
          <p className="body-sm text-subtle-foreground">
            Please enter your details to get started.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center gap-[35px] pb-[35px] text-center">
          <Button className="h-12" variant="oauth">
            <GoogleIcon />
            Continue with Google
          </Button>
          <p className="body-sm text-subtle-foreground">OR</p>
          <p className="body-sm text-subtle-foreground">
            Sign up with your email address
          </p>
        </div>

        <form className="flex w-full flex-col">
          <div className="flex flex-col space-y-2.5 pb-[30px]">
            <label htmlFor="email" className="body-sm-medium text-primary">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Email"
              className="body-sm h-12 rounded-md border border-border bg-input px-[15px] py-[12px] placeholder-gray-300"
              required
            />
          </div>

          <div className="flex w-full flex-col gap-[30px] pb-[50px] md:flex-row">
            <div className="flex flex-1 flex-col gap-2.5">
              <label htmlFor="password" className="body-sm-medium text-primary">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                className="body-sm h-12 rounded-md border border-border bg-input px-[15px] py-[12px] placeholder-gray-300"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-2.5">
              <label
                htmlFor="confirmPassword"
                className="body-sm-medium text-primary"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="body-sm h-12 rounded-md border border-border bg-input px-[15px] py-[12px] placeholder-gray-300"
                required
              />
            </div>
          </div>

          <Button className="body-md" variant="gradient" type="submit">
            Sign Up
          </Button>
        </form>
        <p className="caption pt-5">
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
