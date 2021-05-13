import { Grid, Divider, makeStyles } from "@material-ui/core";
import React from "react";
import { footerdata } from "../backend/dataFromWebApp/data";

const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%",
    hieght: 4,
    color: "grey",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
function FooterInfoC() {
  const classes = useStyles();
  return (
    <Grid
      style={{
        width: "100%",
        backgroundColor: "#ddd",
        padding: "46px 64px",
        margin: 0,
        marginTop: 32,
      }}
      container
      spacing={3}>
      {footerdata.map((item, index) => (
        <Grid key={item[0]} item xs={12} md={3} sm={12}>
          <p style={{ fontSize: "1rem", fontWeight: "600" }}>{item[0]}</p>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              alingItems: "left",
              justifyContent: "center",
            }}>
            {item.slice(1).map((link) => (
              <p className="footerinfo_links" key={link}>
                {link}
              </p>
            ))}
          </div>
          {index === footerdata.length - 1 ? null : (
            <Divider className={classes.divider} />
          )}
        </Grid>
      ))}
    </Grid>
  );
}

export default FooterInfoC;
