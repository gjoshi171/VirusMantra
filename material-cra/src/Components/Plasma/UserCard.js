import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import Donor from "../../Assets/donor.png";
import Patient from "../../Assets/patient.jpeg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontFamily: "bold",
  },
  cardButton: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  avatarStle: {
    height: 120,
    width: 120,
    padding: 16,
    margin: 16,
  },
});

export default function UserCard({ title, iconType, onSelect }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <Button onClick={onSelect} className={classes.cardButton}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {title}
          </Typography>

          {iconType === "donor" ? (
            <Avatar className={classes.avatarStle} src={Donor} />
          ) : (
            <Avatar className={classes.avatarStle} src={Patient} />
          )}
        </CardContent>
      </Button>
    </Card>
  );
}
