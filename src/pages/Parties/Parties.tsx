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
    height: "calc(100vh - 110px)",
    padding: "32px 0",
    overflowY: "scroll",
  },

  listContainer: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
              <Typography
                variant="h2"
                sx={{ fontSize: "25px", fontWeight: 500, marginBottom: "25px" }}
              >
                CASAL
              </Typography>
              <div>
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
              <Typography
                variant="h2"
                sx={{ fontSize: "25px", fontWeight: 500, marginBottom: "25px" }}
              >
                SOLTEIRO
              </Typography>
              <div>
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
              <Typography
                variant="h2"
                sx={{ fontSize: "25px", fontWeight: 500, marginBottom: "25px" }}
              >
                SOLTEIRA
              </Typography>
              <div>
                <Typography component="p">
                  Entrada R$ 20,00 consumível.
                </Typography>
              </div>
            </ListItem>
          </List>
        </Grid>
      </Box>
    </>
  );
};
