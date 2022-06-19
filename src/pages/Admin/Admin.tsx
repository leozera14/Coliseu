import { Link, useNavigate } from "react-router-dom";

import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/AddOutlined";

import { makeStyles } from "@mui/styles";


const useStyles: any = makeStyles(() => ({
  container: {
    padding: "32px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerWrapper: {
    width: "100%",
    height: "40px",
    marginBottom: "32px",
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  },
  headerButtons: {
    maxWidth: '300px',
    width: '300px',
    display: 'flex',
    justifyContent: 'space-around'
  }
}));


export const Admin = () => {
  const navigate = useNavigate();

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
      </div>
      
      <div className={classes.headerButtons}>
        <Link
          to="/admin/events"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="outlined" startIcon={<AddIcon />}>
            Eventos
          </Button>
        </Link>

        <Link
          to="/admin/environments"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="outlined" startIcon={<AddIcon />}>
            Ambientes
          </Button>
        </Link>
      </div>
      
    </div>
  );
};
