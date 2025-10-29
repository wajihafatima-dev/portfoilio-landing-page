"use client";

import React from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

export default function ToggleGroupMui() {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
        sx={{
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <ToggleButton value="left" aria-label="left aligned">
          Left
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          Center
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          Right
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
