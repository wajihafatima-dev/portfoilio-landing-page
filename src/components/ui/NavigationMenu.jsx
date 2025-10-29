"use client";

import { Button,  MenuItem, Typography, Box, Popover } from "@mui/material";
import ChevronDownIcon from "@mui/icons-material/ChevronDropDown";

// Root container
export function NavigationMenu({ children }) {
  return <Box sx={{ display: "flex", gap: 2 }}>{children}</Box>;
}

// Trigger button
export function NavigationMenuTrigger({ children, onClick }) {
  return (
    <Button
      variant="text"
      endIcon={<ChevronDownIcon />}
      onClick={onClick}
      sx={{ textTransform: "none", fontWeight: 500 }}
    >
      {children}
    </Button>
  );
}

// Menu content (Popover)
export function NavigationMenuContent({ anchorEl, open, onClose, children }) {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Box sx={{ p: 1, minWidth: 200 }}>{children}</Box>
    </Popover>
  );
}

// Menu item
export function NavigationMenuItem({ children, onClick }) {
  return <MenuItem onClick={onClick}>{children}</MenuItem>;
}

// Menu link (styled MenuItem)
export function NavigationMenuLink({ children, onClick }) {
  return (
    <MenuItem onClick={onClick}>
      <Typography variant="body2">{children}</Typography>
    </MenuItem>
  );
}

// Label
export function NavigationMenuLabel({ children }) {
  return <Typography sx={{ px: 1, py: 0.5, fontWeight: 500, fontSize: "0.85rem" }}>{children}</Typography>;
}

// Indicator (optional arrow)
export function NavigationMenuIndicator() {
  return <Box sx={{ width: 8, height: 8, bgcolor: "divider", transform: "rotate(45deg)", m: "0 auto" }} />;
}
