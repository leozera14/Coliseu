import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";

import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const useStyles: any = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  listContainer: {
    display: "flex",
    height: "80%",
    alignItems: "center",
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
    border: "1px solid rgba(255,255,255, .8)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius: 25,
  },
}));

export const Parties = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Box
        className={classes.container}
        sx={{
          height: isMobile ? "100%" : "calc(100vh - 110px)",
        }}
      >
        <Grid xs={12} sx={{ width: "100%" }}>
          <List
            dense={true}
            className={classes.listContainer}
            sx={{
              flexDirection: isMobile ? "column" : "row",
            }}
          >
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: isMobile ? "0 30px" : "none",
            }}
          >
            <ul
              style={{
                listStyle: isMobile ? "none" : "disc",
              }}
            >
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
