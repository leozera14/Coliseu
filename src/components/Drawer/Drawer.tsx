import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import { handleLogout } from "../../utils/handleLogout";

const useStyles: any = makeStyles(() => ({
  link: {
    textDecoration: "none",
    transition: "all 200ms ease",
    fontSize: "18px",
    "&:hover": {
      fontWeight: "600",
    },
  },
  icon: {
    color: "#fff",
  },
  drawerListItems: {
    width: "250px",
  },
  logout: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '0',
    paddingTop: '15px',
    paddingBottom: '15px',
    cursor: 'pointer'
  }
}));

export const DrawerComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const username = window.localStorage.getItem('username')
  const token = window.localStorage.getItem('auth')

  const verifyUserAndToken = username && token
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className={classes.drawerListItems}>
          {verifyUserAndToken && (
            <>
              <ListItem style={{paddingTop: '12px', paddingBottom: '12px'}}>
                <ListItemText>
                  Bem vindo, {username}
                </ListItemText>
              </ListItem>
              <Divider />
            </>
          )}
         

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
        </List>
        {verifyUserAndToken && (
            <div onClick={handleLogout} className={classes.logout}>
              <Typography component="p" fontWeight='bold' fontSize="18px">
                Sair
              </Typography>
            </div>
          )}
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </>
  );
};
