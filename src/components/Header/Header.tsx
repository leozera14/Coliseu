//Components
import { DrawerComponent } from "../Drawer";

import { useMediaQuery, Box, Typography, Switch, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

//Hooks
import { useThemeHook } from '../../hooks';

//Functions / Utils
import { handleLogout } from "../../utils/handleLogout";

//Images
import Logo from "../../assets/logo.png";

const useStyles: any = makeStyles((theme: any) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    maxHeight: 100,
    maxWidth: "100%",
    padding: "0 5%",
    backgroundColor: theme.palette.mode === "dark" ? "#161616" : "#f4f4f4",
    [theme.breakpoints.down("lg")]: {
      padding: "0 20px",
    },
  },
  container: {
    display: "flex",
    gridGap: 25,
    height: "100%",
    flexWrap: "nowrap",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  link: {
    textDecoration: "none",
    transition: "all 200ms ease",
    "&:hover": {
      fontWeight: "600",
    },
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
  },
  themeToggleAndUser: {
    display: "flex",
    alignSelf: "center",
    flexWrap: "nowrap",
    justifyContent: 'space-between'
  },
  wrapThemeSelector : {
    alignSelf: "center",
    height: "24px",
    marginLeft: "5px",
  },
  toggleAndUserInfo: {
    display: "flex",
    alignItems: 'center'
  }, 
  logoImage: {
    verticalAlign: "-webkit-baseline-middle",
  },
}));

export const Header = () => {
  const { dark, setDark } = useThemeHook();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const classes = useStyles();

  const username = window.localStorage.getItem('username')
  const token = window.localStorage.getItem('auth')

  const verifyUserAndToken = username && token

  const changeThemeMode = () => {
    setDark(!dark)
  }


  return (
    <div className={classes.wrapper}>
      {isMobile ? (
        <>
          <div className={classes.container}>
            <DrawerComponent />

            <Box className={classes.logoContainer}>
              <img
                alt="SWINGAO"
                height="60"
                src={Logo}
                className={classes.logoImage}
              />
            </Box>

            <div className={classes.themeToggleAndUser}>
              <Switch checked={dark} onChange={changeThemeMode} />

              <div
                style={{
                  alignSelf: "center",
                  height: "24px",
                  marginLeft: "5px",
                }}
              >
                {!dark ? <LightModeIcon /> : <NightlightIcon />}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.container}>
            <Box className={classes.logoContainer}>
              <img
                alt="SWINGAO"
                height="60"
                src={Logo}
                className={classes.logoImage}
              />
            </Box>

            <Link to="/" className={classes.link}>
              <Typography component="p" className={classes.link}>
                Inicio
              </Typography>
            </Link>

            <Link to="/ambientes" className={classes.link}>
              <Typography component="p" className={classes.link}>
                Ambientes
              </Typography>
            </Link>

            <Link to="/festas" className={classes.link}>
              <Typography component="p" className={classes.link}>
                Festas
              </Typography>
            </Link>

            <Link to="/reservas" className={classes.link}>
              <Typography component="p" className={classes.link}>
                Reservas
              </Typography>
            </Link>

            <Link to="/regras" className={classes.link}>
              <Typography component="p" className={classes.link}>
                Regras
              </Typography>
            </Link>

            <Link to="/duvidas" className={classes.link}>
              <Typography component="p" className={classes.link}>
                Dúvidas
              </Typography>
            </Link>

            <Link to="/contato_localizacao" className={classes.link}>
              <Typography component="p" className={classes.link}>
                Contato
              </Typography>
            </Link>
          </div>

          <div className={classes.themeToggleAndUser} style={{
            width: verifyUserAndToken ?  '400px' : '',
            maxWidth:  verifyUserAndToken ? '400px': '',
          }}>

            <div className={classes.toggleAndUserInfo}>
             <Switch checked={dark} onChange={changeThemeMode} />

              <div className={classes.wrapThemeSelector} >
                {!dark ? <LightModeIcon /> : <NightlightIcon />}
              </div>
            </div>
            

            {verifyUserAndToken && (
            <div className={classes.toggleAndUserInfo} style={{width: '50%', justifyContent: 'space-between'}}>
              <Typography component="p">
                Bem vindo, {username}
              </Typography>

              <Button type="button" variant="outlined" onClick={handleLogout}>
                <Typography component="p">
                  Sair
                </Typography>
              </Button>
            </div>
          )}
          </div>
        </>
      )}
    </div>
  );
};
