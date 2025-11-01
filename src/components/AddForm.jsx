import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddSharpIcon from "@mui/icons-material/AddSharp";

function AdForm() {
  const [formData, setFormData] = useState({
    description: "",
    features: [""],
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeaturesChange = (e) => {
    const featuresArray = e.target.value.split("\n");
    setFormData({ ...formData, features: featuresArray });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const photosArray = files.map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, photos: [...formData.photos, ...photosArray] });
  };

  const removePhoto = (index) => {
    const newPhotos = [...formData.photos];
    newPhotos.splice(index, 1);
    setFormData({ ...formData, photos: newPhotos });
  };

  return (
    <Box
      component="form"
      sx={{ maxWidth: 600, mx: "auto", mt: 4, p: { xs: 2, sm: 3, md: 4 } }}
    >
      <Typography variant="subtitle1" gutterBottom>
        Description
      </Typography>
      <TextField
        name="description"
        multiline
        rows={3}
        fullWidth
        placeholder="Ad description"
        value={formData.description}
        onChange={handleChange}
        variant="outlined"
      />
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 4 }}>
        Feature{" "}
        <Box component={"span"} sx={{ color: "#747272c9" }}>
          (optional)
        </Box>
      </Typography>
      <TextField
        multiline
        rows={3}
        fullWidth
        placeholder="Write a feature in each line eg. Feature 1, Feature 2"
        value={formData.features.join("\n")}
        onChange={handleFeaturesChange}
        variant="outlined"
      />
      <Typography variant="subtitle1" sx={{ mt: 4, mb: 3 }}>
        Upload Photos
      </Typography>
      <Grid
        container
        spacing={2}
        variant="outlined"
        sx={{ border: "1px solid #afababc9", borderRadius: 1.2, p: 2 }}
      >
        {formData.photos.map((photo, idx) => (
          <Grid item xs={4} sm={3} md={2} key={idx}>
            <Paper
              elevation={1}
              sx={{
                position: "relative",
                width: 100,
                height: 100,
                backgroundColor: "#f5f5f5ef",
                py: 1.5,
              }}
            >
              <Box
                component={"img"}
                src={photo}
                alt={`upload-${idx}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <IconButton
                size="small"
                onClick={() => removePhoto(idx)}
                sx={{
                  position: "absolute",
                  top: -12,
                  right: -12,
                  backgroundColor: "rgba(255,0,0,0.8)",
                  color: "white",
                  "&:hover": { backgroundColor: "red" },
                }}
              >
                <CloseIcon sx={{ fontSize: "15px" }} />
              </IconButton>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={4} sm={3} md={2}>
          <Button
            component="label"
            sx={{
              width: 100,
              height: 100,
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5ef",
            }}
          >
            <Box
              component={"span"}
              sx={{
                border: "3px solid #747272c9",
                borderRadius: 5,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <AddSharpIcon fontSize="medium" style={{ color: "#747272c9" }} />
            </Box>
            <Box
              component={"input"}
              type="file"
              hidden
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdForm;
