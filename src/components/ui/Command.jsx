"use client";

import React from "react";
import { Box, Dialog, DialogTitle, DialogContent, TextField, List, ListItem, Typography, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function CommandDialog({ open, onClose, title = "Command Palette", description = "Search for a command to run...", children }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export function CommandInput({ value, onChange, placeholder = "Type a command..." }) {
  return (
    <Box display="flex" alignItems="center" mb={2} p={1} borderBottom="1px solid" borderColor="divider">
      <SearchIcon color="action" sx={{ mr: 1 }} />
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="standard"
        fullWidth
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  );
}

export function CommandList({ children }) {
  return (
    <List sx={{ maxHeight: 300, overflowY: "auto", p: 0 }}>
      {children}
    </List>
  );
}

export function CommandItem({ children, onClick, disabled }) {
  return (
    <ListItem
      button
      onClick={onClick}
      disabled={disabled}
      sx={{
        px: 2,
        py: 1,
        "&:hover": { bgcolor: "action.hover" },
      }}
    >
      {children}
    </ListItem>
  );
}

export function CommandGroup({ title, children }) {
  return (
    <Box mb={1}>
      <Typography variant="caption" color="textSecondary" sx={{ px: 2, pt: 1, pb: 0.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export function CommandSeparator() {
  return <Divider sx={{ my: 0.5 }} />;
}

export function CommandShortcut({ children }) {
  return (
    <Typography variant="caption" color="textSecondary" sx={{ ml: "auto", fontSize: 10, letterSpacing: 1 }}>
      {children}
    </Typography>
  );
}
