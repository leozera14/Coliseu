import React from "react";
//Components
import { DrawerComponent } from "../Drawer";

import { AppBar, Grid, CssBaseline, useMediaQuery, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

//Images
import Logo from "../../assets/logo.png";

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
    color: "rgba(255,255,255,1)",
    transition: "all 200ms ease",

    "&:hover": {
      fontWeight: "600",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <CssBaseline />
      <Grid container alignItems="center" xs={12}>
        {isMobile ? (
          <>
            <Grid item xs={6}>
              <DrawerComponent />
            </Grid>

            <Grid item xs={6}>
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
                <Link color="secondary" to="/" className={classes.link}>
                  Inicio
                </Link>
                <Link to="/about" className={classes.link}>
                  Ambientes
                </Link>
                <Link to="/contact" className={classes.link}>
                  Festas
                </Link>
                <Link to="/faq" className={classes.link}>
                  Reservas
                </Link>
                <Link to="/faq" className={classes.link}>
                  Regras
                </Link>
                <Link to="/faq" className={classes.link}>
                  Dúvidas
                </Link>

                <Link to="/faq" className={classes.link}>
                  Contato & Localização
                </Link>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </AppBar>
  );
};
