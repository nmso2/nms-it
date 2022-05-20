import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Fade,
  Grid,
  Input,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../../redux/slices/servicesSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ManageServices = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { services, isLoading } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  useEffect(() => {
    setName(selectedService?.name);
    setDetails(selectedService?.details);
    setPrice(selectedService?.price);
    if (!image) {
      fetch(`data:image/png;base64,${selectedService?.image}`)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "File name", { type: "image/png" });
          console.log(file);
          setImage(file);
        });
    }
  }, [image, selectedService]);

  const deleteService = (id) => {
    fetch(`http://localhost:5000/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => dispatch(fetchServices()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("details", details);
    formData.append("price", price);
    formData.append("image", image);

    fetch(`http://localhost:5000/services/${selectedService._id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchServices());
        handleClose();
        if (data.insertedId) {
          e.target.value = "";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Name: {service.name}</Typography>
                    <Typography>Price: {service.price}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ mx: 2 }}
                      onClick={() => {
                        handleOpen();
                        setSelectedService(service);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ mx: 2 }}
                      onClick={() => deleteService(service._id)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { md: 700, xs: 300, sm: 500 },
              bgcolor: "white",
              borderRadius: "10px",
              boxShadow: 24,
              p: 2,
            }}
          >
            <h2 className="text-4xl">Add Service</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                sx={{ py: "5px" }}
                label="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="standard"
              />
              <br />
              <TextField
                fullWidth
                multiline
                sx={{ py: "5px" }}
                label="Service Details"
                type="text"
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                variant="standard"
              />
              <br />
              <TextField
                fullWidth
                sx={{ py: "5px" }}
                label="Price"
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                variant="standard"
              />
              <br />
              <Box
                sx={{
                  width: "120px",
                  marginBottom: "10px",
                }}
              >
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    width="120"
                    height="140"
                    alt=""
                  />
                ) : (
                  <img
                    src={`data:image/png;base64,${selectedService?.image}`}
                    width="120"
                    height="140"
                    alt=""
                  />
                )}
              </Box>

              <label htmlFor="contained-button-file">
                <Input
                  name="image"
                  accept="image/*"
                  onChange={(event) => setImage(event.target.files[0])}
                  id="contained-button-file"
                  type="file"
                />
              </label>
              <br />

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#b0c2d4",
                  marginTop: 15,
                  color: "black",
                }}
                type="submit"
              >
                Update Service
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ManageServices;
