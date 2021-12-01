import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputField from "./InputField";
import ButtonComponent from "./ButtonComponent";

const Form = ({ label }) => {
  const TravelField = () => {
    return (
      <React.Fragment>
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            alignSelf: "flex-start",
            m: 1,
          }}
        >
          Calculate Your Flight's Carbon Emission
        </Typography>

        <InputField
          type="time"
          size="small"
          label="Departure"
          sx={{ width: "75%" }}
        />

        <InputField type="text" size="small" label="Destination" />

        <InputField type="number" size="small" label="Number of Passengers" />
        <FormGroup
          aria-label="position"
          row
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="One Way"
            labelPlacement="start"
          />

          <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Economy"
            labelPlacement="start"
          />
          {/* <FormControlLabel value="end" label="Start" labelPlacement="end" /> */}
        </FormGroup>
      </React.Fragment>
    );
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
        height: "400px",
        width: "50%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        border: 1,
        borderColor: "blue",
      }}
      noValidate
      autoComplete="off"
    >
      {/* <InputField
        type="time"
        size="small"
        label="Departure"
        sx={{ width: "75%" }}
      />

      <InputField type="text" size="small" label="Destination" />

      <InputField type="number" size="small" label="Number of Passengers" />
      <FormGroup
        aria-label="position"
        row
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="One Way"
          labelPlacement="start"
        />

        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Economy"
          labelPlacement="start"
        />
      </FormGroup> */}

      {label === "Travel" && TravelField()}
      <ButtonComponent> Calculate and add to the cart </ButtonComponent>
    </Box>
  );
};

export default Form;
