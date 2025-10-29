import React from "react";
import { Chip } from "@mui/material";

// Main Badge component
function Badge({ label, variant = "default", icon, className, ...props }) {
  // Map Radix variants to MUI colors
  let color = "default"; // default MUI color
  let styleProps = {};

  switch (variant) {
    case "default":
      color = "primary";
      break;
    case "secondary":
      color = "secondary";
      break;
    case "destructive":
      color = "error";
      break;
    case "outline":
      color = "default";
      styleProps = { variant: "outlined" };
      break;
    default:
      color = "default";
  }

  return (
    <Chip
      label={label}
      icon={icon}
      color={color}
      size="small"
      {...styleProps}
      className={className}
      {...props}
    />
  );
}

// Example usage
export default function ExampleBadges() {
  return (
    <div className="flex gap-2">
      <Badge label="Primary" variant="default" />
      <Badge label="Secondary" variant="secondary" />
      <Badge label="Error" variant="destructive" />
      <Badge label="Outlined" variant="outline" />
    </div>
  );
}

// Export
export { Badge };
