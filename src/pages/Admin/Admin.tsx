import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/AddOutlined";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles: any = makeStyles(() => ({
  container: {
    padding: "32px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  eventsContainer: {
    display: "flex",
    gap: "16px",
  },
  headerWrapper: {
    width: "100%",
    height: "40px",
    marginBottom: "32px",
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  },
  eventWrapper: {
    maxWidth: "20%",
    flexGrow: 1,
    padding: "16px",
    borderRadius: "10px",
    border: "solid #fff 1px",
  },
  eventImage: {
    width: "100%",
  },
  eventLabel: {
    fontWeight: 500,
    paddingBottom: "16px",
  },
  eventActions: {
    paddingTop: "16px",
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    gap: "16px",
  },
}));

const mockEvents = [
  {
    id: "119960ed-6379-46a4-a214-7fb6c5b70806",
    label: "Swingao bolado dos anao careca",
    description:
      "Swing de qualidade na melhor casa do brasil com 73 anões carecas e direito a uma carreirinha no pau do anão para cada convidado.",
    imageLabel: "Anões do swing",
    imageUrl:
      "http://images7.memedroid.com/images/UPLOADED130/54f9c1ec91293.jpeg",
  },
  {
    id: "119960ed-6379-46a4-a214-7fb6c5b70806",
    label: "Swingao bolado dos anao careca",
    description:
      "Swing de qualidade na melhor casa do brasil com 73 anões carecas e direito a uma carreirinha no pau do anão para cada convidado.",
    imageLabel: "Anões do swing",
    imageUrl:
      "http://images7.memedroid.com/images/UPLOADED130/54f9c1ec91293.jpeg",
  },
];

export const Admin = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.headerWrapper}>
        <Typography
          variant="h1"
          sx={{
            margin: "5px 0 50px 0",
            fontSize: "25px",
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          Painel administrativo
        </Typography>

        <Link
          to="/admin/newevent"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="outlined" startIcon={<AddIcon />}>
            Novo evento
          </Button>
        </Link>
      </div>

      <div className={classes.eventsContainer}>
        {mockEvents.map((event) => (
          <div className={classes.eventWrapper}>
            <p className={classes.eventLabel}> {event.label} </p>
            <img
              className={classes.eventImage}
              src={event.imageUrl}
              alt={event.imageLabel}
            />
            <p className={classes.eventDescription}> {event.description} </p>
            <div className={classes.eventActions}>
              <Button onClick={() => console.log("Editar!")} variant="outlined">
                Editar
              </Button>
              <Button
                onClick={() => console.log("Deletar!")}
                variant="outlined"
                color="error"
              >
                Deletar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
