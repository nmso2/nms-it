import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardHome = () => {
  return (
    <Box>
      <Typography
        color="error"
        sx={{ textAlignment: "center", fontSize: "36px" }}
      >
        Wellcome to Dashboard!
      </Typography>
    </Box>
  );
};

export default DashboardHome;
