import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Loader } from '@googlemaps/js-api-loader';
import React, { useState, useEffect, useRef, useCallback } from 'react';

// const loader = new Loader({
//   apiKey: "",
//   version: "weekly",
//   libraries: ["places"]
// });

// const mapOptions = {
//   center: {
//     lat: -29.773984533363166,
//     lng: -51.153980846393196
//   },
//   zoom: 4
// };

// const renderMap = () => {
//   const element = document.getElementById("map")

//   if (element) {
//     loader
//     .load()
//     .then((google) => {
//       new google.maps.Map(element, mapOptions);
//     })
//     .catch((e) => {
//       console.log(e)
//     });
//   }
// }

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
    flexWrap: "wrap",
  },
  itemContainer: {
    padding: "16px",
    display: "flex",
    flexWrap: "wrap",
    // width: "calc(50vw - 16px)",
    maxWidth: "50vw",
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

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center: google.maps.LatLngLiteral = {
  lat: -29.773984533363166,
  lng: -51.153980846393196
};

const mapsOptions = {
  center: center,
  zoom: 10
}

import Mapa from "../../assets/map.png";

const mapaLink = "https://www.google.com/maps/place/Coliseu+Fantasy+Club/@-29.7740092,-51.1547494,19z/data=!3m1!4b1!4m5!3m4!1s0x951969b46ba9ae03:0xc7972bfec2a4ced8!8m2!3d-29.7740054!4d-51.154128"

export const Contact = () => {
  const isMountedRef = useRef(true)
  const isMounted = useCallback(() => isMountedRef.current, [])

  const classes = useStyles();

  // useEffect(() => {
    
  //   if(isMounted()) {
  //     renderMap()
  //   }
  //   return () => {
  //     isMountedRef.current = false
  //   }
  // }, []);

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

      <section className={classes.wrapper}>
        <div className={classes.itemContainer}>
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

        <div className={classes.itemContainer}>
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

          {/* <div id="map"></div> */}

          <a href={mapaLink} target="_blank">
            <img
              src={Mapa}
              alt="Mapa Coliseu Fantasy Club"
              className={classes.image}
            />
          </a>

          {/* <LoadScript
            googleMapsApiKey="AIzaSyCYtbIyj-nbc_3M4hMH6HegFWQa82b31Bo"
          >
            <GoogleMap
              options={mapsOptions}
              id='coliseu'
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
            >
              <></>
            </GoogleMap>
          </LoadScript> */}
        </div>
      </section>

    </div>
  );
};