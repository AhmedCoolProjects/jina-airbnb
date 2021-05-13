import {
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
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
          objectFit: "contain",
          borderRadius: "inherit",
        }}
        src={host.picture_url}
        alt={host.name}
      />
      {/* bottom */}
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
        <div className="search_card_right_top_v">
          <div className="search_card_right_top_text_v">
            <p className="search_card_right_top_text_desc_v">
              {host.room_type} in {host.city}
            </p>
            <p className="search_card_right_top_text_title_v">{host.name}</p>
            <Divider
              style={{ color: "gray", width: 32, height: 2, marginTop: 16 }}
            />
          </div>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </div>

        {/* body */}
        <div className="search_card_right_body_v">
          <div className="search_card_right_body_top_v">
            {/* location */}
            <p>
              {host.street}-{host.city}-{host.country}
            </p>
          </div>
          <div className="search_card_right_body_bottom_v">
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

export default SearchSmallC;
