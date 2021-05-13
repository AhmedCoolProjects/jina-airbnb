import { CardActionArea, CardContent, Grid } from "@material-ui/core";
import React from "react";
import "../styles/expenvcardc.css";

function ExpEnvCardC({ city, hours, image }) {
  return (
    <Grid item sm={6} md={3} xs={12}>
      <CardActionArea
        style={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 8,
          alingItems: "center",
          justifyContent: "space-between",
        }}>
        <img
          style={{
            width: 80,
            height: 80,
            borderRadius: "inherit",
          }}
          src={image}
          alt={city}
        />
        <CardContent
          style={{
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
          <strong className="card_title">{city}</strong>
          {hours > 1 ? (
            <p className="card_subtitle">{hours} hours drive</p>
          ) : (
            <p className="card_subtitle">{hours * 60} minutes drive</p>
          )}
        </CardContent>
      </CardActionArea>
    </Grid>
  );
}

export default ExpEnvCardC;
