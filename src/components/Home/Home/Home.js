import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewServices } from "../../../redux/slices/servicesSlice";
import Service from "../../Services/Service/Service";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";

const Home = () => {
  const { newServices, isLoading } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewServices());
  }, [dispatch]);

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
        {isLoading ? (
          <Typography>Please Wait...</Typography>
        ) : (
          <Grid container spacing={2}>
            {newServices.map((service) => (
              <Grid item xs={12} md={4} key={service._id}>
                <Service service={service} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Home;
