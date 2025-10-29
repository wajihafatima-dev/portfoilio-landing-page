import React, { useState } from "react";
import { Box, Popover as MUIPopover } from "@mui/material";

export function Popover({ children, ...props }) {
  // For MUI Popover, open state is managed via anchorEl
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box {...props}>
      {/* Render children with trigger and content */}
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        // PopoverTrigger
        if (child.type.displayName === "PopoverTrigger") {
          return React.cloneElement(child, { onClick: handleOpen });
        }

        // PopoverContent
        if (child.type.displayName === "PopoverContent") {
          return React.cloneElement(child, {
            open: Boolean(anchorEl),
            anchorEl,
            onClose: handleClose,
          });
        }

        return child;
      })}
    </Box>
  );
}

export function PopoverTrigger({ children, onClick, ...props }) {
  return React.cloneElement(children, { ...props, onClick });
}
PopoverTrigger.displayName = "PopoverTrigger";

export function PopoverContent({ open, anchorEl, onClose, children, ...props }) {
  return (
    <MUIPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      {...props}
    >
      <Box
        sx={{
          p: 2,
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 3,
          minWidth: 280,
        }}
      >
        {children}
      </Box>
    </MUIPopover>
  );
}
PopoverContent.displayName = "PopoverContent";

export function PopoverAnchor(props) {
  return <Box component="span" {...props} />;
}
PopoverAnchor.displayName = "PopoverAnchor";
