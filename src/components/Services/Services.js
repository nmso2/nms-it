import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../Shared/Header/Header";
import Service from "./Service/Service";

const Services = () => {
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((service) => (
            <Grid item xs={12} md={4} key={service}>
              <Service id={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
