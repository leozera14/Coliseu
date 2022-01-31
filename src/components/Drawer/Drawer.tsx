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

const useStyles: any = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#fff",
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
}));

export const DrawerComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className={classes.drawerListItems}>
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
