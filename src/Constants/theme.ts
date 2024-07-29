// src/theme/theme.ts
import { createTheme, ThemeOptions, Theme as MUITheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    myCustomColor: {
      dark: React.CSSProperties["color"];
      text: {
        main: React.CSSProperties["color"];
        secondary: React.CSSProperties["color"];
        dark: React.CSSProperties["color"];
      };
    };
  }
  interface PaletteOptions {
    myCustomColor?: {
      dark?: React.CSSProperties["color"];
      text?: {
        main?: React.CSSProperties["color"];
        secondary?: React.CSSProperties["color"];
        dark?: React.CSSProperties["color"];
      };
    };
  }
}

// Define your theme object
const themeOptions: ThemeOptions = {
  palette: {
    primary: { main: "#51C6B7" },
    secondary: {
      dark: "#0F172A",
      main: "#51C6B7",
    },
    myCustomColor: {
      dark: "#0F172A",
      text: {
        main: "#FFFFFF",
        secondary: "#51C6B7",
        dark: "#DDDDDD",
      },
    },
  },
};

// Create the theme
const theme = createTheme(themeOptions);

// To get proper type checks
declare module "@emotion/react" {
  export interface Theme extends MUITheme {}
}

export default theme;
