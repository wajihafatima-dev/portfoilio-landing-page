"use client";

import React from "react";
import { FormLabel } from "@mui/material";

export function Label({ className, ...props }) {
  return (
    <FormLabel
      {...props}
      data-slot="label"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1, // spacing between elements
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1,
        userSelect: "none",
        "&.Mui-disabled": {
          opacity: 0.5,
          pointerEvents: "none",
        },
      }}
      className={className}
    />
  );
}
