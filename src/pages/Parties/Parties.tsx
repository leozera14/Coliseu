import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
  container: {
    height: "calc(100vh - 110px)",
    [theme.breakpoints.down("lg")]: {
      height: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px",
  },

  listContainer: {
    display: "flex",
    height: "80%",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
  },
  borderedDiv: {
    width: "400px",
    height: "250px",
    maxWidth: "100%",
    padding: "30px",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255, .8)"
        : "1px solid rgba(0,0,0, .4)",

    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius: 25,
  },
  infoDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      padding: "0 30px",
    },
  },
  infoList: {
    listStyle: "disc",
    [theme.breakpoints.down("lg")]: {
      listStyle: "none",
    },
  },
}));

export const Parties = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Grid xs={12} sx={{ width: "100%" }}>
          <List dense={true} className={classes.listContainer}>
            <ListItem className={classes.listItem}>
              <div className={classes.borderedDiv}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "25px",
                    fontWeight: 500,
                    marginBottom: "25px",
                  }}
                >
                  CASAL
                </Typography>

                <Typography component="p">
                  <b>Sexta: </b>R$ 50,00.
                </Typography>
                <Typography component="p">
                  <b>Sabado: </b>R$ 80,00.
                </Typography>
                <Typography component="p">
                  <b>Domingo: </b>R$ 30,00 consumível.
                </Typography>
              </div>
            </ListItem>

            <ListItem className={classes.listItem}>
              <div className={classes.borderedDiv}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "25px",
                    fontWeight: 500,
                    marginBottom: "25px",
                  }}
                >
                  SOLTEIRO
                </Typography>

                <Typography component="p">
                  <b>Sexta: </b>R$ 100,00.
                </Typography>
                <Typography component="p">
                  <b>Sabado: </b>R$ 130,00.
                  <ListItemText secondary="OBS: Mudança de valor após as 23:30hrs para R$ 150,00."></ListItemText>
                </Typography>
                <Typography component="p">
                  <b>Domingo: </b>R$ 30,00 consumível.
                </Typography>
              </div>
            </ListItem>

            <ListItem className={classes.listItem}>
              <div className={classes.borderedDiv}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "25px",
                    fontWeight: 500,
                    marginBottom: "25px",
                  }}
                >
                  SOLTEIRA
                </Typography>

                <Typography component="p">
                  Entrada R$ 20,00 consumível.
                </Typography>
              </div>
            </ListItem>
          </List>
          <div className={classes.infoDiv}>
            <ul className={classes.infoList}>
              <li style={{ fontWeight: "bold" }}>
                Os valores de entrada de solteiro e casais não dão direito a
                consumo.
              </li>
              <li style={{ marginTop: "15px", fontWeight: "bold" }}>
                Festas especiais estão sujeitas a valores diferenciados.
              </li>
            </ul>
          </div>
        </Grid>
      </Box>
    </>
  );
};
