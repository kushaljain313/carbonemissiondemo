import React from "react";
import { Chart } from "react-google-charts";

import data from "../../data/ChartData";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EmissionPieChart = () => {
  return (
    <div>
      <Chart
        // width={'500px'}
        // height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["", ""],
          ["", 10],
          ["", 2],
          ["", 2],
          ["", 2],
          ["", 7],
          ["", 7],
          ["", 7],
        ]}
        options={{
          title: "",
          colors: [
            "#91E6FF",
            "#58D9FF",
            "#332974",
            "#91E6FF",
            "#3725A8",
            "#3C1DFF",
            "#3725A8",
          ],
        }}
        rootProps={{ "data-testid": "1" }}
      />

      {data.map((item) => {
        return (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              color: "black",
              textAlign: "justify",
            }}
          >
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ textAlign: "justify", width: "250px " }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ align: "justify", ml: 5 }}
            >
              {item.value}
            </Typography>
          </Box>
        );
      })}
    </div>
  );
};

export default EmissionPieChart;
