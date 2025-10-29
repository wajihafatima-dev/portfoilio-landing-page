"use client";

import React, { useState } from "react";
import { ToggleButton } from "@mui/material";

export default function ToggleButtonMui({ label = "Toggle", size = "medium", variant = "default" }) {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    setSelected((prev) => !prev);
  };

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={handleToggle}
      size={size}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        px: 2,
        py: 0.5,
        fontWeight: 500,
        ...(variant === "outline"
          ? {
              border: "1px solid",
              borderColor: selected ? "primary.main" : "divider",
              backgroundColor: selected ? "primary.main" : "transparent",
              color: selected ? "#fff" : "text.primary",
              "&:hover": {
                backgroundColor: selected ? "primary.dark" : "action.hover",
              },
            }
          : {
              backgroundColor: selected ? "primary.main" : "transparent",
              color: selected ? "#fff" : "text.primary",
              "&:hover": {
                backgroundColor: selected ? "primary.dark" : "action.hover",
              },
            }),
      }}
    >
      {label}
    </ToggleButton>
  );
}
