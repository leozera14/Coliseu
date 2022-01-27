import React from "react";

import { Grid, Typography } from "@mui/material";

import Carousel from "react-material-ui-carousel";

import { makeStyles } from "@material-ui/styles";

// Images
import test1 from "../../assets/test1.gif";
import test2 from "../../assets/test2.jpg";

const useStyles: any = makeStyles(() => ({
  carousel: {
    width: "100%",
    height: "100%",
  },
  image: {
    maxHeight: "100%",
    width: "60%",
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
      <h1>Swingao</h1>
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid item xs={12} sx={{ width: "100%", height: "100%" }}>
          <Carousel
            stopAutoPlayOnHover={false}
            navButtonsAlwaysVisible={true}
            className={classes.carousel}
          >
            {images.map((image, i) => (
              <img
                alt={image.title}
                src={image.image}
                className={classes.image}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};
