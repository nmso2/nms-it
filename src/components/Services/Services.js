import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Service from "./Service/Service";

const Services = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Typography
        variant="h6"
        sx={{ mb: 3, fontSize: { md: "50px", xs: "30px" }, textAlign: "left" }}
      >
        Our Services
      </Typography>
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((service) => (
          <Grid item xs={12} md={4}>
            <Service />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
