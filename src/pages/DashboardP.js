import React, { Fragment } from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import HeaderC from "../components/HeaderC";
function DashboardP() {
  return (
    <Fragment>
      <CssBaseline />
      {/* header */}
      <HeaderC />
      <Container>
        {/* explor les environs */}
        <Grid container spacing={4}></Grid>
        {/* places nature  */}
        {/* discover experiences */}
        {/* footer infos */}
        {/* copyrights */}
      </Container>
    </Fragment>
  );
}

export default DashboardP;
