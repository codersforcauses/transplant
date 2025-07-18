import * as React from "react";

import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  containerClassName?: string;
  optional?: boolean;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      containerClassName,
      optional = false,
      options,
      placeholder,
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
          <select
            id={id}
            className={cn(
              "bg-input h-12 appearance-none rounded-md border border-border px-4 py-3 pr-10 text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500",
              className,
            )}
            ref={ref}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select };
