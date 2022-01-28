import React from "react";

import { Grid, Typography, Box, Paper, useMediaQuery } from "@mui/material";

import Carousel from "react-material-ui-carousel";

import { makeStyles } from "@material-ui/styles";

import { useTheme, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { useTheme as useThemeHook } from "../../hooks/theme/useTheme";

// Images
import test1 from "../../assets/test1.gif";
import test2 from "../../assets/test2.jpg";

const useStyles: any = makeStyles(() => ({
  image: {
    width: "100%",
  },
  containerFullHeight: {
    height: "85%",
  },
  container: {
    height: "calc(100vh - 185px)",
  }
}));

export const Home = () => {
  const classes = useStyles();

  var images = [
    {
      title: "Image 1",
      description: "This is a image",
      image: `${test1}`,
      imageMobile : test2
    },
    {
      title: "Image 2",
      description: "This is a image 2",
      image: `${test2}`,
      imageMobile : test1
    },
  ];

  const { dark, changeThemeMode } = useThemeHook();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Carousel
        autoPlay={false}
        stopAutoPlayOnHover={false}
        navButtonsAlwaysVisible={true}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className={classes.container}
          >
            <img
              src={isMobile ? image.imageMobile : image.image}
              className={classes.image}
            />
            <p style={{ position: "absolute", top: 0}}>{image.description}</p>
            <p style={{ position: "absolute", top: 20}}>{isMobile ? "mobile" : "desktop"}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};
