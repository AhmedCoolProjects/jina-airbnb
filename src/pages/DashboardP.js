import React, { Fragment } from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import HeaderC from "../components/HeaderC";
import ExpEnvCardC from "../components/ExpEnvCardC";
import "../styles/dashboardp.css";
import PlaceNatureCardC from "../components/PlaceNatureCardC";
import {
  experiencesdata,
  explornearby,
  liveanywhere,
} from "../backend/dataFromWebApp/data";
import BecomeHostC from "../components/BecomeHostC";

function DashboardP() {
  return (
    <Fragment>
      <CssBaseline />
      {/* header */}
      <HeaderC />
      <Container max-width="lg">
        {/* Explore nearby */}
        <p className="dashboard_title_part">Explore nearby</p>
        <Grid container spacing={3}>
          {explornearby.map((item) => (
            <ExpEnvCardC
              key={item.id}
              city={item.city}
              image={item.image}
              hours={item.hours}
            />
          ))}
        </Grid>
        {/* Live anywhere  */}
        <p className="dashboard_title_part">Live anywhere</p>
        <Grid container spacing={3}>
          {liveanywhere.map((item) => (
            <PlaceNatureCardC
              key={item.id}
              itemsize={3}
              subtitle=""
              title={item.title}
              image={item.image}
            />
          ))}
        </Grid>
        {/* become a host */}
        <BecomeHostC />
        {/* Discover Experiences */}
        <p className="dashboard_title_part">Discover Experiences</p>
        <p style={{ marginTop: -30, fontSize: "1.2rem", marginBottom: 32 }}>
          Unique activities with local experts—in person or online.
        </p>
        <Grid container spacing={3}>
          {experiencesdata.map((item) => (
            <PlaceNatureCardC
              itemsize={4}
              key={item.id}
              title={item.title}
              image={item.image}
              subtitle={item.subtitle}
            />
          ))}
        </Grid>
        {/* footer infos */}
        {/* copyrights */}
      </Container>
    </Fragment>
  );
}

export default DashboardP;
