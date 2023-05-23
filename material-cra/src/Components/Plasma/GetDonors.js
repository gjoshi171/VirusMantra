import {
  Avatar,
  Button,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    width: "100%",
    maxWidth: 360,
  },
});

function createData(colName) {
  return { colName };
}

const cols = [
  createData("Donor Name"),
  createData("Blood Type"),
  createData("City"),
  createData("State"),
  createData("Country"),
  createData("Contact No"),
];

export default function BasicTable({ onUserStage }) {
  const classes = useStyles();

  const [donorData, setDonorData] = useState([]);
  const [city, setCity] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [filterDonorData, setFilterDonorData] = useState(donorData);

  // useEffect(() => {
  //   getFetch();
  // }, []);

  useEffect(() => {
    setFilterDonorData(donorData);
  }, [donorData]);

  const getFetch = async () => {
    const response = await fetch("http://localhost:8081/getDonar/:city/:bloodType");
    const jsonData = await response.json();
    console.log("Getting data: ", jsonData);
    setDonorData(jsonData);
    setFilterDonorData(jsonData);
  };

  useEffect(() => {
    let filteredData = [];
    if (bloodType && city) {
      filteredData = donorData.filter((el) => {
        return (
          el?.city?.toLowerCase().includes(city?.toLowerCase()) &&
          el?.bloodType === bloodType
        );
      });
    } else if (bloodType) {
      filteredData = donorData.filter((el) => {
        return el?.bloodType === bloodType;
      });
    } else if (city) {
      filteredData = donorData.filter((el) => {
        return el?.city?.toLowerCase().includes(city?.toLowerCase());
      });
    } else {
      filteredData = donorData;
    }

    setFilterDonorData(filteredData);
  }, [bloodType, city]);

  const onCityChange = (e) => {
    setCity(e.target.value);
  };

  const onBloodTypeChange = (e) => {
    setBloodType(e.target.value);
  };

  const onDeleteHandler = (id) => {
    fetch("http://localhost:8080/donors/deleteDonor?id=" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setDonorData(data));

    console.log("target: ", id);
    console.log("response: ", filterDonorData);
  };

  const onClearHandler = async () => {
    // Tera get call

    const rawResponse = await fetch("http://localhost:8081/getDonar/:city/:bloodType", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const content = await rawResponse?.json();

    console.log(content);
    setCity("");
    setBloodType("");
    setFilterDonorData(donorData);
  };




//  // Tera Post call

//   // yh mock api https://app.mocklab.io/mock-apis/ website
//   const onSubmitHandler = async () => {
//     const rawResponse = await fetch("http://localhost:8081/register", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         fullName: "Matt",
//     email: "Matt@gmail.com",
//     password: "Matt",
//     city: "las vegas",
//     state: "CA",
//     country: "US",
//     contactNo: "43656155",
//     fullAddress: "nevada",
//     bloodType: "B+"
//       }),
//     });
//     const content = await rawResponse.json();

//     console.log(content);
//   };

  return (
    <>
      <Avatar onClick={() => onUserStage(0)}>{/* <ArrowBackIcon /> */}</Avatar>
      <div>
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          <ListItem>
            <h4 align="left">Filter Donors</h4>
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              id="standard-basic"
              label="City"
              value={city}
              onChange={onCityChange}
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
              onChange={onBloodTypeChange}
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
            <Button variant="outlined" onClick={onClearHandler}>
              Clear
            </Button>
            <Button variant="outlined" onClick={getFetch}>
              submit
            </Button>
          </ListItem>
        </List>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {cols.map((cols) => (
                <TableCell key={cols.colName} component="th" scope="cols">
                  {cols.colName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterDonorData.map((donor) => (
              <TableRow>
                <TableCell>{donor.fullName}</TableCell>
                <TableCell>{donor.bloodType}</TableCell>
                <TableCell>{donor.city}</TableCell>
                <TableCell>{donor.state}</TableCell>
                <TableCell>{donor.country}</TableCell>
                <TableCell>{donor.contactNo}</TableCell>
                <TableCell>
                  {/* onChange={(e) => onDonorChange(e, "state")} */}
                  <Button
                    onClick={() => {
                      onDeleteHandler(donor.id);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
