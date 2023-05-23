import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { useHistory } from "react-router-dom";

function Header(props) {
  const { title } = props;
  const history = useHistory();

  const sections = [
    { title: "Monkey Pox", url: "/monkeyPox" },
    { title: "Covid 19", url: "/covid" },
    { title: "Ebola", url: "/ebola" },
    { title: "Chicken Pox", url: "/chicken pox" },
    { title: "Polio", url: "/polio" },
    { title: "Swine flu", url: "/swine flu" },
  ];

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          onClick={() => history.push("/")}
        >
          {title}
        </Typography>

        {/* <Button
          variant="outlined"
          size="small"
          onClick={() => history.push("/signUp")}
        >
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href={"signUp"}
            sx={{ p: 1, flexShrink: 0 }}
          >
            Sign up
          </Link>
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
