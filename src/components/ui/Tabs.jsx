"use client";

import React, { useState } from "react";
import { Tabs as MuiTabs, Tab, Box } from "@mui/material";

export function Tabs({ children, defaultValue = 0, className, ...props }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Expect children like <TabsList> and <TabsContent>
  const tabsList = React.Children.toArray(children).find(
    (child) => child.type.displayName === "TabsList"
  );
  const tabsContent = React.Children.toArray(children).filter(
    (child) => child.type.displayName === "TabsContent"
  );

  return (
    <Box className={className} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {tabsList &&
        React.cloneElement(tabsList, { value, onChange: handleChange })}
      {tabsContent &&
        tabsContent.map((content, index) =>
          React.cloneElement(content, { value, index })
        )}
    </Box>
  );
}

export function TabsList({ value, onChange, children }) {
  return (
    <MuiTabs
      value={value}
      onChange={onChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        backgroundColor: "action.hover",
        borderRadius: 2,
        minHeight: "36px",
        "& .MuiTab-root": {
          textTransform: "none",
          minHeight: "32px",
          fontSize: "0.875rem",
          fontWeight: 500,
          borderRadius: 1.5,
          transition: "all 0.2s ease",
          "&.Mui-selected": {
            backgroundColor: "background.paper",
            color: "text.primary",
          },
        },
      }}
    >
      {children}
    </MuiTabs>
  );
}
TabsList.displayName = "TabsList";

export function TabsTrigger({ label, icon, ...props }) {
  return (
    <Tab
      icon={icon}
      label={label}
      disableRipple
      sx={{
        minWidth: "80px",
        "& svg": {
          fontSize: "1rem",
          mr: icon ? 0.5 : 0,
        },
      }}
      {...props}
    />
  );
}
TabsTrigger.displayName = "TabsTrigger";

export function TabsContent({ children, value, index }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={{ flex: 1, mt: 2 }}
    >
      {value === index && children}
    </Box>
  );
}
TabsContent.displayName = "TabsContent";
