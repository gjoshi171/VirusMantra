import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import UserCard from "./UserCard";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    flex: 1,
    display: "flex",
    padding: 72,
  },
}));

export default function UserType({ onUserStage }) {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xl">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <UserCard
            title="I am a Donor"
            iconType="donor"
            onSelect={() => onUserStage(1)}
          ></UserCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <UserCard
            title="I am a Patient"
            iconType="patient"
            onSelect={() => onUserStage(2)}
          ></UserCard>
        </Grid>
      </Grid>
    </Container>
  );
}
