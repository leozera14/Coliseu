//React
import {useState, useEffect} from 'react'

//Services
import { api } from '../../services/api';

//Components
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { ImagesList } from "../../components";
import { toast } from 'react-toastify';
import { LoadingSpinner } from '../../components/LoadingSpinner';


//Types
import { IEventsEnvironments } from '../../types/index'

const useStyles: any = makeStyles(() => ({
  container: {
    padding: "32px 0",
  },
  loading: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export const Environments = () => {
  const [environments, setEnvironments] = useState<IEventsEnvironments[]>([])
  const [isLoadingEnvironments, setIsLoadingEnvironments] = useState<boolean | any>(false);

  const classes = useStyles();

  const getEnvironmentsList = async() => {
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

  useEffect(() => {
    getEnvironmentsList()
  }, [])

  return (
    <>
      <Box
        className={classes.container}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "5px 0 50px 0",
            fontSize: "25px",
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          Os ambientes mais excitantes
        </Typography>

        {isLoadingEnvironments && 
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
        }
        {!isLoadingEnvironments && environments &&
          <ImagesList images={environments} edit={false} />
        }
      </Box>
    </>
  );
};
