"use client";

import React from "react";
import { Tooltip, tooltipClasses } from "@mui/material";

/**
 * Custom MUI Tooltip Component
 * Converts Radix Tooltip structure into MUI Tooltip
 */
export default function TooltipMUI({
  title,
  children,
  placement = "top",
  enterDelay = 200,
  leaveDelay = 100,
  arrow = true,
  ...props
}) {
  return (
    <Tooltip
      title={title}
      placement={placement}
      arrow={arrow}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: "primary.main",
            color: "primary.contrastText",
            fontSize: "0.75rem",
            padding: "6px 10px",
            borderRadius: "6px",
            boxShadow: 2,
            [`&.${tooltipClasses.tooltip}`]: {
              transition: "all 0.2s ease-in-out",
            },
          },
        },
        arrow: {
          sx: {
            color: "primary.main",
          },
        },
      }}
      {...props}
    >
      {children}
    </Tooltip>
  );
}
