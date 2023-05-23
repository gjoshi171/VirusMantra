import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    width: "100%",
  },
});

export default function UserRegister({ onUserStage }) {
  const classes = useStyles();
  const IntialUserData = {
    fullName: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    contactNo: "",
    fullAddress: "",
    bloodType: "",
  };

  const [donor, setDonor] = useState(IntialUserData);
  const [isValid, setIsValid] = useState(true);
  const [donorData, setDonorData] = useState([]);
  const { fullName, email, password, city, bloodType, state, country, contactNo, fullAddress } =
    donor;

  // const onRegisterHandler = () => {
  //   DonorService().RegisterDonor(donor);
  //   //getFetch('localhost:8081/register');
  //   return onUserStage(2);
  // };

  const onRegisterHandler = async () => {

    const rawResponse = await fetch("http://localhost:8081/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        city,
        state,
        country,
        contactNo,
        fullAddress,
        bloodType
      }),
    });
    const content = await rawResponse.json();

    console.log(content);
  };

  const onDonorChange = (event, label) => {
    let value = event.target.value;
    let updateDonor = { ...donor };
    updateDonor[label] = value;
    setDonor(updateDonor);
  };

  useEffect(() => {
    if (fullName && city && bloodType) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [fullName, city, bloodType]);

  const onClearHandler = () => {
    setDonor(IntialUserData);
  };

  const history = useHistory();
  return (
    <div>
      <Card>
        <div>
          <Avatar onClick={() => onUserStage(0)}>
            <ArrowBackIcon />
          </Avatar>
          <Typography>
            <h2>Register Donor information</h2>
          </Typography>
        </div>
        <CardContent>
          <List
            component="nav"
            className={classes.root}
            aria-label="mailbox folders"
          >
            <ListItem>
              <TextField
                fullWidth
                id="standard-basic"
                label="Donor Name"
                value={fullName}
                required
                onChange={(e) => onDonorChange(e, "fullName")}
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                id="standard-basic"
                label="Email Id"
                value={email}
                required
                onChange={(e) => onDonorChange(e, "email")}
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                type="password"
                id="standard-basic"
                label="Password"
                value={password}
                required
                onChange={(e) => onDonorChange(e, "password")}
              />
            </ListItem>
            <ListItem>
              <InputLabel id="bloodType" required>
                Blood Type
              </InputLabel>
              <Select
                labelId="bloodType"
                id="standard-basic"
                value={bloodType}
                required
                onChange={(e) => onDonorChange(e, "bloodType")}
              >
                <MenuItem value={"A+"}>A+</MenuItem>
                <MenuItem value={"A-"}>A-</MenuItem>
                <MenuItem value={"B+"}>B+</MenuItem>
                <MenuItem value={"B-"}>B-</MenuItem>
                <MenuItem value={"O+"}>O+</MenuItem>
                <MenuItem value={"O-"}>O-</MenuItem>
              </Select>
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                id="standard-basic"
                label="City"
                value={city}
                required
                onChange={(e) => onDonorChange(e, "city")}
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                id="standard-basic"
                label="State"
                value={state}
                onChange={(e) => onDonorChange(e, "state")}
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                id="standard-basic"
                label="Country"
                value={country}
                onChange={(e) => onDonorChange(e, "country")}
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                id="standard-basic"
                label="Contact No"
                value={contactNo}
                onChange={(e) => onDonorChange(e, "contactNo")}
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                id="standard-basic"
                label="Complete Address"
                value={fullAddress}
                onChange={(e) => onDonorChange(e, "fullAddress")}
              />
            </ListItem>
            <ListItem>
              <Button variant="outlined" onClick={onClearHandler}>
                Clear
              </Button>
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button
            disabled={isValid}
            // onClick={onRegisterHandler}
            onClick={() => {
              onRegisterHandler();
              history.push("/home");
            }}
            
            variant="outlined"
            size="large"
          >
            Register as Plasma Donor
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
