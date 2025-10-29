import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

const mode = "light"; // ya "dark" — dynamically bhi set kar sakte ho (state se)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
