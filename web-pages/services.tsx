"use client";
import React, { forwardRef } from "react";
import { Box, Container } from "@mui/material";
import { SectionHeader, GridDisplay } from "@/components";

interface ServicesProps {}

const Services = forwardRef<HTMLDivElement, ServicesProps>((props, ref) => {
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
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SectionHeader title="Services" />
      <Container>
        <GridDisplay list={services} />
      </Container>
    </Box>
  );
});

Services.displayName = "Services";

export default Services;
