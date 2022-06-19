import { Grid, Typography } from "@mui/material";
import { useThemeHook } from "../../hooks/theme/useTheme";

export const Footer = () => {
  const { dark } = useThemeHook();

  return (
    <>
      <Grid
        style={{backgroundColor: dark ? "#161616" : "#f4f4f4"}}
        sx={{
          display: "flex",
          width: "100%",
          position: "relative",
          bottom: 0,
          height: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="p" fontSize={12}>
          &copy; 2022 Coliseu Fantasy Club - Todos os direitos reservados.
        </Typography>
      </Grid>
    </>
  );
};
