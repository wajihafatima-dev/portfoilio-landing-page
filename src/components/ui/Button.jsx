import React from "react";
import { Button as MUIButton } from "@mui/material";

// Mapping your Radix variants to MUI props
const variantMap = {
  default: "contained",
  destructive: "contained",
  outline: "outlined",
  secondary: "contained",
  ghost: "text",
  link: "text",
};

// Mapping colors for each variant
const colorMap = {
  default: "primary",
  destructive: "error",
  outline: "primary",
  secondary: "secondary",
  ghost: "inherit",
  link: "primary",
};

// Button sizes mapping
const sizeMap = {
  default: "medium",
  sm: "small",
  lg: "large",
  icon: "medium",
};

// Main Button component
function Button({ variant = "default", size = "default", className, children, ...props }) {
  return (
    <MUIButton
      variant={variantMap[variant]}
      color={colorMap[variant]}
      size={sizeMap[size]}
      className={className}
      {...props}
    >
      {children}
    </MUIButton>
  );
}

// Example usage
export default function ExampleButtons() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

// Export
export { Button };
