import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  barnav: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1CABA9",
  },
}));

export default function Barrenav(props) {
  const classes = useStyles();
  return (
    <header>
      <div className={classes.barnav}>
        <Button href="/home">Créer une nouvelle tâche</Button>
        <Button href="/table">TO DO LIST</Button>
      </div>
    </header>
  );
}
