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
      greys: {
        main: React.CSSProperties["color"];
        dark: React.CSSProperties["color"];
        light: React.CSSProperties["color"];
        lighther?: React.CSSProperties["color"];
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
      greys?: {
        main?: React.CSSProperties["color"];
        dark?: React.CSSProperties["color"];
        light?: React.CSSProperties["color"];
        lighther?: React.CSSProperties["color"];
      };
    };
  }
}

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
      greys: {
        main: "#A8B2D1",
        dark: "#233554",
        light: "#8892B0",
        lighther: "#CCD6F6",
      },
    },
  },
};

const theme = createTheme(themeOptions);

declare module "@emotion/react" {
  export interface Theme extends MUITheme {}
}

export default theme;
