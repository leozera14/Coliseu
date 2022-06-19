import { Grid, ImageList, ImageListItem, useMediaQuery, Button } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import { useTheme } from "@mui/material/styles";

import { IEventsEnvironments } from '../../types/index'

interface IImagesListProps {
  images: IEventsEnvironments[];
  edit: boolean;
  handleDelete?: (eventId: number) => Promise<void> | undefined;
  editById?: (eventId: number) => void | undefined;
}


const useStyles: any = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1em",
    padding: "0 16px",
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
  imageListItemDescription: {
    lineHeight: "normal",
    paddingTop: "8px",
    overflow: "hidden",
    height: "30px",
  },
  eventWrapper: {
    padding: "20px",
    borderRadius: "10px",
    border: "solid #fff 1px",
  },
  eventImage: {
    width: "100%",
    height: "300px",
    objectFit: 'cover'
  },
  eventLabel: {
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: "20px",
  },
  eventActions: {
    marginTop: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center", 
    gap: "16px",
  }
}));

export const ImagesList = (props: IImagesListProps) => {
  const { images, edit, handleDelete, editById } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {edit 
      ? <>
          <ImageList
            cols={isMobile ? 1 : isLg ? 2 : isXl ? 3 : undefined}
            component={Grid}
            gap={25}
            className={classes.imageList}
            >
            {images.map((images: IEventsEnvironments, i:number) => (
              <ImageListItem key={i}>
                <div className={classes.eventWrapper} key={images.id}>
                  <p className={classes.eventLabel}> {images.title} </p>
                  <img
                    className={classes.eventImage}
                    src={images.imgur_link}
                    alt={'Image'}
                  />
                  <div className={classes.eventActions}>
                    <Button onClick={() => editById && editById(images.id)} variant="outlined">
                      Editar
                    </Button>
                    <Button
                      onClick={() => handleDelete && handleDelete(images.id)}
                      variant="outlined"
                      color="error"
                    >
                      Deletar
                    </Button>
                  </div>
                </div>
              </ImageListItem>
            
            ))}
            </ImageList>
        </>
      : <div className={classes.container}>
          <ImageList
          cols={isMobile ? 1 : isLg ? 2 : isXl ? 3 : undefined}
          component={Grid}
          gap={25}
          className={classes.imageList}
          >
          {images.map((images: IEventsEnvironments, i: number) => (
            <ImageListItem key={i} className={classes.imageListItem}>
              
              <img
                src={images.imgur_link}
                alt={images.title}
                loading="lazy"
                className={classes.eventImage}
              />
            </ImageListItem>
          ))}
          </ImageList>
        </div>
      }
    </>
  );
};
