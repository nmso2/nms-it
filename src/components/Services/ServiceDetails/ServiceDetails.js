import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useService from "../../../hooks/useService";
import Header from "../../Shared/Header/Header";

const ServiceDetails = () => {
  const params = useParams();
  const { service, setService, isLoading } = useService(params.serviceId);
  const { name, price, details, image } = service;
  console.log(service);
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 3 }}>
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
      </Container>
    </Box>
  );
};

export default ServiceDetails;
