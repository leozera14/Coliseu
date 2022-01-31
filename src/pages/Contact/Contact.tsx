import { makeStyles } from "@material-ui/styles";
const useStyles: any = makeStyles(() => ({
  container: {
    padding: "32px 16px",
  },
}));

export const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Contact</h1>
    </div>
  );
};
