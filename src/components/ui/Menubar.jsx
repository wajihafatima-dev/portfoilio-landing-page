"use client";
import React, { useState, Fragment} from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Checkbox,
  Radio,
  Button,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckIcon from "@mui/icons-material/Check";
// import CircleIcon from "@mui/icons-material/Circle";


export function Menubar({ children }) {
  return <div style={{ display: "flex", gap: 4 }}>{children}</div>;
}

// Trigger Button for a Menu
export function MenubarTrigger({ children, onClick }) {
  return <Button onClick={onClick} variant="outlined">{children}</Button>;
}

// Menu Content Wrapper
export function MenubarContent({ anchorEl, open, onClose, children }) {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {children}
    </Menu>
  );
}

// Regular Menu Item
export function MenubarItem({ children, icon, onClick }) {
  return (
    <MenuItem onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
}

// Checkbox Menu Item
export function MenubarCheckboxItem({ children, checked, onChange }) {
  return (
    <MenuItem onClick={onChange}>
      <ListItemIcon>
        <Checkbox checked={checked} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
}

// Radio Menu Item
export function MenubarRadioItem({ children, checked, onChange }) {
  return (
    <MenuItem onClick={onChange}>
      <ListItemIcon>
        <Radio checked={checked} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </MenuItem>
  );
}

// Submenu Trigger
export function MenubarSubTrigger({ children, submenu }) {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  return (
    <Fragment>
      <MenuItem onMouseEnter={(e) => setAnchor(e.currentTarget)} onMouseLeave={() => setAnchor(null)}>
        <ListItemText>{children}</ListItemText>
        <ChevronRightIcon fontSize="small" />
      </MenuItem>
      <Menu anchorEl={anchor} open={open} onClose={() => setAnchor(null)} anchorOrigin={{ vertical: "top", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "left" }}>
        {submenu}
      </Menu>
    </Fragment>
  );
}

// Label
export function MenubarLabel({ children }) {
  return <Typography variant="subtitle2" sx={{ px: 2, py: 0.5, fontWeight: 500 }}>{children}</Typography>;
}

// Separator
export function MenubarSeparator() {
  return <Divider sx={{ my: 1 }} />;
}

// Shortcut Text
export function MenubarShortcut({ children }) {
  return <Typography variant="caption" sx={{ ml: "auto", color: "text.secondary" }}>{children}</Typography>;
}
