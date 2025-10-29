"use client";

import React from "react";
import { Switch as MuiSwitch } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSwitch = styled(MuiSwitch)(({ theme }) => ({
  width: 40,
  height: 22,
  padding: 0,
  display: "flex",
  "&:active .MuiSwitch-thumb": {
    width: 18,
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
    width: 18,
    height: 18,
    borderRadius: 10,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(0, 0, 0, 0.25)",
    boxSizing: "border-box",
  },
}));

export default function Switch({ checked, onChange, disabled }) {
  return (
    <CustomSwitch
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      inputProps={{ "aria-label": "custom switch" }}
    />
  );
}
