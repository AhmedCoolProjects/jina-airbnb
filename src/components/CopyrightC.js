import {
  Grid,
  Typography,
  Link,
  Avatar,
  IconButton,
  Divider,
} from "@material-ui/core";
import React from "react";
import google from "../assets/google.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        target="blank_"
        color="inherit"
        href="https://www.linkedin.com/in/bargady-ahmed-082b30177">
        Ahmed BARGADY - airbnb design
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function CopyrightC() {
  return (
    <Grid
      style={{
        height: 80,
        alignItems: "center",
        display: "flex",
        backgroundColor: "#ddd",
        padding: "0 32px",
        flexDirection: "row",
      }}
      container
      spacing={0}>
      <Divider style={{ color: "gray", height: 2, width: "100%" }} />
      <Grid
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        item
        sm={6}
        md={6}
        xs={12}>
        <Copyright />
      </Grid>
      <Grid
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        item
        sm={6}
        md={6}
        xs={12}>
        <Link
          target="blank_"
          color="inherit"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jinacoolprojects@gmail.com">
          <IconButton color="inherit">
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src={google} />
          </IconButton>
        </Link>
        <Link
          target="blank_"
          color="inherit"
          href="https://www.linkedin.com/in/bargady-ahmed-082b30177">
          <IconButton color="inherit">
            <Avatar
              style={{ width: "1.5em", height: "1.5em" }}
              src={linkedin}
            />
          </IconButton>
        </Link>
        <Link
          target="blank_"
          color="inherit"
          href="https://twitter.com/AhmedBargady?s=09">
          <IconButton color="inherit">
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src={twitter} />
          </IconButton>
        </Link>
        <Link
          target="blank_"
          color="inherit"
          href="https://github.com/AhmedCoolProjects">
          <IconButton color="inherit">
            <Avatar style={{ width: "1.5em", height: "1.5em" }} src={github} />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
}

export default CopyrightC;
