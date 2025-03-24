import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea", // Púrpura brillante
    },
    secondary: {
      main: "#03dac6", // Verde turquesa
    },
    background: {
      default: "#f4f4f9", // Gris claro
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
