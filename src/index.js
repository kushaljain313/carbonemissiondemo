import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ProfileTabs from "./components/ProfileTab";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

import Box from "@mui/material/Box";

ReactDOM.render(
  <React.StrictMode>
    <Box
      sx={{
        display: "flex",
        // flexDirection: "row",
        // flexWrap: "nowrap",
        // justifyContent: "flex-start",
      }}
    >
      {" "}
      <ProfileTabs />
      <PrimarySearchAppBar />
    </Box>
  </React.StrictMode>,
  document.getElementById("root")
);
