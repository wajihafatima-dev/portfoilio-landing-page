import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { ChevronRight, MoreHoriz } from "@mui/icons-material";

// Main Breadcrumb wrapper
function Breadcrumb({ children, className, ...props }) {
  return (
    <Breadcrumbs
      separator={<ChevronRight fontSize="small" />}
      aria-label="breadcrumb"
      className={className}
      {...props}
    >
      {children}
    </Breadcrumbs>
  );
}

// Breadcrumb link item
function BreadcrumbLink({ href, children, ...props }) {
  return (
    <Link
      underline="hover"
      color="inherit"
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

// Current page (disabled)
function BreadcrumbPage({ children, ...props }) {
  return (
    <Typography color="text.primary" {...props}>
      {children}
    </Typography>
  );
}

// Ellipsis for collapsed breadcrumbs (optional)
function BreadcrumbEllipsis({ ...props }) {
  return (
    <Typography {...props}>
      <MoreHoriz fontSize="small" /> 
      <span className="sr-only">More</span>
    </Typography>
  );
}

// Example usage
export default function ExampleBreadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbLink href="/category">Category</BreadcrumbLink>
      <BreadcrumbPage>Product</BreadcrumbPage>
    </Breadcrumb>
  );
}

// Export all components
export {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbEllipsis,
};
