import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  CardMedia,
} from "@mui/material";

function Services() {
  const services = [
    {
      title: "Birthday",
      text: "The event location in Vienna for birthday parties",
      image: "/images/birthday.jpeg",
    },
    {
      title: "Company Party",
      text: "The event location in Vienna for company celebrations",
      image: "/images/company-party.jpg",
    },
    {
      title: "Christmas Party",
      text: "The event location in Vienna for Christmas parties",
      image: "/images/christmas-party.jpg",
    },
    {
      title: "Bachelor Party",
      text: "The event location in Vienna for bachelor parties",
      image: "/images/bachelor.jpg",
    },
    {
      title: "Meeting",
      text: "The event location in Vienna for meetings",
      image: "/images/meeting.jpg",
    },
    {
      title: "Live Performance",
      text: "The event location in Vienna for concerts",
      image: "/images/live.jpg",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {services.map(({ title, text, image }, index) => (
            <Grid item xs={12} sm={6} md={4} key={`services-${index}`}>
              <Card
                sx={{
                  borderRadius: 2,
                  height: "100%",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out", // Smooth transition for the transform
                  ":hover": {
                    transform: "scale(1.05)", // Scale up the card slightly on hover
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)", // Optional: add a shadow effect on hover
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={image}
                  alt={title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily="comorant"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily="comorant"
                  >
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
