import { makeStyles } from "@material-ui/styles";
const useStyles: any = makeStyles(() => ({
  container: {
    padding: "32px 16px",
  },
}));

export const Parties = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Parties</h1>
    </div>
  );
};
