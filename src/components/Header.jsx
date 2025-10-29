"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { Button } from "./ui/Button";
import { Drawer } from "./ui/Drawer";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        bgcolor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "primary.main",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "#fff", fontWeight: 600 }}>YN</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {["home", "about", "portfolio", "contact"].map((item) => (
            <Typography
              key={item}
              onClick={() => scrollToSection(item)}
              sx={{
                color: "#374151",
                fontWeight: 500,
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Typography>
          ))}
        </Box>

        {/* CTA Button */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Hire Me
          </Button>
        </Box>

        {/* Mobile Menu Toggle */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#374151" }}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="center"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: "75%",
            maxWidth: 280,
            bgcolor: "#fff",
            p: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setIsMenuOpen(false)}>
            <X size={22} />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {["home", "about", "portfolio", "contact"].map((item) => (
            <Typography
              key={item}
              onClick={() => scrollToSection(item)}
              sx={{
                py: 1,
                color: "#374151",
                fontWeight: 500,
                cursor: "pointer",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Typography>
          ))}

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-emerald-600 hover:bg-emerald-700 w-full"
          >
            Hire Me
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
