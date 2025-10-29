import React from "react";
import { Paper, Box, Typography, Stack } from "@mui/material";

// Main Card wrapper
function Card({ children, elevation = 1, className, ...props }) {
  return (
    <Paper
      elevation={elevation}
      sx={{display: "flex", flexDirection: "column", gap: 2, borderRadius: 2 }}
      className={className}
      {...props}
    >
      {children}
    </Paper>
  );
}

// Card Header
function CardHeader({ children, className, ...props }) {
  return (
    <Box
      sx={{ display: "grid", gap: 1, px: 3, pt: 4 }}
      className={className}
      {...props}
    >
      {children}
    </Box>
  );
}

// Card Title
function CardTitle({ children, className, ...props }) {
  return (
    <Typography variant="h6" component="h4" className={className} {...props}>
      {children}
    </Typography>
  );
}

// Card Description
function CardDescription({ children, className, ...props }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
       sx={{  pb: 4 }}
      className={className}
      {...props}
    >
      {children}
    </Typography>
  );
}

// Card Content
function CardContent({ children, className, ...props }) {
  return (
    <Box sx={{ px: 3, pb: 3 }} className={className} {...props}>
      {children}
    </Box>
  );
}

// Card Action (e.g., buttons)
function CardAction({ children, className, ...props }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", px: 3 }}
      className={className}
      {...props}
    >
      {children}
    </Box>
  );
}

// Card Footer
function CardFooter({ children, className, ...props }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: 3,
        py: 2,
        borderTop: 1,
        borderColor: "divider",
      }}
      className={className}
      {...props}
    >
      {children}
    </Box>
  );
}

// Export all components
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
  CardFooter,
};
