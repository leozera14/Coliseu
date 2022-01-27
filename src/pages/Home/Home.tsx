import React from "react";

import { Grid, Typography, Box, Paper } from "@mui/material";

import Carousel from "react-material-ui-carousel";

import { makeStyles } from "@material-ui/styles";

// Images
import test1 from "../../assets/test1.gif";
import test2 from "../../assets/test2.jpg";

const useStyles: any = makeStyles(() => ({
  image: {
    height: "auto",
    width: "100%",
  },
  containerFullHeight: {
    height: "100%",
  },
}));

export const Home = () => {
  const classes = useStyles();

  var images = [
    {
      title: "Image 1",
      description: "This is a image",
      image: `${test1}`,
    },
    {
      title: "Image 2",
      description: "This is a image 2",
      image: `${test2}`,
    },
  ];

  return (
    <>
      <Grid className={classes.containerFullHeight}>
        <Carousel
          stopAutoPlayOnHover={false}
          navButtonsAlwaysVisible={true}
          className={classes.containerFullHeight}
          indicatorContainerProps={{
            style: {
              margin: "0",
              position: "absolute",
              bottom: "10%",
            },
          }}
        >
          {images.map((image, i) => (
            <Grid key={i} className={classes.containerFullHeight}>
              <img src={image.image} className={classes.image} />
              //{" "}
            </Grid>
          ))}
        </Carousel>
      </Grid>
    </>
  );
};
