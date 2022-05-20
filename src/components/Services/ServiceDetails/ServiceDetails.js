import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchService } from "../../../redux/slices/servicesSlice";
import Header from "../../Shared/Header/Header";

const ServiceDetails = () => {
  const params = useParams();

  const { service, isLoading } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchService(params.serviceId));
  }, [dispatch, params.serviceId]);
  const { name, price, details, image } = service;

  return (
    <Box>
      <Header />
      <Container sx={{ mt: 3 }}>
        {isLoading ? (
          <Typography>Please Wait...</Typography>
        ) : (
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={`data:image/png;base64,${image}`}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {details}
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                Price: {price}
              </Typography>

              <Button variant="contained" sx={{ my: 1 }}>
                Order Now
              </Button>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ServiceDetails;
