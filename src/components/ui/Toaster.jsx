"use client";

import React from "react";
import { Snackbar, Alert, useTheme } from "@mui/material";

export default function Toaster({ open, message, severity = "info", onClose }) {
  const { theme } = useTheme();

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          bgcolor:
            theme === "dark"
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          color: theme === "dark" ? "#fff" : "#000",
          border: "1px solid",
          borderColor: theme === "dark" ? "#444" : "#ccc",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
