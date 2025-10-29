"use client";

import React from "react";
import {
  Drawer as MuiDrawer,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Drawer wrapper
export function Drawer({ open, onClose, anchor = "right", children, ...props }) {
  return (
    <MuiDrawer anchor={anchor} open={open} onClose={onClose} {...props}>
      {children}
    </MuiDrawer>
  );
}

// Drawer trigger (wrap any element to open drawer)
export function DrawerTrigger({ children, onClick }) {
  return React.cloneElement(children, { onClick });
}

// Drawer content wrapper
export function DrawerContent({ children, ...props }) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      {...props}
    >
      {children}
    </Box>
  );
}

// Drawer header
export function DrawerHeader({ children, onClose, ...props }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      {...props}
    >
      {children}
      {onClose && (
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
}

// Drawer footer
export function DrawerFooter({ children, ...props }) {
  return (
    <Box
      mt="auto"
      p={2}
      display="flex"
      justifyContent="flex-end"
      {...props}
    >
      {children}
    </Box>
  );
}

// Drawer title
export function DrawerTitle({ children, ...props }) {
  return (
    <Typography variant="h6" {...props}>
      {children}
    </Typography>
  );
}

// Drawer description
export function DrawerDescription({ children, ...props }) {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {children}
    </Typography>
  );
}
