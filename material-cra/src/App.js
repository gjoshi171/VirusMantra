import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import MonkeyPox from "./Pages/MonkeyPox";
import Covid from "./Pages/Covid";
import Ebola from "./Pages/Ebola";
import HIV from "./Pages/HIV";
import Polio from "./Pages/Polio";
import ChickenPox from "./Pages/ChickenPox";
import Swineflu from "./Pages/Swineflu";
import Plasma from "./Pages/Plasma";
import Statistics from "./Pages/Stastics";
import GetDonar from "./Components/Plasma/GetDonors";


export default function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        {/* <div>
        <Link to="/">Main page</Link> | <Link to="/page1">Page 1</Link>|{" "}
        <Link to="/page2">Page 2</Link>
      </div> */}

        <Switch>
          <Route path="/plasma">
            <Plasma />
          </Route>
          <Route path="/getDonar">
            <GetDonar />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/signUp">
            <SignIn />
          </Route>
          <Route path="/monkeyPox">
            <MonkeyPox />
          </Route>
          <Route path="/covid">
            <Covid />
          </Route>
          <Route path="/ebola">
            <Ebola />
          </Route>
          <Route path="/swine flu">
            <Swineflu />
          </Route>
          <Route path="/chicken pox">
            <ChickenPox />
          </Route>
          <Route path="/hiv">
            <HIV />
          </Route>
          <Route path="/polio">
            <Polio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
