"use client";

import React, { useState } from "react";
import { Box, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function Collapsible({ children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  const toggle = () => setOpen(!open);

  return (
    <Box data-slot="collapsible">
      {typeof children === "function"
        ? children({ open, toggle })
        : children}
    </Box>
  );
}

export function CollapsibleTrigger({ onToggle, children }) {
  return (
    <IconButton
      data-slot="collapsible-trigger"
      onClick={onToggle}
      aria-label="Toggle"
    >
      {children || <ExpandMoreIcon />}
    </IconButton>
  );
}

export function CollapsibleContent({ open, children }) {
  return (
    <Collapse data-slot="collapsible-content" in={open}>
      <Box>{children}</Box>
    </Collapse>
  );
}
