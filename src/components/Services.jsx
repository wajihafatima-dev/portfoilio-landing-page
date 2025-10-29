"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SERVICES_DATA } from "../constent/Constent";

export default function Services() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 }, bgcolor: "#f9fafb" }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant={isSmall ? "h6" : "h5"}
            color="primary"
            sx={{ pb: 2, fontWeight: "bold" }}
          >
            Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            I offer a range of services to help bring your digital vision to
            life with quality and precision.
          </Typography>
        </motion.div>
      </Box>

      {/* Responsive Grid */}
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 5 }}
        justifyContent="center"
      >
        {SERVICES_DATA.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={service.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                elevation={1}
                sx={{
                  borderRadius: 3,
                  width: "100%",
                  maxWidth: 400,
                  minHeight: 320,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "rgba(16,185,129,0.1)",
                      color: "rgb(16,185,129)",
                      width: 60,
                      height: 60,
                      mb: 2,
                    }}
                  >
                    <service.icon size={32} />
                  </Avatar>

                  <Typography
                    variant={isSmall ? "subtitle1" : "h6"}
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                    }}
                  >
                    {service.description}
                  </Typography>

                  <List dense>
                    {service.features.map((feature) => (
                      <ListItem key={feature} sx={{ py: 0.2 }}>
                        <ListItemIcon
                          sx={{
                            minWidth: 20,
                            color: "rgb(16,185,129)",
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              bgcolor: "rgb(16,185,129)",
                              borderRadius: "50%",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            variant: "body2",
                            color: "text.secondary",
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                          }}
                          primary={feature}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
