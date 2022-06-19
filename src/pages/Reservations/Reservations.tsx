import { makeStyles } from "@material-ui/styles";

import Mapa from "../../assets/mapa.png";

const useStyles: any = makeStyles(() => ({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    padding: "32px 16px",
  },
}));

export const Reservations = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <img
          src={Mapa}
          alt="Mapa Coliseu Fantasy Club"
          className={classes.image}
        />
      </div>
    </>
  );
};
