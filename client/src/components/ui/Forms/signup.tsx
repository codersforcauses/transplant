import Link from "next/link";

import { Button } from "../button";
import { GoogleIcon } from "../google-icon";
import { Input } from "../input";
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
          <div className="flex flex-col gap-4 pb-10 md:flex-row md:gap-x-8 md:pb-12">
            <Input
              id="firstname"
              type="text"
              name="firstname"
              label="First Name"
              placeholder="Enter First Name"
              containerClassName="flex-1"
              required
            />
            <Input
              id="lastname"
              type="text"
              name="lastname"
              label="Last Name"
              placeholder="Enter Last Name"
              containerClassName="flex-1"
              required
            />
          </div>

          <div className="pb-4 sm:pb-8">
            <Input
              id="email"
              type="email"
              name="email"
              label="Email"
              placeholder="Enter Email"
              className="text-base"
              required
            />
          </div>

          <div className="flex flex-col gap-4 pb-10 md:flex-row md:gap-x-8 md:pb-12">
            <Input
              id="password"
              type="password"
              name="password"
              label="Password"
              placeholder="Enter Password"
              containerClassName="flex-1"
              required
            />
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              containerClassName="flex-1"
              required
            />
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
