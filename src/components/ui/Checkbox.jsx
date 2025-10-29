"use client";

import React from "react";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import { CheckIcon } from "lucide-react";
import { cn } from "./utils";

// Basic Checkbox
function Checkbox({ className, ...props }) {
  return (
    <MuiCheckbox
      icon={
        <div
          className={cn(
            "border rounded-[4px] w-6 h-6 flex items-center justify-center bg-white dark:bg-gray-800",
            className
          )}
        />
      }
      checkedIcon={
        <div
          className={cn(
            "border rounded-[4px] w-6 h-6 flex items-center justify-center bg-primary text-white dark:bg-primary",
            className
          )}
        >
          <CheckIcon size={16} />
        </div>
      }
      {...props}
    />
  );
}

// Optional: Checkbox with label
function CheckboxWithLabel({ label, className, ...props }) {
  return (
    <FormControlLabel
      control={<Checkbox className={className} {...props} />}
      label={label}
    />
  );
}

export { Checkbox, CheckboxWithLabel };
