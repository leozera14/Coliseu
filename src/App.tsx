import { mainRoutes as Routes } from "./routers/index";
import { ThemeProvider } from "./contexts/theme";
import { Grid } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import { useTheme as useThemeHook } from "./hooks/theme/useTheme";


const useStyles: any = makeStyles(() => ({
  containerFull: {
    width: "100%",
    height: "100%",
  },

  containerCenter: {
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function App() {
  const classes = useStyles();
  const { dark, changeThemeMode } = useThemeHook();

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
              lg: "100%",
              xl: "100%",
            },
          }}
        >
          <Routes/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
