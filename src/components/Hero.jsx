"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import { Box, Typography, Container, Stack } from "@mui/material";
import { Button } from "./ui/Button";
import { HERO_DATA } from "../constent/Constent";

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const { id, backgroundImage, overlay, title, heading, description, buttons } =
    HERO_DATA;

  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Box
          component="img"
          src={backgroundImage}
          alt="Background"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: overlay }} />
      </Box>

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
              {title}
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
              {heading.intro}{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                {heading.name}
              </Box>
              ,<br />
              {heading.role}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: { xs: "0.9rem", md: "1.2rem" },
                mb: 5,
                maxWidth: 600,
              }}
            >
              {description}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              gap={2}
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
            >
              {buttons.map((btn, i) => {
                if (btn.label === "View Portfolio") {
                  return (
                    <Button
                      key={i}
                      onClick={() => scrollToSection(btn.sectionId)}
                      variant="contained"
                      size="large"
                      endIcon={<ArrowRight size={20} />}
                      sx={{
                        backgroundColor: "#059669",
                        "&:hover": {
                          backgroundColor: "#047857",
                          transform: "translateY(-2px)",
                          transition: "all 0.3s ease",
                        },
                        fontWeight: 600,
                        borderRadius: "999px",
                        px: { xs: 2, sm: 3, md: 4 },
                        fontSize: { xs: 13, sm: 14 },
                      }}
                    >
                      {btn.label}
                    </Button>
                  );
                } else if (btn.label === "My Resume") {
                  return (
                    <Button
                      key={i}
                      variant="outlined"
                      href={btn.href}
                      download={btn.download}
                      endIcon={<SaveAltOutlinedIcon />}
                      size="large"
                      sx={(theme) => ({
                        color: theme.palette.primary.contrastText,
                        border: "2px solid transparent",
                        px: { xs: 2, sm: 3, md: 4 },
                        fontSize: { xs: 13, sm: 14 },
                        borderRadius: "999px",
                        backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                        backgroundSize: "200% auto",
                        boxShadow: `0 4px 12px ${theme.palette.primary.main}66`,
                        transition: "all 0.4s ease-in-out",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        "&:hover": {
                          backgroundPosition: "right center",
                          transform: "translateY(-2px) scale(1.04)",
                          boxShadow: `0 6px 18px ${theme.palette.primary.light}99`,
                          color: theme.palette.secondary.contrastText,
                          borderColor: "#fff",
                          backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                        },
                      })}
                    >
                      {btn.label}
                    </Button>
                  );
                }

                return null;
              })}
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
