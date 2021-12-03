import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import data from "../../data/ChartData";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
Chart.register(CategoryScale);

const EmissionBarChart = ({height}) => {
  // const dataBar = {
  //   datasets: [
  //     {
  //       label: "Median",
  //       data: [
  //         { x: 65, y: "Renderson, Brand" },
  //         { x: 65, y: "jim alex" },
  //       ],
  //       type: "line",
  //       pointHoverRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  //       borderColor: "#F5B300",
  //       fill: false,
  //       strokeColor: "rgba(220,220,220,1)",
  //       pointColor: "rgba(220,220,220,1)",
  //       pointStrokeColor: "#fff",
  //       pointHighlightFill: "#fff",
  //       pointHighlightStroke: "rgba(220,220,220,1)",
  //     },
  //     {
  //       label: "Total Time-spent (mins)",
  //       data: [75, 53, 75, 65, 100, 70, 60, 80, 50, 40, 30],

  //       backgroundColor: "#0254E7",
  //     },
  //   ],
  //   labels: [
  //     "Renderson, Brand",
  //     "ADRIANNA THOMAS",
  //     "VIVIAN VANGEN",
  //     "owen miller",
  //     "brady hogan",
  //     "caleb golden",
  //     "William anderson",
  //     "Anthony zurek",
  //     "Alexa hogan",
  //     "jim alex",
  //   ],
  // };

  // const newOptions = {
  //   barPercentage: 1.0,
  //   categoryPercentage: 1.0,
  //   // plugins: {
  //   //   datalabels: {
  //   //      display: true,
  //   //      color: 'black'
  //   //   }
  //   //  },
  //   legend: {
  //     display: true,
  //   },
  //   scales: {
  //     xAxes: [
  //       {
  //         position: "top",
  //       },
  //     ],
  //     yAxes: [
  //       {
  //         barThickness: 1,
  //         scaleLabel: {
  //           display: true,
  //           labelString: "Student name",
  //         },
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  const dataHorBar = {
    datasets: [
      {
        yAxisID: "A",
        label: "",

        data: [
          70, 80, 100, 100, 90, 80, 70, 100, 80, 150, 90, 80, 70, 80, 100, 100,
          90, 80, 70, 100, 80, 150, 90, 80, 70, 80, 100, 100, 90, 80, 70, 100,
          80, 150, 90, 80, 70, 80, 100, 100, 90, 80, 70, 100, 80, 150, 90, 80,
        ],
        pointHoverRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        // type: "line",
        // borderColor: "#F5B300",
        fill: false,
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        // pointRadius: 0,
        // pointStyle: "rect",
        // pointBackgroundColor: "red",
        // pointBorderColor: "red",
        // order: 3
      },
      {
        yAxisID: "B",
        label: "Emission By category",
        data: [
          75, 53, 75, 65, 100, 60, 80, 50, 75, 55, 80, 65, 80, 75, 53, 75, 65,
          100, 60, 80, 50, 75, 55, 80, 65, 80, 75, 53, 75, 65, 100, 60, 80, 50,
          75, 55, 80, 65, 80,
        ],

        backgroundColor: "#0254E7",
      },
    ],
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  };

  const options = {
    barRoundness: 1,
    elements: {
      line: {
        tension: 0,
      },
    },

    tooltips: {
      displayColors: false,
    },
    legend: {
      display: true,
      position: "bottom",
      align: "start",
      lineJoin: "round",
    },
    scales: {
      yAxes: [
        {
          display: true,
          id: "A",
          type: "linear",
          scaleLabel: {
            display: true,
            labelString: "Time-spent(mins)",
            fontStyle: "bold",
          },
          position: "left",
          // stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
        // {
        //   display: true,
        //   id: "B",
        //   type: "linear",
        //   scaleLabel: {
        //     display: true,
        //     labelString: "No of students",
        //   },
        //   position: "right",
        //   // stacked: true,
        //   ticks: {
        //     beginAtZero: true,
        //   },
        // },
      ],
      xAxes: [
        {
          display: true,
          stacked: true,
          barThickness: 0.1,

          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  // console.log("data", data);
  return (
    <div>
      <Bar data={dataHorBar} options={options} width={600} height={height} />

      {/* <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          color: "black",
        }}
      >
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ alignSelf: "flex-start", ml: 1 }}
        >
          Business Travel Business Travel
        </Typography>
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ alignSelf: "flex-start", ml: 1 }}
        >
          2808 kgCo2e
        </Typography>
      </Box> */}

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

      {/* <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ alignSelf: "flex-start", ml: 1 }}
        >
          Total = 850 kgCo
        </Typography>
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ alignSelf: "flex-start", ml: 1 }}
        >
          Total = £500
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ alignSelf: "flex-start", ml: 1 }}
        >
          Total = 850 kgCo
        </Typography>
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ alignSelf: "flex-start", ml: 1 }}
        >
          Total = £500
        </Typography>
      </Box> */}
    </div>
  );
};

export default EmissionBarChart;
