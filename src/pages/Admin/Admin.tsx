import {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";

import { api } from '../../services/api';

import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/AddOutlined";

import { makeStyles } from "@mui/styles";

import { LoadingSpinner } from '../../components/LoadingSpinner';

import {IEvents} from '../../types/index'
import { toast } from 'react-toastify';

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
    justifyContent: "flex-end", 
    gap: "16px",
  },
}));


export const Admin = () => {
  const [events, setEvents] = useState<IEvents[]>([])
  const [isLoadingEvents, setIsLoadingEvents] = useState<boolean | any>(false);

  const navigate = useNavigate();

  const classes = useStyles();

  const getEventList = () => {
    setIsLoadingEvents(true)

    api().get("/events/list").then((response: any) => {

      if(response.status === 200 && response.data) {
        setIsLoadingEvents(false)

        const {data} = response;

        setEvents(data)
      }
      
    }).catch((error: any) => {
      console.log(error)
      toast.error(error)
      setIsLoadingEvents(false)
    })
  }

  const handleDeleteEvent = async (eventId: number) => {
    try {
      await api().delete(`/events/${eventId}`).then((response: any) => {
        if(response.status === 200 && response.data.success === true) {
          toast.success(response.data.message)
        }
        getEventList()
      })
    } catch (error) {
      toast.error('Erro ao deletar evento, tente novamente mais tarde.')
      console.log(error)
    }
  }

  const editEventById = (eventId: number) => {
    navigate(`/admin/newevent/${eventId}`)
  }

  useEffect(() => {
    getEventList()
  }, [])

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
        {isLoadingEvents && <LoadingSpinner />}
        {!isLoadingEvents && events &&
        events.map((event) => (
          <div className={classes.eventWrapper} key={event.id}>
            <p className={classes.eventLabel}> {event.title} </p>
            <img
              className={classes.eventImage}
              src={event.imgur_link}
              alt={'Image'}
            />
            <p className={classes.eventDescription}> {event.description} </p>
            <div className={classes.eventActions}>
              <Button onClick={() => editEventById(event.id)} variant="outlined">
                Editar
              </Button>
              <Button
                onClick={() => handleDeleteEvent(event.id)}
                variant="outlined"
                color="error"
              >
                Deletar
              </Button>
            </div>
          </div>
        ))
        }
        
      </div>
    </div>
  );
};
