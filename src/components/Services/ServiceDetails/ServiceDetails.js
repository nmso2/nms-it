import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const ServiceDetails = () => {
  const params = useParams();
  console.log(params.serviceId);
  return (
    <Box>
      <Header />
      <Typography>This is service details!</Typography>
    </Box>
  );
};

export default ServiceDetails;
