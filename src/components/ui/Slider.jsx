import React from "react";
import { Slider as MUISlider, Box } from "@mui/material";

export function Slider({
  value,
  defaultValue,
  min = 0,
  max = 100,
  onChange,
  ...props
}) {
  return (
    <Box
      data-slot="slider"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        touchAction: "none",
        "& .MuiSlider-track": { bgcolor: "primary.main" },
        "& .MuiSlider-thumb": {
          border: "2px solid",
          borderColor: "primary.main",
          bgcolor: "background.paper",
          boxShadow: 1,
        },
        "& .MuiSlider-rail": { bgcolor: "grey.300" },
      }}
      {...props}
    >
      <MUISlider
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        onChange={onChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
