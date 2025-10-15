import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps extends React.ComponentProps<"input"> {
  showPasswordToggle?: boolean;
  label?: string;
  variant?: "default" | "border";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <div className="w-full">
        <Label
          htmlFor={props.id}
          className="block text-sm text-black font-normal"
        >
          {props.label}
        </Label>
        <div className="relative">
          <input
            autoComplete="off"
            type={type}
            className={cn(
              "flex w-full rounded-xl outline-none bg-white px-4 py-6 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-lightBackground-600 dark:file:bg-transparent dark:file:text-darkBackground-400 placeholder:text-lightBackground-600/60 dark:placeholder:text-darkBackground-600/60 all-unset disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
              variant === "border"
                ? "border border-[#EEEEEE] dark:border-darkBackground-300"
                : "",
              "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
