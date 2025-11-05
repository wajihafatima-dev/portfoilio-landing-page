"use client";
import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { Linkedin, Heart, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111827", // Deep dark background
        color: "#d1d5db",
        py: 6,
        px: { xs: 4, md: 10 },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 6,
          mb: 6,
          alignItems: "start",
        }}
      >
        {/* Brand Section */}
        <Box>
          <Typography
            variant="h5"
            color="#10b981"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Wajiha<span style={{ color: "#d1d5db" }}>Dev</span>
          </Typography>
          <Typography variant="body2" color="grey.400" mb={2}>
            Frontend Developer crafting modern, responsive & interactive web
            experiences.
          </Typography>
          <Typography
            variant="body2"
            color="grey.500"
            sx={{ fontSize: "0.85rem" }}
          >
            Karachi, Pakistan
          </Typography>
        </Box>
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
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  "&:hover": { color: "#10b981", pl: 0 },
                  transition: "0.3s ease",
                }}
              >
                {link}
              </Button>
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6" color="white" mb={2}>
            Follow Me
          </Typography>
          <Stack direction="row" spacing={2}>
            {[
              {
                icon: <Linkedin size={20} />,
                link: "https://www.linkedin.com/in/wajiha-fatima-b42497346",
              },
              { icon: <Github size={20} />, link: "#" },
            ].map((item, i) => (
              <IconButton
                key={i}
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#1f2937",
                  color: "#d1d5db",
                  "&:hover": {
                    bgcolor: "#10b981",
                    color: "#fff",
                    transform: "scale(1.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "grey.800", mb: 3 }} />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="grey.400">
            Made with
          </Typography>
          <Heart size={16} color="#ef4444" />
          <Typography variant="body2" color="grey.400">
            by Wajiha Fatima
          </Typography>
        </Stack>

        <Typography variant="body2" sx={{pl:{xs:2,md:0}}} color="grey.600">
          © {new Date().getFullYear()} WajihaDev. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
}
