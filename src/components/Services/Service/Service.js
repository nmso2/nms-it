import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, details, image } = service;
  return (
    <Card sx={{ maxWidth: 310 }}>
      <CardMedia
        component="img"
        height="140"
        image={`data:image/png;base64,${image}`}
      />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
          Price: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Link to={`/services/${_id}`} style={{ textDecoration: "none" }}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Service;
