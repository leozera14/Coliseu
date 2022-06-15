import { useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const useStyles: any = makeStyles(() => ({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    height: "calc(100vh - 160px)",
  },
}));

interface images {
  description: string,
  id: number,
  imgur_link: string,
  title: string
}

export const Home = () => {
  const classes = useStyles();
  const [images, setImages] = useState([] as images[]);

  useEffect(() => {
    (async ()=> {
      const response = await api().get("/events/list");
      setImages(response.data);
    })()
  }, [])

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Carousel
        autoPlay={false}
        stopAutoPlayOnHover={false}
        navButtonsAlwaysVisible={true}
      >
        {images.length > 0 && images.map((image, i) => (
          <div key={i} className={classes.container}>
            <img
              src={isMobile ? image.imgur_link : image.imgur_link}
              className={classes.image}
            />
            {/* <p style={{ position: "absolute", top: 0 }}>{image.description}</p>
            <p style={{ position: "absolute", top: 20 }}>
              {isMobile ? "mobile" : "desktop"}
            </p> */}
          </div>
        ))}
      </Carousel>
    </>
  );
};
