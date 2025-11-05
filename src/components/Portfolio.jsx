"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card"; // adjust path if needed
import { PORTFOLIO_PROJECTS } from "../constent/Constent";

export default function Portfolio() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="portfolio"
      sx={{
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: "#fff",
      }}
    >
      <Box textAlign="center" mb={8}>
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
          >
            My Portfolio
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", mt: 2 }}
          >
            Here are some of my recent projects showcasing my skills in web
            development and design.
          </Typography>
        </motion.div>
      </Box>
      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={project.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                elevation={2}
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  pb: 5,
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.4s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 180, sm: 200 },
                    overflow: "hidden",
                    "&:hover img": { transform: "scale(1.1)" },
                    "&:hover .overlay": { opacity: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: "rgba(0,0,0,0.6)",
                      opacity: 0,
                      display: "flex",
                      justifyContent: { xs: "center", sm: "flex-start" },
                      alignItems: "center",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 2,
                      pl: { sm: 3 },
                      pt: { sm: 14 },
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#059669",
                        "&:hover": { bgcolor: "#047857" },
                      }}
                      startIcon={<ExternalLink size={16} />}
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      Demo
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "#fff",
                        borderColor: "#fff",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                      }}
                      startIcon={<Github size={16} />}
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      Code
                    </Button>
                  </Box>
                </Box>
                <CardHeader sx={{ px: 3, pt: 2 }}>
                  <CardTitle sx={{ fontSize: { xs: "1.3rem", md: "1.6rem" } }}>
                    {project.title}
                  </CardTitle>
                  <CardDescription
                    sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent sx={{ px: 3, mt: 2 }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {project.tags.map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          px: 1.5,
                          bgcolor: "#ECFDF5",
                          color: "#059669",
                          borderRadius: "8px",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
