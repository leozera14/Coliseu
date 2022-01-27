import { mainRoutes as Routes } from "./routers/index";
import { ThemeProvider } from "./contexts/theme";
import { Grid } from "@mui/material";

function App() {
  return (
    <ThemeProvider>
      <Grid className="container-full">
        <Grid className="container-center">
          <Routes />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
