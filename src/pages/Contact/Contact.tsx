import { makeStyles } from "@material-ui/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { useRef, useCallback } from 'react';

import { useTheme } from "@mui/material/styles";

import Mapa from "../../assets/map.png";

const useStyles: any = makeStyles(() => ({
  container: {
    padding: "32px 16px",

    '& .header': {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }
  },
  wrapper: {
    display: "flex",
  },
  itemContainer: {
    padding: "16px",
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    alignContent: "baseline",

    '& p': {
      width: "100%"
    },
  },
  image: {
    width: "800px",
  }
}));

export const Contact = () => {
  const isMountedRef = useRef(true)
  const isMounted = useCallback(() => isMountedRef.current, [])

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const classes = useStyles();

  const mapaLink = import.meta.env.VITE_MAP_URL;

  return (
    <div className={classes.container}>
      <div className="header">
        <Typography
          variant="h1"
          sx={{
            margin: "5px 0 50px 0",
            fontSize: "25px",
            fontWeight: "700",
            fontStyle: "italic",
          }}
        >
          Contato
        </Typography>
      </div>

      <section className={classes.wrapper} style={{flexDirection: isMobile ? "column" : "row"}}>
        <div className={classes.itemContainer} style={{maxWidth: isMobile ? '100%' : '50%'}}>
          <Typography
            variant="h2"
            sx={{
              margin: "16px 0",
              fontSize: "1rem",
              fontWeight: "700",
              fontStyle: "regular",
            }}
          >
            Endereço
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              fontStyle: "regular"
            }}
          >
            BR-116 Av. Getúlio Vargas nº 1650 (Esquina Rua 25 de Julho, em frente ao viaduto.)
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              fontStyle: "regular"
            }}
          >
            Bairro Fião São Leopoldo - RS - Brasil
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              fontStyle: "regular"
            }}
          >
            Distâncias:

            Parque Assis Brasil/Esteio

            (16 min.)

            Fenac/Novo Hamburgo

            (11 min.)

            Aeroporto Salgado Filho/Porto Alegre

            (35 min.)
          </Typography>

          <Typography
            variant="body2"
            sx={{
              margin: "32px 0",
              fontSize: "1rem",
              fontStyle: "regular"
            }}
          >
            Situado em um bairro residêncial, classe média-alta, o Coliseu se destaca por ser o único Club de Swing fora da Capital Gaúcha com 15 anos de festas liberais, sua localização é de fácil acesso situando-se as margem da Br-116 (Sentido Porto Alegre - São Leopoldo). Confira o mapa e venha se divertir!!! 
          </Typography>

          <Typography
            variant="h2"
            sx={{
              margin: "16px 0",
              fontSize: "1rem",
              fontWeight: "700",
              fontStyle: "regular",
            }}
          >
            Telefones
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              fontStyle: "regular"
            }}
          >
            Club: ( após as 22 hs. de 6 ª a Dom.) (51)3592.3587
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              fontStyle: "regular"
            }}
          >
            Celular 24 hrs: (51)99712.9850 / (51)99526-1804
          </Typography>

          <Typography
            variant="h2"
            sx={{
              margin: "16px 0",
              fontSize: "1rem",
              fontWeight: "700",
              fontStyle: "regular",
            }}
          >
            Email
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              fontStyle: "regular"
            }}
          >
            coliseufantasyclub@gmail.com
          </Typography>

        </div>

        <div className={classes.itemContainer} style={{maxWidth: isMobile ? '100%' : '50%'}}>
        <Typography
            variant="h2"
            sx={{
              margin: "16px 0",
              fontSize: "1rem",
              fontWeight: "700",
              fontStyle: "regular",
              width: "100%"
            }}
          >
            Veja no mapa
          </Typography>

          {/* <iframe src={mapaLink} width="600" height="450" loading="lazy" style={{border:0}} allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade"></iframe> */}

          <a href={mapaLink} target="_blank">
            <img
              src={Mapa}
              alt="Mapa Coliseu Fantasy Club"
              className={classes.image}
              style={{maxWidth: '100%'}}
            />
          </a>
        </div>
      </section>

    </div>
  );
};