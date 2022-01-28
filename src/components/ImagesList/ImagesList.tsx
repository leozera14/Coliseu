import { Grid, Box } from "@mui/material";

export const ImagesList = (props: any) => {
  const { images } = props;

  return (
    <>
      <Grid container xs={12} md={12} lg={12} xl={12} spacing={2}>
        {images.map((images: any, i: number) => (
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <img key={i} src={images.image} alt={images.title} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
