import {
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import "../styles/searchcard.css";

function SearchCardItemC({ host }) {
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
        style={{
          width: 250,
          height: 170,
          objectFit: "cover",
          borderRadius: "inherit",
        }}
        src={host.picture_url}
        alt={host.name}
      />
      {/* right */}
      <CardContent
        style={{
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
        {/* top */}
        <div className="search_card_right_top">
          <div className="search_card_right_top_text">
            <p className="search_card_right_top_text_desc">
              {host.room_type} in {host.city}
            </p>
            <p className="search_card_right_top_text_title">{host.name}</p>
            <Divider
              style={{ color: "gray", width: 32, height: 2, marginTop: 16 }}
            />
          </div>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </div>

        {/* body */}
        <div className="search_card_right_body">
          <div className="search_card_right_body_top">
            {/* location */}
            <p>
              {host.street}-{host.city}-{host.country}
            </p>
          </div>
          <div className="search_card_right_body_bottom">
            {/* rates */}
            <p>5.5 ({host.number_of_reviews} reviews)</p>
            {/* price per night */}
            <p>{host.price * 9.5} MAD/night</p>
            <p>minimum nights {host.minimum_nights}</p>
            <p>maximum nights {host.maximum_nights}</p>
          </div>
        </div>
      </CardContent>
    </CardActionArea>
  );
}

export default SearchCardItemC;
