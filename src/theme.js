import { createTheme } from "@mui/material/styles";

const emeraldGreen = {
  main: "#059669", // emerald-600 from Tailwind
  light: "#10b981", // emerald-500
  dark: "#047857", // emerald-700
  contrastText: "#ffffff",
};

const lightPalette = {
  mode: "light",
  primary: emeraldGreen,
  secondary: {
    main: "#f2f2f9",
    contrastText: "#030213",
  },
  background: {
    default: "#ffffff",
    paper: "#ffffff",
  },
  text: {
    primary: "#0f0f0f",
    secondary: "#717182",
  },
  divider: "rgba(0,0,0,0.1)",
};

const darkPalette = {
  mode: "dark",
  primary: emeraldGreen,
  secondary: {
    main: "#333333",
    contrastText: "#fafafa",
  },
  background: {
    default: "#0f0f0f",
    paper: "#181818",
  },
  text: {
    primary: "#ffffff",
    secondary: "#b0b0b0",
  },
  divider: "rgba(255,255,255,0.1)",
};

const commonSettings = {
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    fontSize: 16,
    button: { textTransform: "none", fontWeight: 500 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.625rem",
          textTransform: "none",
          fontWeight: 500,
          backgroundColor: emeraldGreen.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: emeraldGreen.dark,
          },
        },
      },
    },
  },
};

export const getTheme = (mode = "light") =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    ...commonSettings,
  });
