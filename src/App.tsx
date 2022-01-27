import { mainRoutes as Routes } from "./routers/index";
import { ThemeProvider } from "./contexts/theme";
import { Grid } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

const useStyles: any = makeStyles(() => ({
  containerFull: {
    width: "100%",
    height: "100%",
  },

  containerCenter: {
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <Grid className={classes.containerFull}>
        <Grid
          className={classes.containerCenter}
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "85%",
              xl: "85%",
            },
          }}
        >
          <Routes />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
