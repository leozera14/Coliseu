import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/index";
import { useTheme } from "../hooks/theme/useTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "../components";

export const mainRoutes = () => {
  const { dark } = useTheme();

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
