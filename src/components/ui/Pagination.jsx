import React from "react";
import { Box, Button} from "@mui/material";
import { ChevronLeft, ChevronRight, MoreHoriz } from "@mui/icons-material";

// Root container
export function Pagination({ children, ...props }) {
  return (
    <Box
      component="nav"
      role="navigation"
      aria-label="pagination"
      sx={{ display: "flex", justifyContent: "center", mx: "auto", width: "100%" }}
      {...props}
    >
      {children}
    </Box>
  );
}

// List container
export function PaginationContent({ children, ...props }) {
  return (
    <Box component="ul" sx={{ display: "flex", gap: 1, listStyle: "none", p: 0, m: 0 }} {...props}>
      {children}
    </Box>
  );
}

// List item
export function PaginationItem({ children, ...props }) {
  return <Box component="li" {...props}>{children}</Box>;
}

// Pagination link
export function PaginationLink({ children, isActive, ...props }) {
  return (
    <Button
      variant={isActive ? "outlined" : "text"}
      size="small"
      {...props}
    >
      {children}
    </Button>
  );
}

// Previous button
export function PaginationPrevious({ onClick, ...props }) {
  return (
    <PaginationLink onClick={onClick}>
      <ChevronLeft />
      <Box sx={{ display: { xs: "none", sm: "inline" }, ml: 0.5 }}>Previous</Box>
    </PaginationLink>
  );
}

// Next button
export function PaginationNext({ onClick, ...props }) {
  return (
    <PaginationLink onClick={onClick}>
      <Box sx={{ display: { xs: "none", sm: "inline" }, mr: 0.5 }}>Next</Box>
      <ChevronRight />
    </PaginationLink>
  );
}

// Ellipsis for skipped pages
export function PaginationEllipsis(props) {
  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
      }}
      aria-hidden="true"
      {...props}
    >
      <MoreHoriz />
    </Box>
  );
}
