import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <Typography
        sx={{
          width: "100%",
          height: "350px",
          border: "1px solid red",
        }}
      >
        This is homepage banner!
      </Typography>
    </Box>
  );
};

export default Banner;
