import Link from "next/link";

import { Button } from "../button";
import { GoogleIcon } from "../google-icon";
import { Separator } from "../separator";

const SignUpForm = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-4 flex max-w-xs flex-col items-center justify-center py-16 sm:mx-0 sm:max-w-3xl sm:rounded-2xl sm:border sm:border-border sm:px-20">
        <div className="flex w-full flex-col gap-6 pb-10 text-center sm:pb-16">
          <h1 className="text-3xl font-bold text-primary">Sign Up</h1>
          <p className="text-subtle">
            Please enter your details to get started.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center gap-6 pb-6 text-center sm:gap-9 sm:pb-9">
          <Button className="h-12" variant="oauth">
            <GoogleIcon />
            Continue with Google
          </Button>
          <Separator />
          <p className="text-subtle">Sign up with your email address</p>
        </div>

        <form className="flex w-full flex-col">
          <div className="flex flex-col gap-2.5 pb-4 sm:pb-8">
            <label htmlFor="email" className="font-medium text-primary">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Email"
              className="bg-input h-12 rounded-md border border-border px-4 py-3 text-base placeholder-border"
              required
            />
          </div>

          <div className="flex flex-col gap-4 pb-10 md:flex-row md:gap-x-8 md:pb-12">
            <div className="flex flex-1 flex-col gap-2.5">
              <label htmlFor="password" className="font-medium text-primary">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                className="bg-input h-12 rounded-md border border-border px-4 py-3 placeholder-border"
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
                className="bg-input h-12 rounded-md border border-border px-4 py-3 placeholder-border"
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
          <Link className="text-primary underline" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
