import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import { ImagesList } from "../../components";

import test1 from "../../assets/test1.gif";
import test2 from "../../assets/test2.jpg";
import test3 from "../../assets/test3.gif";

const useStyles: any = makeStyles(() => ({
  container: {
    height: "calc(100vh - 110px)",
    padding: "32px 0",
    overflowY: "scroll"
  },
}));

export const Environments = () => {
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
    {
      title: "Image 3",
      description: "This is a image 3",
      image: `${test3}`,
    },
    {
      title: "Image 4",
      description: "This is a image 4",
      image: `${test2}`,
    },
    {
      title: "Image 5",
      description: "This is a image 5",
      image: `${test1}`,
    },
    {
      title: "Image 6",
      description: "This is a image 6",
      image: `${test3}`,
    },

    {
      title: "Image 7",
      description: "This is a image 7",
      image: `${test2}`,
    },

    {
      title: "Image 8",
      description: "This is a image 8",
      image: `${test3}`,
    },
  ];

  return (
    <>
      <Box
        className={classes.container}
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
          Os ambientes mais excitantes
        </Typography>
        <ImagesList images={images} />
      </Box>
    </>
  );
};
