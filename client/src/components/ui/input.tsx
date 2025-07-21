import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  optional?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      containerClassName,
      optional = false,
      leftIcon,
      rightIcon,
      error,
      id,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("flex flex-col gap-2.5", containerClassName)}>
        {label && (
          <label htmlFor={id} className="font-medium text-primary">
            {label}
            {optional && (
              <span className="ml-1 text-sm text-subtle">(optional)</span>
            )}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 transform text-subtle">
              {leftIcon}
            </div>
          )}
          <input
            id={id}
            className={cn(
              "bg-input h-12 w-full rounded-md border border-border px-4 py-3 placeholder-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500",
              className,
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 transform text-subtle">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
