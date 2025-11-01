import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    phone: "",
    backupPhone: "",
    email: "",
    website: "",
    country: "",
    city: "",
    state: "",
    location: "",
    mapLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        minHeight: "100vh",
        justifyContent:"center",
        px: { xs: 0, sm: 6 },
        py: { xs: 15, md: 15 },
      }}
    >
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", flexDirection: "column",width:"100%" ,minWidth:600 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Phone Number
          </Typography>
          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            inputStyle={{ width: "100%", height: "56px" }}
            inputProps={{ name: "phone", required: true }}
          />

          <Typography variant="subtitle2" sx={{ mb: 1, mt: 3 }}>
            Email Address
          </Typography>
          <TextField
            name="email"
            placeholder="Email address"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />

          <Typography variant="subtitle2" sx={{ mb: 1, mt: 3 }}>
            Country
          </Typography>
          <FormControl fullWidth>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                <em>Select...</em>
              </MenuItem>
              <MenuItem value="usa">USA sdas dasda</MenuItem>
              <MenuItem value="pakistan">Pakistan</MenuItem>
              <MenuItem value="uk">UK</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="subtitle2" sx={{ mb: 1, mt: 3 }}>
            Location
          </Typography>
          <TextField
            name="location"
            placeholder="Your location"
            fullWidth
            value={formData.location}
            onChange={handleChange}
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", flexDirection: "column",width:"100%" ,minWidth:600 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Backup Phone Number{" "}
          <Box component="span" sx={{ color: "#999" }}>
            (Optional)
          </Box>
        </Typography>
        <PhoneInput
          country={"us"}
          value={formData.backupPhone}
          onChange={(backupPhone) => setFormData({ ...formData, backupPhone })}
          inputStyle={{ width: "100%", height: "56px" }}
        />

        <Typography variant="subtitle2" sx={{ mb: 1, mt: 3 }}>
          Website Link{" "}
          <Box component="span" sx={{ color: "#999" }}>
            (Optional)
          </Box>
        </Typography>
        <TextField
          name="website"
          placeholder="Your website URL"
          fullWidth
          value={formData.website}
          onChange={handleChange}
        />

        <Grid
          container
          spacing={3}
          sx={{
            margin: 0,
            mt: 3,
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              City
            </Typography>
            <FormControl fullWidth>
              <Select
                name="city"
                value={formData.city}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Select...</em>
                </MenuItem>
                <MenuItem value="lahore">Lahore</MenuItem>
                <MenuItem value="karachi">Karachi</MenuItem>
                <MenuItem value="islamabad">Islamabad</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              State{" "}
              <Box component="span" sx={{ color: "#999" }}>
                (Optional)
              </Box>
            </Typography>
            <FormControl fullWidth>
              <Select
                name="state"
                value={formData.state}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Select...</em>
                </MenuItem>
                <MenuItem value="punjab">Punjab</MenuItem>
                <MenuItem value="sindh">Sindh</MenuItem>
                <MenuItem value="kpk">KPK</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Typography variant="subtitle2" sx={{ mb: 1, mt: 3 }}>
          Map Location{" "}
          <Box component="span" sx={{ color: "#999" }}>
            (Optional)
          </Box>
        </Typography>
        <TextField
          name="mapLocation"
          placeholder="Map location"
          fullWidth
          value={formData.mapLocation}
          onChange={handleChange}
        />
      </Box>
      </Grid>
    </Grid>
  );
}
