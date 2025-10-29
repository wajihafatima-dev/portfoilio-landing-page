"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { Button } from "./ui/Button";

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "black",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Box component={'img'}
          src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          sx={{width:"100%",height:"100%" ,objectFit:"cover"}}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5))",
          }}
        />
      </Box>
      <motion.div
        style={{
          position: "absolute",
          top: 80,
          left: 40,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(16, 185, 129, 0.2)",
          filter: "blur(30px)",
        }}
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: 80,
          right: 80,
          width: 130,
          height: 130,
          borderRadius: "50%",
          background: "rgba(59,130,246,0.2)",
          filter: "blur(30px)",
        }}
        animate={{ y: [0, -40, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <Container
        sx={{ position: "relative", zIndex: 1, py: { xs: 10, md: 20 } }}
      >
        <Box sx={{ maxWidth: 700 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{ color: "primary.main", mb: 2, fontWeight: 500 }}
              variant="subtitle1"
            >
              Welcome to my portfolio
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
                fontSize: { xs: "2rem", md: "3.5rem" },
              }}
            >
              Hi, I&apos;m{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Your Name
              </Box>
              ,<br />
              Frontend Developer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.2rem",
                mb: 5,
                maxWidth: 600,
              }}
            >
              I build responsive & modern web applications with clean code and
              beautiful designs. Transforming ideas into digital reality.
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-emerald-600 hover:bg-emerald-700"
                size="large"
                endIcon={<ArrowRight size={20} />}
              >
                View Portfolio
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#f0f0f0b2",
                    color: "#111",
                  },
                }}
                size="large"
              >
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Box
          sx={{
            width: 24,
            height: 40,
            border: "2px solid rgba(255,255,255,0.5)",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            p: "6px",
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 12,
              bgcolor: "#fff",
              borderRadius: "9999px",
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}
