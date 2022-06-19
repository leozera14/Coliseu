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

export const AdminEnvironmentsList = () => {
  const [environments, setEnvironments] = useState<IEventsEnvironments[]>([])
  const [isLoadingEnvironments, setIsLoadingEnvironments] = useState<boolean | any>(false);

  const navigate = useNavigate();

  const classes = useStyles();

  const getEnvironmentsList = async () => {
    setIsLoadingEnvironments(true)

    await api().get("/environments/list").then((response: any) => {

      if(response.status === 200 && response.data) {
        setIsLoadingEnvironments(false)

        const {data} = response;

        setEnvironments(data)
      }
      
    }).catch((error: any) => {
      console.log(error)
      toast.error(error)
      setIsLoadingEnvironments(false)
    })
  }

  const handleDeleteEnvironments = async (eventId: number) => {
    try {
      await api().delete(`/environments/${eventId}`).then((response: any) => {
        if(response.status === 200 && response.data.success === true) {
          toast.success(response.data.message)
        }
        getEnvironmentsList()
      })
    } catch (error) {
      toast.error('Erro ao deletar ambiente, tente novamente mais tarde.')
      console.log(error)
    }
  }

  const editEnvironmentsById = (eventId: number) => {
    navigate(`/admin/environments/newenvironment/${eventId}`)
  }

  useEffect(() => {
    getEnvironmentsList()
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
          Ambientes
        </Typography>

        <Link
          to="/admin/environments/newenvironment"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="outlined" startIcon={<Add />}>
            Novo Ambientes
          </Button>
        </Link>
      </div>
      
      

      <div className={classes.eventsContainer}>
        {isLoadingEnvironments && 
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
        }
        {!isLoadingEnvironments && environments &&
          <ImagesList images={environments} edit={true} handleDelete={handleDeleteEnvironments} editById={editEnvironmentsById} />
        }
      </div>
    </div>
  )
}