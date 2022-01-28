import React from "react";
//Components
import { DrawerComponent } from "../Drawer";

import {
  AppBar,
  Grid,
  CssBaseline,
  useMediaQuery,
  Box,
  Typography,
  Switch,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useTheme, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { useTheme as useThemeHook } from "../../hooks/theme/useTheme";

//Images
import Logo from "../../assets/logo.png";

const theme = createTheme();

const useStyles: any = makeStyles(() => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    maxHeight: 100,
    maxWidth: props => props.isMobile ? "100%" : "85%",
    margin: props => props.isMobile ? "0 20px" : "auto"
  },
  container: {
    display: "flex",
    gridGap: 16,
    height: "100%",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    transition: "all 200ms ease",
    "&:hover": {
      fontWeight: "600",
    },
  },
  themeToggle: {
    alignSelf: "flex-end"
  }
}));

export const Header = () => {
  const { dark, changeThemeMode } = useThemeHook();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const classes = useStyles({ isMobile });

  return (
    <div className={classes.wrapper}>
      
      {isMobile ? (
        <>
          <div className={classes.container} style={{ justifyContent: "space-between", width: "100%" }}>

            {/* <div> */}
              <DrawerComponent />
            {/* </div> */}

            <Box className={classes.logoContainer}>
              <img alt="SWINGAO" height="60" src={Logo} className={classes.logoImage} />
            </Box>

            <div className={classes.themeToggle}>
              <Switch checked={dark} onChange={changeThemeMode} />
              <Typography>{!dark ? "Light Mode" : "Dark mode"}</Typography>
            </div>

          </div>
        </>
      ) : (
        <>
          <div className={classes.container}>

            <Box className={classes.logoContainer}>
              <img alt="SWINGAO" height="60" src={Logo} className={classes.logoImage} />
            </Box>

            <Link
              to="/"
              className={classes.link}
              style={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              <Typography component="p" className={classes.link}>
                Inicio
              </Typography>
            </Link>

            <Link
              to="/ambientes"
              className={classes.link}
              style={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              <Typography component="p" className={classes.link}>
                Ambientes
              </Typography>
            </Link>

            <Link
              to="/festas"
              className={classes.link}
              style={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              <Typography component="p" className={classes.link}>
                Festas
              </Typography>
            </Link>

            <Link
              to="/reservas"
              className={classes.link}
              style={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              <Typography component="p" className={classes.link}>
                Reservas
              </Typography>
            </Link>

            <Link
              to="/regras"
              className={classes.link}
              style={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              <Typography component="p" className={classes.link}>
                Regras
              </Typography>
            </Link>

            <Link
              to="/contato_localizacao"
              className={classes.link}
              style={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              <Typography component="p" className={classes.link}>
                Contato & Localização
              </Typography>
            </Link>
            </div>

            <div className={classes.themeToggle}>
              <Switch checked={dark} onChange={changeThemeMode} />
              <Typography>{!dark ? "Light Mode" : "Dark mode"}</Typography>
            </div>
        </>
      )}
    </div>
  );
};
