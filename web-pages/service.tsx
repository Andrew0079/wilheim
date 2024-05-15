"use client";

import React, { forwardRef } from "react";
import { Box, Grid, Typography, Container, Divider } from "@mui/material";
import { SectionHeader } from "@/components";

interface ServiceProps {
  isXs: boolean;
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

  const isXs = props.isXs;
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
        <SectionHeader title={title} isXs={isXs} />
        <Typography fontSize={isXs ? 14 : 18} textAlign="center">
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
            <Grid
              item
              xs={24}
              sm={24}
              md={24}
              lg={4}
              key={index}
              alignItems="center"
            >
              <Typography
                variant={isXs ? "h6" : "h5"}
                component="h2"
                textAlign="center"
              >
                ✔ {item.title}
              </Typography>
              <Typography
                variant={isXs ? "subtitle2" : "body2"}
                textAlign="center"
              >
                {item.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

Service.displayName = "Service";

export default Service;
