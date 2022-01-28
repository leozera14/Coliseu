import { Box, Typography } from "@mui/material";

import { ImagesList } from "../../components";

import test1 from "../../assets/test1.gif";
import test2 from "../../assets/test2.jpg";
import test3 from "../../assets/test3.gif";

export const Environments = () => {
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
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ margin: "5px 0 50px 0", fontSize: "30px", fontWeight: "500" }}
        >
          Os ambientes mais excitantes
        </Typography>
        <ImagesList images={images} />
      </Box>
    </>
  );
};
