import { CardActionArea, Grid, CardContent } from "@material-ui/core";
import React from "react";

function PlaceNatureCardC({ title, image, itemsize, subtitle }) {
  return (
    <Grid item xs={12} md={itemsize} sm={6}>
      <CardActionArea
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 8,
          alignItems: "center",
          overflow: "hidden",
        }}>
        <img
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src={image}
          alt={title}
        />
        <CardContent>
          <strong className="card_title">{title}</strong>
          <p className="card_subtitle">{subtitle}</p>
        </CardContent>
      </CardActionArea>
    </Grid>
  );
}

export default PlaceNatureCardC;
