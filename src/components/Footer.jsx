import React from "react";
import { Box, Typography, Stack, IconButton, Divider, Button } from "@mui/material";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1f2937", // dark gray
        color: "#d1d5db", // light gray
        py: 3,
        px: { xs: 4, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 6,
          mb: 6,
        }}
      >
        {/* Brand / About */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#10b981",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              YN
            </Box>
            <Typography variant="h6" fontWeight="bold">
              Your Name
            </Typography>
          </Box>
          <Typography variant="body2" color="gray.400">
            Building beautiful web experiences with modern technologies and clean code.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography variant="h6" color="white" mb={2}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            {["Home", "About", "Portfolio", "Contact"].map((link) => (
              <Button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                sx={{
                  textTransform: "none",
                  color: "#d1d5db",
                  justifyContent: "flex-start",
                  "&:hover": { color: "#10b981" },
                }}
              >
                {link}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* Social Links */}
        <Box>
          <Typography variant="h6" color="white" mb={2}>
            Follow Me
          </Typography>
          <Stack direction="row" spacing={2}>
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <IconButton
                key={i}
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#374151",
                  color: "#d1d5db",
                  "&:hover": { bgcolor: "#10b981", color: "#fff", transform: "scale(1.1)" },
                  transition: "0.3s",
                }}
              >
                <Icon size={20} />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "gray.700", mb: 2 }} />

      {/* Footer Bottom */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2" color="gray.400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="gray.400">
            Made with
          </Typography>
          <Heart size={16} color="#ef4444" />
        </Stack>
      </Stack>
    </Box>
  );
}
