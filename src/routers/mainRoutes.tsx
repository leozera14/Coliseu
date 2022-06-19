import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {
  Home,
  Doubts,
  Environments,
  Parties,
  Reservations,
  Rules,
  Contact,
  Footer,
  Admin,
  NewEvents,
  EventsList,
  AdminEnvironmentsList, 
  AdminNewEnvironment,
  Login
} from "../pages/index";
import { useThemeHook } from "../hooks/theme/useTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "../components";
import { ProtectedRoute } from "./ProtectedRoute";

import { makeStyles } from "@material-ui/styles";
const useStyles: any = makeStyles(() => ({
  container: {
    maxHeight: "calc(100vh - 60px)",
    // padding: "32px 16px",
    overflowY: "auto",
  },
  routeWrapper: {
    minHeight: "calc(100vh - 110px)",
  },
}));

export const mainRoutes = () => {
  const classes = useStyles();
  const { dark } = useThemeHook();

  const token = window.localStorage.getItem('auth')

  if(window.location.pathname === '/login' && token) {
    window.location.href = "/admin"
  }

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
        <div
          className={classes.container}
          style={{ backgroundColor: dark ? "#262626" : "#ffffff" }}
        >
          <div className={classes.routeWrapper}>
            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />

              <Route path="/" element={<Home />} />

              <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />

              <Route path="/admin/events" element={<ProtectedRoute element={<EventsList />} />} />
              <Route path="/admin/events/newevent" element={<ProtectedRoute element={<NewEvents />} />} >
                <Route path=":eventId" element={<ProtectedRoute element={<NewEvents />} />}/>
              </Route>

              <Route path="/admin/environments" element={<ProtectedRoute element={<AdminEnvironmentsList />} />} />
              <Route path="/admin/environments/newenvironment" element={<ProtectedRoute element={<AdminNewEnvironment />} />} >
                <Route path=":environmentId" element={<ProtectedRoute element={<AdminNewEnvironment />} />}/>
              </Route>

              <Route path="/login" element={<Login />} />
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
