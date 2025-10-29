"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Zap } from "lucide-react";
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  Grid,
  Paper,
} from "@mui/material";

const skills = [
  { name: "HTML", level: 95, color: "#f97316" },
  { name: "CSS", level: 90, color: "#3b82f6" },
  { name: "JavaScript", level: 88, color: "#facc15" },
  { name: "React", level: 92, color: "#06b6d4" },
  { name: "Tailwind", level: 90, color: "#14b8a6" },
];

const tools = [
  { icon: Code2, name: "Clean Code", description: "Writing maintainable and scalable code" },
  { icon: Palette, name: "UI/UX Design", description: "Creating beautiful user experiences" },
  { icon: Smartphone, name: "Responsive", description: "Mobile-first design approach" },
  { icon: Zap, name: "Performance", description: "Optimized for speed and efficiency" },
];

export default function About() {
  return (
    <Box  id="about" sx={{ py: 10, bgcolor: "#fff"}}>
       <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
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
              mb: 8,
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            I'm a passionate frontend developer with a keen eye for design and a
            love for creating seamless user experiences. With expertise in modern
            web technologies, I bring ideas to life through code.
          </Typography>
        </motion.div>

        {/* Skills + Tools */}
        <Grid container spacing={10}  justifyContent="center" >
          <Grid xs={12} md={6} sx={{ width:{xs:"100%",md:"35%"}}}>
            <Typography
              variant="h6"
              sx={{pt:2, mb: 3, fontWeight: 600 }}
              color="text.primary"
            >
              Technical Skills
            </Typography>
            {skills.map((skill, index) => (
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
          <Grid sx={{width:{xs:"100%",md:"50%"}}} item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 600 }}
              color="text.primary"
            >
              What I Do
            </Typography>
            <Grid container spacing={2}>
              {tools.map((tool, index) => (
                <Grid item xs={8} key={tool.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        border: "1px solid #e5e7eb",
                        borderRadius: 2,
                        textAlign: "center",
                        height: "100%",
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
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        </Container>
    </Box>
  );
}
