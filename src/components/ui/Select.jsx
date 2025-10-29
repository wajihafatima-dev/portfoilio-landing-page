import React from "react";
import {
  Select as MUISel,
  MenuItem,
  FormControl,
  InputLabel,
  ListSubheader,
  Box,
  IconButton,
} from "@mui/material";
import { Check, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

// Root Select
export function Select({ label, value, onChange, children, size = "medium", ...props }) {
  return (
    <FormControl size={size} fullWidth>
      {label && <InputLabel>{label}</InputLabel>}
      <MUISel value={value} onChange={onChange} label={label} {...props}>
        {children}
      </MUISel>
    </FormControl>
  );
}

// Group
export function SelectGroup({ label, children }) {
  return (
    <ListSubheader>{label}</ListSubheader>,
    children
  );
}

// Item
export function SelectItem({ value, children, ...props }) {
  return (
    <MenuItem value={value} {...props}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {children}
        {props.selected && <Check fontSize="small" />}
      </Box>
    </MenuItem>
  );
}

// Separator
export function SelectSeparator() {
  return <Box sx={{ height: 1, bgcolor: "divider", my: 1, width: "100%" }} />;
}

// Scroll buttons (optional for MUI)
export function SelectScrollUpButton({ ...props }) {
  return (
    <IconButton size="small" {...props}>
      <ArrowDropUp />
    </IconButton>
  );
}

export function SelectScrollDownButton({ ...props }) {
  return (
    <IconButton size="small" {...props}>
      <ArrowDropDown />
    </IconButton>
  );
}
