import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <Box>
      <img height="400px" width="100%" src={banner} alt="" />
    </Box>
  );
};

export default Banner;
