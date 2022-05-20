import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import useNewServices from "../../../hooks/useNewServices";
import Service from "../../Services/Service/Service";
import Services from "../../Services/Services";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";

const Home = () => {
  const { newServices, setNewServices, isLoading } = useNewServices();
  console.log(newServices);
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
          {newServices.map((service) => (
            <Grid item xs={12} md={4} key={service._id}>
              <Service service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
