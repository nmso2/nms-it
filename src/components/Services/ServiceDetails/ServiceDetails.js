import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const params = useParams();
  console.log(params.serviceId);
  return (
    <Box>
      <Typography>This is service details!</Typography>
    </Box>
  );
};

export default ServiceDetails;
