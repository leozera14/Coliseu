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
  navlinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "auto",
  },
  logoContainer: {
    maxHeight: "100px",
    maxWidth: "150px",
  },
  logoImage: {
    width: "100%",
    height: "auto",
  },
  link: {
    textDecoration: "none",
    transition: "all 200ms ease",
    "&:hover": {
      fontWeight: "600",
    },
  },
}));

export const Header = () => {
  const { dark, changeThemeMode } = useThemeHook();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }} style={{ maxHeight: "100px" }}>
      <CssBaseline />
      <Grid container alignItems="center" xs={12}>
        {isMobile ? (
          <>
            <Grid
              item
              sx={{
                position: "absolute",
                left: 15,
              }}
            >
              <DrawerComponent />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box className={classes.logoContainer}>
                <img alt="SWINGAO" src={Logo} className={classes.logoImage} />
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item mr={6}>
              <Box className={classes.logoContainer}>
                <img alt="SWINGAO" src={Logo} className={classes.logoImage} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Grid className={classes.navlinks}>
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
                  to="/duvidas"
                  className={classes.link}
                  style={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  }}
                >
                  <Typography component="p" className={classes.link}>
                    Dúvidas
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
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch checked={dark} onChange={changeThemeMode} />
              <Typography>{!dark ? "Light Mode" : "Dark mode"}</Typography>
            </Grid>
          </>
        )}
      </Grid>
    </AppBar>
  );
};
