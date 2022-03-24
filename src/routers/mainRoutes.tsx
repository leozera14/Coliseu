import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  Doubts,
  Environments,
  Parties,
  Reservations,
  Rules,
  Contact,
  Footer,
  Admin
} from "../pages/index";
import { useTheme } from "../hooks/theme/useTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "../components";

import { makeStyles } from "@material-ui/styles";
const useStyles: any = makeStyles(() => ({
  container: {
    maxHeight: "calc(100vh - 60px)",
    // padding: "32px 16px",
    overflowY: "auto"
  },
  routeWrapper: {
    minHeight: "calc(100vh - 110px)",
  }
}));

export const mainRoutes = () => {
  const classes = useStyles();
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
        <div className={classes.container} style={{backgroundColor: dark ? "#262626" : "#ffffff"}}>
          <div className={classes.routeWrapper}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/ambientes" element={<Environments />} />
              <Route path="/festas" element={<Parties />} />
              <Route path="/reservas" element={<Reservations />} />
              <Route path="/regras" element={<Rules />} />
              <Route path="/duvidas" element={<Doubts />} />
              <Route path="/contato_localizacao" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};
