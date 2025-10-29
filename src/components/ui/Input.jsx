"use client";

import React from "react";
import { TextField } from "@mui/material";

// Input component using MUI
export function Input({ className, type = "text", ...props }) {
  return (
    <TextField
      type={type}
      variant="outlined"
      fullWidth
      size="small"
      InputProps={{
        sx: {
          minHeight: 36,
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          "&.Mui-disabled": {
            opacity: 0.5,
            pointerEvents: "none",
          },
          "&.Mui-error": {
            borderColor: "error.main",
          },
        },
      }}
      inputProps={{
        "data-slot": "input",
      }}
      {...props}
    />
  );
}
