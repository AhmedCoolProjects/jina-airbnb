import React from "react";
import { ReactBingmaps } from "react-bingmaps";
import { toMAD } from "../backend/dataFromWebApp/data";
import { map_api_key_bing } from "../backend/hideData/mapApi";

function BMapC({ infosHost }) {
  const infoboxesWithPushPins = [];
  infosHost.forEach((host) => {
    infoboxesWithPushPins.push({
      location: [host.latitude, host.longitude],
      addHandler: "mouseover", //on mouseover the pushpin, infobox shown
      infoboxOption: {
        title: String(host.price * toMAD) + " MAD/night",
        description: host.room_type,
      },
      pushPinOption: {
        title: String(host.price * toMAD) + " MAD",
        description: host.room_type,
      },
      infoboxAddHandler: { type: "click" },
      pushPinAddHandler: { type: "click" },
    });
  });

  return (
    <ReactBingmaps
      bingmapKey={map_api_key_bing}
      center={[infosHost[0].latitude, infosHost[0].longitude]}
      zoom={4}
      className="bing_map"
      supportedMapTypes={["road"]}
      mapTypeId={"road"}
      infoboxesWithPushPins={infoboxesWithPushPins}
    />
  );
}

export default BMapC;
