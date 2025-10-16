// components/TextField.tsx

"use client";

import cn from "@utils/cn";
import { StyleableFC } from "@utils/misc";
import * as React from "react";

type TextFieldProps = React.ComponentProps<"input"> & {
  supportingText?: string | React.ReactNode;
  endButton?: React.ReactNode;
  error?: boolean;
  inputClassName?: string;
};

const TextField: StyleableFC<TextFieldProps> = React.forwardRef<
  HTMLInputElement,
  TextFieldProps
>(
  (
    {
      className,
      inputClassName,
      supportingText,
      endButton,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("flex w-full flex-col", className)}>
        
        <div className="flex w-full items-center rounded-lg border border-neutral-400 bg-white gap-1">
          <input
            type="text"
            ref={ref}
            className={cn(
              "w-full my-2 mx-4",

              // error state styles
              error
                ? "border-error focus:border-error focus:ring-error/30"
                : "border-neutral-400 focus:border-blue-500 focus:ring-blue-500/30",

              // focus styles
              "focus:ring-2 focus:outline-none",
              inputClassName
            )}
            {...props}
          />

          {/* if there is an end button */}
          {endButton && (
            <div className="items-center">
              {endButton}
            </div>
          )}
        </div>

        {/* if there is supporting text */}
        {supportingText && (
          <p className={cn("body-small-primary mx-1 ml-4 my-1", error ? "text-error" : "text-[#49454F]")}>
            {supportingText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
