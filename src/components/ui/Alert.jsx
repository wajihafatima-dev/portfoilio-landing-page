import React from "react";
import { Alert as MUIAlert, AlertTitle as MUIAlertTitle } from "@mui/material";

// Main Alert wrapper
function Alert({ severity = "info", children, className, ...props }) {
  // severity can be "error", "warning", "info", "success"
  return (
    <MUIAlert severity={severity} className={className} {...props}>
      {children}
    </MUIAlert>
  );
}

// Title for the alert
function AlertTitle({ children, className, ...props }) {
  return (
    <MUIAlertTitle className={className} {...props}>
      {children}
    </MUIAlertTitle>
  );
}

// Description / content
function AlertDescription({ children, className, ...props }) {
  return <div className={className} {...props}>{children}</div>;
}

// Example usage
export default function ExampleAlerts() {
  return (
    <div className="space-y-4">
      <Alert severity="info">
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an info alert using MUI.</AlertDescription>
      </Alert>

      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong!</AlertDescription>
      </Alert>

      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your operation was successful!</AlertDescription>
      </Alert>
    </div>
  );
}

// Export components
export { Alert, AlertTitle, AlertDescription };
