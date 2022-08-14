import { Grid } from "@material-ui/core";
import React from "react";
import SearchCardItemC from "../components/SearchCardItemC";
import SearchSmallC from "../components/SearchSmallC";
import dataSpain from "../backend/data/dataSpain.json";
import dataSeattle from "../backend/data/dataUs.json";
import dataBoston from "../backend/data/dataUs2.json";
import "../styles/searchp.css";
import BMapC from "../components/BMapC";

const allData = [
  {
    id: 0,
    city: "Barcelona",
    data: dataSpain,
  },
  {
    id: 1,
    city: "Seattle",
    data: dataSeattle,
  },
  {
    id: 2,
    city: "Boston",
    data: dataBoston,
  },
];
function SearchP() {
  return (
    <Grid container spacing={0}>
      <Grid className="searchp_left" item xs={12} sm={12} md={7}>
        {allData.map((alldata) => (
          <div style={{ marginTop: 32, marginBottom: 16 }} key={alldata.id}>
            <p
              style={{
                fontSize: "1.9rem",
                fontWeight: "600",
                marginBottom: 8,
              }}>
              {alldata.city}
            </p>
            <Grid container spacing={2}>
              {alldata.data.slice(0, 3).map((item) => (
                <Grid key={item.id} item sx={12} sm={12} md={4}>
                  <SearchSmallC host={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
        {/* second */}
        <p style={{ fontSize: "1.7rem", fontWeight: "600" }}>
          Explore all 100+ stays
        </p>

        {allData.map((alldata) => (
          <div key={alldata.id}>
            <Grid style={{ margin: 0, padding: 0 }} container spacing={2}>
              {alldata.data.slice(0, 3).map((item) => (
                <Grid key={item.id} item sx={12} sm={12} md={12}>
                  <SearchCardItemC host={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Grid>
      <Grid
        style={{
          backgroundColor: "#ddd",
          height: "calc(100vh - 80px)",
          overflow: "hidden",
          position: "relative",
        }}
        item
        xs={12}
        sm={12}
        md={5}>
        <BMapC infosHost={dataSpain} />
      </Grid>
    </Grid>
  );
}

export default SearchP;
