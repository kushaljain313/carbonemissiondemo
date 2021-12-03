import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DashBoardGridLayout = ({ label, width, children }) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        height: 550,
        width: { width },
        mx: 2,
      }}
    >
      <Typography
        variant="p"
        noWrap
        component="div"
        sx={{
          flexGrow: 1,
          bgcolor: "#3D2CA7",
          height: "40px",
          display: "grid",
          alignContent: "center",
        }}
      >
        {label}
      </Typography>

      {children}
    </Box>
  );
};

export default DashBoardGridLayout;
