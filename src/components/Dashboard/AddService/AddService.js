import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddService = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("details", details);
    formData.append("price", price);
    formData.append("image", image);

    fetch("https://nms-it.herokuapp.com/services", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Service added successfully!");
          e.target.value = "";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2 className="text-4xl">Add Service</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%", py: "5px" }}
          label="Name"
          required
          onChange={(e) => setName(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%", py: "5px" }}
          label="Service Details"
          type="text"
          required
          onChange={(e) => setDetails(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%", py: "5px" }}
          label="Price"
          type="number"
          required
          onChange={(e) => setPrice(e.target.value)}
          variant="standard"
        />
        <br />
        <Input
          sx={{ width: "50%", py: "15px" }}
          type="file"
          accept="image/*"
          required
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />

        <Button
          variant="contained"
          style={{ backgroundColor: "#b0c2d4", marginTop: 15, color: "black" }}
          type="submit"
        >
          Add Service
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddService;
