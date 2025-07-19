import Link from "next/link";
import { useForm } from "react-hook-form";

import { useRegister } from "@/hooks/useRegister";

import { Button } from "../button";
import { GoogleIcon } from "../google-icon";
import { Input } from "../input";
import { Separator } from "../separator";

type SignUpFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>();

  const password = watch("password");

  const onSubmit = async (data: SignUpFormData) => {
    try {
      registerHook({
        email: data.email,
        password1: data.password,
        password2: data.confirmPassword,
        first_name: data.firstname,
        last_name: data.lastname,
      });
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const { mutate: registerHook, isPending } = useRegister({
    onSuccess: () => {
      alert("Sign up was successful.");
    },
    onError: () => {
      alert("An error occured. Sign Up was unsuccessful.");
    },
  });
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
              id="firstname"
              type="text"
              label="First Name"
              placeholder="Enter First Name"
              containerClassName="flex-1"
              error={errors.firstname?.message}
              {...register("firstname", {
                required: "First name is required",
              })}
            />
            <Input
              id="lastname"
              type="text"
              label="Last Name"
              placeholder="Enter Last Name"
              containerClassName="flex-1"
              error={errors.lastname?.message}
              {...register("lastname", {
                required: "Last name is required",
              })}
            />
          </div>

          <div className="pb-4 sm:pb-8">
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="Enter Email"
              className="text-base"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>

          <div className="flex flex-col gap-4 pb-10 md:flex-row md:gap-x-8 md:pb-12">
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Enter Password"
              containerClassName="flex-1"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <Input
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              containerClassName="flex-1"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
          </div>

          <Button
            className="h-12 w-full text-lg"
            variant="gradient"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
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
