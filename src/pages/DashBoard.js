import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import DashBoardGridLayout from "../layout/DashBoardGridLayout";
import EmissionBarChart from "../components/Charts/EmissionBarChart";
import EmissionPieChart from "../components/Charts/EmissionPieChart";
import EmissionAreaChart from "../components/Charts/EmissionAreaChart";

const DashBoard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#E5F0FC",
        height: 1800,
        marginTop: "80px",
        width: "1100px",
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
          width: "250px",
          display: "grid",
          alignContent: "center",
        }}
      >
        DashBoard
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          width: "1100px",
          height: 1800,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DashBoardGridLayout label="Emission By Category" width="560px">
          <EmissionBarChart />
        </DashBoardGridLayout>

        <DashBoardGridLayout label="Total Emission By Category" width="470px">
          <EmissionPieChart />
        </DashBoardGridLayout>

        <DashBoardGridLayout label="Emission By Scope" width="560px">
          <EmissionBarChart />
        </DashBoardGridLayout>

        <DashBoardGridLayout label="Emission By Suppliers" width="470px" />

        <DashBoardGridLayout
          label="Electricity vs heat Consumption"
          width="560px"
        >
          <EmissionAreaChart />
        </DashBoardGridLayout>

        <DashBoardGridLayout
          label="Commuting Emissions by locations"
          width="470px"
        />
      </Box>
    </Box>
  );
};

export default DashBoard;
