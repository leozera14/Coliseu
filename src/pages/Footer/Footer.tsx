import { Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Grid
        xs={12}
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
