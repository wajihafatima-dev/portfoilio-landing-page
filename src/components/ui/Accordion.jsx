import React from "react";
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Simple utility to join classNames (optional)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Main Accordion wrapper (optional)
function Accordion({ children, className }) {
  return <div className={cn("border rounded-md", className)}>{children}</div>;
}

// Accordion Item
function AccordionItem({ children, className, defaultExpanded = false }) {
  return (
    <MUIAccordion className={className} defaultExpanded={defaultExpanded} disableGutters>
      {children}
    </MUIAccordion>
  );
}

// Accordion Trigger (Header)
function AccordionTrigger({ children, className }) {
  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />} className={cn("text-sm font-medium", className)}>
      {children}
    </AccordionSummary>
  );
}

// Accordion Content (Details)
function AccordionContent({ children, className }) {
  return <AccordionDetails className={cn("text-sm", className)}>{children}</AccordionDetails>;
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
