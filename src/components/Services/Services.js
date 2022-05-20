import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../redux/slices/servicesSlice";
import Header from "../Shared/Header/Header";
import Service from "./Service/Service";

const Services = () => {
  const { services, isLoading } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Box>
      <Header />
      <Container sx={{ mt: 3 }}>
        {isLoading ? (
          <Typography>Please Wait...</Typography>
        ) : (
          <Grid container spacing={2}>
            {services.map((service) => (
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

export default Services;
