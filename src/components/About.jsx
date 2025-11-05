"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Card } from "./ui/Card";
import { ABOUT_DATA } from "../constent/Constent";

export default function About() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box id="about" sx={{ py: { xs: 4, md: 10 }, px: { xs: 2, md: 4 } }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant={isSmall ? "h6" : "h5"}
          align="center"
          sx={{
            color: "#059669",
            mb: 1,
            fontWeight: "bold",
          }}
        >
          About Me
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          sx={{
            maxWidth: "650px",
            mx: "auto",
            mb: 4,
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          I’m a passionate frontend developer who loves transforming ideas into
          visually appealing and fully responsive web experiences. With a strong
          eye for detail and a commitment to clean, efficient code with solutions & functionality.
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={{ xs: 1, md: 4 }}
        justifyContent="center"
        sx={{
          flexWrap: "wrap",
          mx: "auto",
          maxWidth: "1000px",
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h6"
            sx={{ pt: 2, mb: 3, fontWeight: 600 }}
            color="text.primary"
          >
            Technical Skills
          </Typography>
          {ABOUT_DATA.skills.map((skill, index) => (
            <Box key={skill.name} sx={{ mb: 2.5 }}>
              <Box display="flex" justifyContent="space-between" mb={0.5}>
                <Typography fontSize="0.95rem">{skill.name}</Typography>
                <Typography fontSize="0.9rem" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Box>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#e5e7eb",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: skill.color,
                    },
                  }}
                />
              </motion.div>
            </Box>
          ))}
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            px: { xs: 0, sm: 0 },
            mb: { xs: 2, sm: 0 },
            pt: { xs: 0, sm: 0, md: 10 },
          }}
        >
          {ABOUT_DATA.skills2.map((skill, index) => (
            <Box key={skill.name} sx={{ mb: 2.5 }}>
              <Box display="flex" justifyContent="space-between" mb={0.5}>
                <Typography fontSize="0.95rem">{skill.name}</Typography>
                <Typography fontSize="0.9rem" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Box>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#e5e7eb",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: skill.color,
                    },
                  }}
                />
              </motion.div>
            </Box>
          ))}
        </Grid>
        <Container xs={12} sm={6}>
          <Typography
            variant="h6"
            sx={{ mb: 3, fontWeight: 600 }}
            color="text.primary"
          >
            What I Do
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {ABOUT_DATA.tools.map((tool, index) => (
              <Grid item xs={12} key={tool.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      p: 3,
                      border: "1px solid #e5e7eb",
                      borderRadius: 2,
                      textAlign: "center",
                      maxWidth: { xs: 280, md: 280 },
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                      },
                    }}
                  >
                    <tool.icon size={28} color="#059669" />
                    <Typography
                      variant="subtitle1"
                      sx={{ mt: 1.5, fontWeight: 500 }}
                    >
                      {tool.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5, fontSize: "0.85rem" }}
                    >
                      {tool.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
}
