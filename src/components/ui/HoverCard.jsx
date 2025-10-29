"use client";

import React, { useState,  } from "react";
import { Popover, Box, } from "@mui/material";

export function HoverCard({
  children,
  content,
  align = "center",
  offset = 8,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  let transformOrigin = { vertical: "top", horizontal: "center" };
  let anchorOrigin = { vertical: "bottom", horizontal: "center" };

  if (align === "left") {
    anchorOrigin.horizontal = "left";
    transformOrigin.horizontal = "left";
  } else if (align === "right") {
    anchorOrigin.horizontal = "right";
    transformOrigin.horizontal = "right";
  }

  return (
    <>
      <Box
        display="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ ...anchorOrigin, vertical: anchorOrigin.vertical, horizontal: anchorOrigin.horizontal }}
        transformOrigin={{ ...transformOrigin, vertical: transformOrigin.vertical, horizontal: transformOrigin.horizontal }}
        PaperProps={{
          sx: {
            p: 2,
            width: 256,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: 3,
            borderRadius: 1,
          },
        }}
        disableRestoreFocus
      >
        {content}
      </Popover>
    </>
  );
}
