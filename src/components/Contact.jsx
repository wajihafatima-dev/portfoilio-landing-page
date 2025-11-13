"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Toaster from "../components/ui/Toaster";
import { CONTACT_DATA } from "../constent/Constent";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        open: true,
        message: "Please fill out all fields!",
        severity: "warning",
      });
      return;
    }

    setToast({
      open: true,
      message: "Message sent successfully! I'll get back to you soon.",
      severity: "success",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      {/* Header */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 6, md: 10 },
          px: { xs: 6, md: 4 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant={isSmall ? "h6" : "h5"}
            color="primary"
            fontWeight="bold"
            gutterBottom
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out! I'm always open to discussing new opportunities.
          </Typography>
        </motion.div>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        justifyContent="center"
        sx={{
          flexWrap: "wrap",
          mx: "auto",
          pb: 2,
        }}
      >
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact Information
            </Typography>

            <Stack spacing={3} mt={3}>
              {/* Email */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "rgba(16,185,129,0.1)", color: "#059669" }}>
                  <Mail size={20} />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {CONTACT_DATA.email}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "rgba(16,185,129,0.1)", color: "#059669" }}>
                  <Phone size={20} />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {CONTACT_DATA.phone}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "rgba(16,185,129,0.1)", color: "#059669" }}>
                  <MapPin size={20} />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Location
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {CONTACT_DATA.location}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            <Box mt={5}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Follow Me
              </Typography>
              <Stack direction="row" spacing={2}>
                {CONTACT_DATA.socialLinks.map((social, i) => (
                  <Box
                    key={i}
                    component="a"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      bgcolor: "grey.100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#059669",
                        color: "#fff",
                      },
                    }}
                  >
                    <social.icon size={20} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: { xs: 3, md: 0 } }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={6}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#059669",
                  "&:hover": { bgcolor: "#047857" },
                  textTransform: "none",
                  fontWeight: 500,
                  display: "flex",
                  gap: 1,
                }}
              >
                Send Message
                <Send size={18} />
              </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      <Toaster
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        onClose={() => setToast({ ...toast, open: false })}
      />
    </Box>
  );
}
