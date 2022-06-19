//React
import {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";

//Services
import { api } from '../../../services/api';

//Components
import { Typography, Button,  } from "@mui/material";
import { Add, ArrowBack} from "@mui/icons-material";
import { ImagesList } from "../../../components";
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { toast } from 'react-toastify';

//Styles
import { makeStyles } from "@mui/styles";

//Types
import { IEventsEnvironments } from '../../../types/index'


const useStyles: any = makeStyles(() => ({
  container: {
    padding: "32px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  eventsContainer: {
    width: '100%'
  },
  headerWrapper: {
    width: "100%",
    height: "40px",
    marginBottom: "32px",
    display: "flex",
    gap: "16px",
    justifyContent: "space-between",
  },
  loading: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export const EventsList = () => {
  const [events, setEvents] = useState<IEventsEnvironments[]>([])
  const [isLoadingEvents, setIsLoadingEvents] = useState<boolean | any>(false);

  const navigate = useNavigate();

  const classes = useStyles();

  const getEventList = async () => {
    setIsLoadingEvents(true)

    await api().get("/events/list").then((response: any) => {

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
    navigate(`/admin/events/newevent/${eventId}`)
  }

  useEffect(() => {
    getEventList()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.headerWrapper}>
        <Link
          to="/admin"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button startIcon={<ArrowBack />}>
            Voltar
          </Button>
        </Link>

        <Typography
          variant="h1"
          sx={{
            margin: "5px 0 50px 0",
            fontSize: "25px",
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          Eventos
        </Typography>

        <Link
          to="/admin/events/newevent"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="outlined" startIcon={<Add />}>
            Novo Evento
          </Button>
        </Link>
      </div>
      
      

      <div className={classes.eventsContainer}>
        {isLoadingEvents && 
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
        }
        {!isLoadingEvents && events &&
          <ImagesList images={events} edit={true} handleDelete={handleDeleteEvent} editById={editEventById} />
        }
      </div>
    </div>
  )
}