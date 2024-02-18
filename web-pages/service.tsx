"use client";

import React, { forwardRef } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { SectionHeader } from "@/components";

interface ServiceProps {}

const Service = forwardRef<HTMLDivElement, ServiceProps>((props, ref) => {
  const info = [
    {
      title: "No rental costs",
      text: "We do not charge room rental for the event. You can use our location for your company presentation in a completely relaxed manner.",
    },
    {
      title: "Up to 100 people",
      text: "We can provide excellent care for up to 100 guests at the location. It doesn't matter whether you're sitting or dancing.",
    },
    {
      title: "Long opening hours",
      text: "During events, Wilheim is of course open longer for you and your guests, but until 4 a.m. at the latest.",
    },
    {
      title: "Indoor & Outdoor",
      text: "The location offers you unlimited possibilities in different areas. You can celebrate the company presentation both inside and outside on the terrace.",
    },
    {
      title: "Best location in the 1st district",
      text: "The Wilheim enjoys one of the best locations in Vienna. Our location is right on the edge of the beautiful Rudolfspark.",
    },
    {
      title: "Music",
      text: "Of course, you are welcome to play your own music using a USB stick. It is also possible to book your own DJ through us.",
    },
    {
      title: "Flexible use",
      text: "The changeable room layout and the flexible variation options for the seating elements create the perfect setting for your company presentation.",
    },
    {
      title: "250 meters to the subway",
      text: "The IL TORO is well connected to public transport. The next taxi stand is in the immediate vicinity.",
    },
    {
      title: "Food & Catering",
      text: "From homemade bread rolls to top catering, everything is possible! You are also allowed to bring snacks and your own cake.",
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <SectionHeader title="Our Service" />
        <Grid container spacing={6}>
          {info.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Typography variant="h4" component="h2">
                ✔ {item.title}
              </Typography>
              <Typography variant="body2">{item.text}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

Service.displayName = "Service";

export default Service;
