import {
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { FavoriteBorder } from "@material-ui/icons";
import "../styles/searchcard.css";

const useStyles = makeStyles((theme) => ({
  host_image: {
    width: 250,
    height: 180,
    objectFit: "cover",
    borderRadius: "inherit",
    [theme.breakpoints.down("sm")]: {
      width: 180,
      height: 180,
    },
  },
}));
function SearchCardItemC({ host }) {
  const classes = useStyles();
  return (
    <CardActionArea
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 8,
        alingItems: "center",
        position: "relative",
      }}>
      {/* left */}
      <img
        className={classes.host_image}
        src={host.picture_url}
        alt={host.name}
      />
      {/* right */}
      <CardContent
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: 180,
        }}>
        {/* top */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}>
          <div className="search_card_right_top_text">
            <p>
              {host.room_type} in {host.city}
            </p>
            <strong>{host.name}</strong>
            <Divider
              style={{
                color: "gray",
                width: 32,
                height: 2,
                marginTop: 16,
                marginBottom: 8,
              }}
            />
            {/* rates */}
            <small>
              <strong>⭐{host.review_scores_rating / 20}</strong> (
              {host.number_of_reviews} reviews)
            </small>
          </div>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
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

export default SearchCardItemC;
