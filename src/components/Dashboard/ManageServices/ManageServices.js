import React, { useEffect } from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../../redux/slices/servicesSlice";
import deleteService from "../../../redux/slices/servicesSlice";

const ManageServices = () => {
  const { services, isLoading } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const deleteService = (id) => {
    fetch(`http://localhost:5000/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => dispatch(fetchServices()));
  };

  return (
    <Box>
      <Container sx={{ mt: 3 }}>
        {isLoading ? (
          <Typography>Please Wait...</Typography>
        ) : (
          <Grid container spacing={2}>
            {services.map((service) => (
              <Grid xs={12} item key={service._id}>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  <Typography>Name: {service.name}</Typography>
                  <Typography>Price: {service.price}</Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteService(service._id)}
                  >
                    Delete
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ManageServices;
