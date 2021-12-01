import React from "react";
import Box from "@mui/material/Box";

import CarbonOffset from "../components/CarbonOffset";
import Form from "../components/Form";
import Typography from "@mui/material/Typography";

const TravelPage = ({ label }) => {
  return (
    <Box
      component="div"
      color="#3D2CA7"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "50ch" },
        height: "500px",
        width: "100%",
        backgroundColor: "#E5F0FC",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        textColor: "blue",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          display: { xs: "none", sm: "block", xl: "inline" },
          width: "100%",
          flexGrow: 1,
        }}
      >
        {label}

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block", xl: "inline" },
            width: "100%",
            height: 5,
            flexGrow: 1,
            backgroundColor: "#3D2CA7",
          }}
        ></Typography>
      </Typography>
      <Form label={label} />
      <CarbonOffset />
    </Box>
  );
};

export default TravelPage;
