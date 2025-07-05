import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement password reset API call
      console.log("Password reset requested for:", email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Password reset error:", error);
      // TODO: Handle error state
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center p-24 font-sans",
        fontSans.variable,
      )}
    >
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Forgot Password</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Enter your email below and we'll send you a reset link
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-3">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Email"}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoBack}
                disabled={isLoading}
              >
                Go Back
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                If an account with email <strong>{email}</strong> exists, you
                will receive a password reset link shortly.
              </p>
              <p className="text-muted-foreground text-sm">
                Please check your email and follow the instructions to reset
                your password.
              </p>
            </div>

            <div className="space-y-3">
              <Link href="/login">
                <Button className="w-full">Back to Sign In</Button>
              </Link>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail("");
                }}
              >
                Try Different Email
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
