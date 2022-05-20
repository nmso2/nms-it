import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import useService from "../../../hooks/useService";
import Header from "../../Shared/Header/Header";

const ServiceDetails = () => {
  const params = useParams();
  const { service, setService, isLoading } = useService(params.serviceId);
  console.log(service);
  return (
    <Box>
      <Header />
      <Typography>This is service details!</Typography>
    </Box>
  );
};

export default ServiceDetails;
