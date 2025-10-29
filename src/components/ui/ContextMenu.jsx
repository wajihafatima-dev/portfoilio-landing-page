"use client";
import React from "react";
import {
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Divider,
  Radio,
  Typography,
  Popover,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Basic context menu wrapper
export function ContextMenu({ anchorEl, open, onClose, children }) {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <MenuList>{children}</MenuList>
    </Popover>
  );
}

// Context menu item
export function ContextMenuItem({ children, onClick, disabled }) {
  return (
    <MenuItem onClick={onClick} disabled={disabled}>
      {children}
    </MenuItem>
  );
}

// Context menu checkbox item
export function ContextMenuCheckboxItem({ children, checked, onChange }) {
  return (
    <MenuItem onClick={onChange}>
      <ListItemIcon>
        {checked ? <CheckIcon fontSize="small" /> : <div style={{ width: 24 }} />}
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
}

// Context menu radio item
export function ContextMenuRadioItem({ children, checked, onChange }) {
  return (
    <MenuItem onClick={onChange}>
      <ListItemIcon>
        {checked ? <Radio fontSize="small" /> : <RadioButtonUncheckedIcon fontSize="small" />}
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
}

// Context menu label
export function ContextMenuLabel({ children }) {
  return (
    <Typography variant="caption" sx={{ px: 2, py: 1.5, fontWeight: 500 }}>
      {children}
    </Typography>
  );
}

// Separator
export function ContextMenuSeparator() {
  return <Divider sx={{ my: 0.5 }} />;
}

// Submenu indicator (for visual arrow)
export function ContextMenuSubTrigger({ children }) {
  return (
    <MenuItem>
      {children}
      <ChevronRightIcon fontSize="small" sx={{ ml: "auto" }} />
    </MenuItem>
  );
}

// Shortcut text
export function ContextMenuShortcut({ children }) {
  return (
    <Typography variant="caption" sx={{ ml: "auto", fontSize: 10, letterSpacing: 1 }}>
      {children}
    </Typography>
  );
}
