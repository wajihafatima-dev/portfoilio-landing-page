"use client";

import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { cn } from "./utils";

// Dialog wrapper
export function Dialog({ open, onClose, children, ...props }) {
  return (
    <MuiDialog open={open} onClose={onClose} {...props}>
      {children}
    </MuiDialog>
  );
}

// Dialog trigger (wrap any element that opens the dialog)
export function DialogTrigger({ children, onClick }) {
  return React.cloneElement(children, { onClick });
}

// Dialog content wrapper
export function DialogContent({ children, className, ...props }) {
  return (
    <MuiDialogContent
      dividers
      sx={{ p: 3 }}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </MuiDialogContent>
  );
}

// Dialog header
export function DialogHeader({ children, className, ...props }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      textAlign="center"
      sx={{ mb: 2 }}
      className={className}
      {...props}
    >
      {children}
    </Box>
  );
}

// Dialog footer
export function DialogFooter({ children, className, ...props }) {
  return (
    <MuiDialogActions sx={{ mt: 2 }} className={className} {...props}>
      {children}
    </MuiDialogActions>
  );
}

// Dialog title
export function DialogTitle({ children, onClose, className, ...props }) {
  return (
    <MuiDialogTitle sx={{ m: 0, p: 2 }} className={className} {...props}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
}

// Dialog description
export function DialogDescription({ children, className, ...props }) {
  return (
    <Typography variant="body2" color="text.secondary" className={className} {...props}>
      {children}
    </Typography>
  );
}
