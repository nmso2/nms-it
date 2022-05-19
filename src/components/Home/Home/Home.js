import { Box, Typography } from "@mui/material";
import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <Box>
      <Banner />
      <Services />
      <Typography>This is home!</Typography>
    </Box>
  );
};

export default Home;
