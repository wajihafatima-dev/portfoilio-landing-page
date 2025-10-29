"use client";

import React from "react";
import {
  Menu,
  MenuItem,
  MenuList,
  Divider,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Radio,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Root dropdown wrapper
export function DropdownMenu({ children, ...props }) {
  return <Menu {...props}>{children}</Menu>;
}

// Trigger button
export function DropdownMenuTrigger({ children, onClick }) {
  // Clone child element and attach onClick for menu open
  return React.cloneElement(children, { onClick });
}

// Menu content wrapper (anchor + transform origin)
export function DropdownMenuContent({
  children,
  anchorOrigin,
  transformOrigin,
  ...props
}) {
  return (
    <Menu
      anchorOrigin={anchorOrigin || { vertical: "bottom", horizontal: "left" }}
      transformOrigin={transformOrigin || { vertical: "top", horizontal: "left" }}
      {...props}
    >
      {children}
    </Menu>
  );
}

// Regular menu item
export function DropdownMenuItem({ children, icon, onClick, ...props }) {
  return (
    <MenuItem onClick={onClick} {...props}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
}

// Checkbox menu item
export function DropdownMenuCheckboxItem({ children, checked, onChange, ...props }) {
  return (
    <MenuItem onClick={onChange} {...props}>
      <ListItemIcon>
        <Checkbox checked={checked} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
}

// Radio group wrapper
export function DropdownMenuRadioGroup({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

// Radio item
export function DropdownMenuRadioItem({ children, checked, onChange, ...props }) {
  return (
    <MenuItem onClick={onChange} {...props}>
      <ListItemIcon>
        <Radio checked={checked} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
}

// Submenu trigger
export function DropdownMenuSubTrigger({ children, onClick, ...props }) {
  return (
    <MenuItem onClick={onClick} {...props}>
      <ListItemText>{children}</ListItemText>
      <ChevronRightIcon fontSize="small" />
    </MenuItem>
  );
}

// Label
export function DropdownMenuLabel({ children, ...props }) {
  return (
    <Typography variant="subtitle2" sx={{ px: 2, py: 0.5 }} {...props}>
      {children}
    </Typography>
  );
}

// Separator
export function DropdownMenuSeparator(props) {
  return <Divider sx={{ my: 1 }} {...props} />;
}

// Shortcut text (e.g., keyboard shortcut display)
export function DropdownMenuShortcut({ children, ...props }) {
  return (
    <Typography variant="caption" color="text.secondary" sx={{ ml: "auto" }} {...props}>
      {children}
    </Typography>
  );
}

// Submenu content wrapper
export function DropdownMenuSubContent({ children, ...props }) {
  return <MenuList {...props}>{children}</MenuList>;
}
