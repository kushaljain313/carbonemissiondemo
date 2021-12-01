import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = ({ children }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{ backgroundColor: "#3D2CA7", textTransform: "none" }}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
