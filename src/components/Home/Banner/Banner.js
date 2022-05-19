import React from "react";
import Grid from "@mui/material/Grid";
import banner from "../../../assets/banner.jpg";
import { Typography, Button, Container } from "@mui/material";
import Box from "@mui/material/Box";

const bannerBg = {
  background: `url(${banner})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container
      style={{ ...bannerBg, backgroundPosition: "center" }}
      sx={{ flexGrow: 1, marginTop: 2 }}
    >
      <Grid container spacing={2}>
        <Grid item sx={{ ...verticalCenter, textAlign: "left" }} xs={12} md={6}>
          <Box>
            <Typography variant="h3" sx={{ color: "white" }}>
              Your Dream Project <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 13, fontWeight: 300, color: "white" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              asperiores velit illum enim incidunt doloremque vitae impedit at
              accusantium tenetur.
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "rgba(98, 157, 216, 0.81)" }}
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
