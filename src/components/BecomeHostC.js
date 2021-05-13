import { CardActionArea, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  gridcontainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
    },
  },
  image2: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  image1: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imagegrid: {
    minWidth: "100%",
    minHeight: "100%",
    position: "relative",
  },
  titles: {
    backgroundColor: "none",
    alignItems: "flex-start",
    padding: 64,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#000",
      padding: 8,
    },
  },
}));
function BecomeHostC() {
  const classes = useStyles();
  return (
    <div
      style={{
        paddingLeft: 64,
        paddingRight: 64,
        marginTop: 32,
        marginBottom: 32,
      }}>
      <CardActionArea
        style={{
          borderRadius: 8,
          overflow: "hidden",
          position: "relative",
        }}>
        <img
          alt=""
          className={classes.image1}
          src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1200"
          style={{ width: "100%", objectFit: "contain" }}
        />
        <Grid className={classes.gridcontainer} container spacing={0}>
          <Grid className={classes.titles} item xs={12} md={6} sm={12}>
            <p className="becomehost_title">Become a Host</p>
            <p className="becomehost_subtitle">
              Earn extra income and unlock new opportunities by sharing your
              space.
            </p>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <img
              alt=""
              className={classes.image2}
              src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1200"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </CardActionArea>
    </div>
  );
}

export default BecomeHostC;
