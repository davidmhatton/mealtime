import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: "#5500ff",
  },
  secondary: {
    main: "#008cff",
  },
  text: {
    primary: "#444444",
    secondary: "#666666",
  },
};

const typography = {
  color: palette.text.primary,
  body1: {
    color: palette.text.primary,
  },
  body2: {
    color: palette.text.secondary,
  },
  h1: {
    fontSize: "4rem",
    color: palette.text.primary,
  },
  h2: {
    fontSize: "3.5rem",
    color: palette.text.primary,
  },
  h3: {
    fontSize: "2.75rem",
    color: palette.text.primary,
  },
  h4: {
    color: palette.text.primary,
  },
  h5: {
    color: palette.text.primary,
  },
  h6: {
    color: palette.text.primary,
  },
};

export const mealtimeTheme = createTheme({
  palette,
  typography,
});
