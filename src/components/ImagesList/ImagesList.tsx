import { Grid, ImageList, ImageListItem, useMediaQuery } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import { useTheme } from "@mui/material/styles";

const useStyles: any = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1em",
  },
  imageList: {
    width: "100%",
    height: "100%",
  },
  imageListItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    height: "auto",
    width: "100%",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const ImagesList = (props: any) => {
  const { images } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Grid
        container
        xs={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.container}
      >
        <ImageList
          cols={isMobile ? 1 : isLg ? 2 : isXl ? 3 : undefined}
          component={Grid}
          gap={25}
          className={classes.imageList}
        >
          {images.map((images: any, i: number) => (
            <Grid className={classes.centerContainer}>
              <ImageListItem
                key={i}
                sx={{
                  maxWidth: {
                    xs: "95%",
                    md: "95%",
                    lg: "50%",
                    xl: "300px",
                  },
                }}
                className={classes.imageListItem}
              >
                <img
                  src={images.image}
                  alt={images.title}
                  loading="lazy"
                  className={classes.image}
                />
              </ImageListItem>
            </Grid>
          ))}
        </ImageList>
      </Grid>
    </>
  );
};
