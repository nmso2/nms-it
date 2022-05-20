import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useServices from "../../hooks/useServices";
import Header from "../Shared/Header/Header";
import Service from "./Service/Service";

const Services = () => {
  const { count, services, setServices, isLoading } = useServices();
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <Service service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
