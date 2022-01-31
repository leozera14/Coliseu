import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";

export const Rules = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          margin: "5px 0 50px 0",
          fontSize: "25px",
          fontWeight: "500",
          fontStyle: "italic",
        }}
      >
        PRINCIPAIS REGRAS DO COLISEU FANTASY CLUB:
      </Typography>

      <Grid xs={12} sx={{ width: " 100%" }}>
        <List dense={true}>
          <ListItem>
            <ListItemText primary="- Higiene e apresentação são extremamente importantes e exigidos." />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="- Não é permitido o uso de bermudas, bonés, e chinelos. Bermudas são permitidas somente no verão."
              secondary="Dica: Homens devem vir de esporte fino e mulheres com roupas
                  elegantes e sensuais, leves."
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="- Não será permitida a entrada de pessoas portando armas ou drogas." />
          </ListItem>

          <ListItem>
            <ListItemText primary="- A casa não permite a entrada de menores de 18 anos, mesmo que acompanhados(as) dos pais." />
          </ListItem>

          <ListItem>
            <ListItemText primary="- Não é permitido o uso de câmeras filmadoras, filmagens com celulares e fotos, ou seja, não é permitido nenhum registro da festa." />
          </ListItem>

          <ListItem>
            <ListItemText primary="- Qualquer tipo de prostituição é proibida dentro da casa." />
          </ListItem>

          <ListItem>
            <ListItemText primary="- Proibido acender lanternas e celulares nas cabines, salas e dark room." />
          </ListItem>

          <ListItem>
            <ListItemText primary="- Não é permitido que levem copos de vidro, garrafas e cigarros acesos para as suítes, quartos e cabines." />
          </ListItem>

          <ListItem>
            <ListItemText primary="- Não é permitido bagunça, gritos e conversas desnecessárias nas salas e cabines, visando que, estes ambientes são lugares de concentração e sexo." />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
};
