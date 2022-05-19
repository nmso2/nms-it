import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Service from "../../Services/Service/Service";
import Services from "../../Services/Services";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Container sx={{ mt: 3 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontSize: { md: "50px", xs: "30px" },
            textAlign: "left",
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((service) => (
            <Grid item xs={12} md={4} key={service}>
              <Service id={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Typography>This is home!</Typography>
    </Box>
  );
};

export default Home;
