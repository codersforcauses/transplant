import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useRegister } from "@/hooks/useRegister";

import { Button } from "../button";
import { GoogleIcon } from "../google-icon";
import { Input } from "../input";
import { Separator } from "../separator";

type Schema = {
  first_name: string;
  last_name: string;
  email: string;
  password1: string;
  password2: string;
};

const SignUpForm = () => {
  const { mutate: registerHook, isPending } = useRegister({
    onSuccess: () => {
      alert("yippeee!! Sign up was successful.");
    },
    onError: () => {
      alert("An error occured. Sign Up was unsuccessful.");
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>();
  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data);

  // const onSubmit = (values: z.infer<typeof schema>) => {

  //   registerHook({
  //   first_name: values.first_name,
  //   last_name: values.last_name,
  //   email: values.email,
  //   password1: values.password1,
  //   password2: values.password2,
  //   })
  // }

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col"
        >
          <div className="flex flex-col gap-4 pb-10 md:flex-row md:gap-x-8 md:pb-12">
            <Input
              {...register("first_name")}
              id="firstname"
              type="text"
              name="firstname"
              label="First Name"
              placeholder="Enter First Name"
              containerClassName="flex-1"
              required
              error={errors.first_name?.message}
            />
            <Input
              {...register("last_name")}
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
              {...register("email")}
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
              {...register("password1")}
              id="password"
              //type="password"
              name="password"
              label="Password"
              placeholder="Enter Password"
              containerClassName="flex-1"
              required
            />
            <Input
              {...register("password2")}
              id="confirmPassword"
              //type="password"
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
