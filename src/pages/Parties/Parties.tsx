import { makeStyles } from "@material-ui/styles";
const useStyles: any = makeStyles(() => ({
  container: {
    // height: "calc(100vh - 110px)",
    padding: "32px 16px",
    // overflowY: "scroll"
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
