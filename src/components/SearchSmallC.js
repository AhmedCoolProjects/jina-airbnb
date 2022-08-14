import {
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { FavoriteBorder, OpenInNew } from "@material-ui/icons";
import "../styles/searchcard.css";

function SearchSmallC({ host }) {
  return (
    <CardActionArea
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 8,
        alingItems: "center",
        position: "relative",
      }}>
      {/* top */}
      <img
        style={{
          width: "100%",
          height: 200,
          objectFit: "cover",
          borderRadius: "inherit",
        }}
        src={host.picture_url}
        alt={host.name}
      />
      <IconButton
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}>
        <FavoriteBorder />
      </IconButton>
      <IconButton
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}>
        <OpenInNew />
      </IconButton>
      {/* bottom */}
      <CardContent
        style={{
          width: "100%",
          display: "flex",
          padding: 8,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          position: "relative",
          height: 170,
        }}>
        {/* top */}
        <div className="search_card_right_top_text_v">
          <p>
            {host.room_type} in {host.city}
          </p>
          <strong>{host.name}</strong>
          <Divider
            style={{
              color: "gray",
              width: 32,
              height: 2,
              marginTop: 12,
              marginBottom: 8,
            }}
          />
          {/* rates */}
          <small>
            <strong>⭐{host.review_scores_rating / 20}</strong> (
            {host.number_of_reviews} reviews)
          </small>
        </div>
        {/* body */}
        <div className="search_card_right_body_bottom_v">
          <div>
            <small>minimum nights {host.minimum_nights}</small>
            <br />
            <small>maximum nights {host.maximum_nights}</small>
          </div>
          <strong>{host.price * 9.5} MAD/night</strong>
        </div>
      </CardContent>
    </CardActionArea>
  );
}

export default SearchSmallC;
