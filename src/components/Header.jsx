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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "12px",
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              boxShadow: (theme) =>
                `0 4px 10px ${theme.palette.primary.main}66`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: 0.5,
              }}
            >
              W
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: (theme) =>
                `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Wajiha<span style={{ fontWeight: 400 }}>Dev</span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {["home", "about", "portfolio", "services", "contact"].map((item) => (
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
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Hire Me
          </Button>
        </Box>
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#374151" }}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </IconButton>
      </Box>
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
