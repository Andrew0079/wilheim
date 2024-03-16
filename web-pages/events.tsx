"use client";
import React, { forwardRef } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import { SectionHeader, StickerContainer } from "@/components";

interface EventsProps {}

function GridDisplay({
  list,
  onClick,
}: {
  list: any[];
  onClick?: (index: number) => void;
}) {
  return (
    <Grid container spacing={6} justifyContent="center" padding={4}>
      {list.map(({ title, text, image }, index) => (
        <Grid item xs={12} sm={6} md={4} key={`services-${index}`}>
          <Card
            sx={{
              borderRadius: 2,
              height: "100%",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={image}
              alt={title}
              onClick={() => {
                if (onClick) {
                  onClick(index);
                }
              }}
            />
            {title && text && (
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {text}
                </Typography>
              </CardContent>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const Events = forwardRef<HTMLDivElement, EventsProps>((props, ref) => {
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
      }}
    >
      <SectionHeader title="Events" />
      <StickerContainer stickerType="coffee.jpeg">
        <Container>
          <GridDisplay list={services} />
        </Container>
      </StickerContainer>
    </Box>
  );
});

Events.displayName = "Events";

export default Events;
