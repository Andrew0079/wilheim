"use client";

import React, { forwardRef } from "react";
import { Box, Grid, Typography, Container, Divider } from "@mui/material";
import { SectionHeader } from "@/components";

interface ServiceProps {
  services: {
    title: string;
    text: string;
    services: {
      title: string;
      text: string;
    }[];
  };
}

const Service = forwardRef<HTMLDivElement, ServiceProps>((props, ref) => {
  const { title, text, services } = props.services;

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
        <SectionHeader title={title} />
        <Typography fontSize={18} textAlign="center">
          {text}
        </Typography>
        <Divider
          style={{
            alignSelf: "center",
            marginTop: 22,
            marginBottom: 22,
            marginLeft: 150,
            marginRight: 150,
          }}
        />
        <Grid container spacing={6}>
          {services.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Typography variant="h5" component="h2">
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
