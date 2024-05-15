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

interface EventsProps {
  onHandleScrollToInquire: () => void;
  events: {
    title: string;
    items: { title: string; text: string }[];
  };
  isXs: boolean;
}

const imageMapper = {
  0: "images/birthday.jpeg",
  1: "images/company-party.jpg",
  2: "images/christmas-party.jpg",
  3: "images/bachelor.jpg",
  4: "images/meeting.jpg",
  5: "images/live.jpg",
};

function GridDisplay({
  list,
  onClick,
  isXs,
}: {
  list: any[];
  onClick?: () => void;
  isXs: boolean;
}) {
  return (
    <Grid container spacing={6} justifyContent="center" padding={4}>
      {list.map(({ title, text }, index) => (
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
              image={(imageMapper as any)[index]}
              alt={title}
              onClick={() => {
                if (onClick) {
                  onClick();
                }
              }}
            />
            {title && text && (
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    whiteSpace: "pre-line",
                    typography: {
                      xs: "h6",
                      sm: "h6",
                      md: "h6",
                      lg: "h5",
                      xl: "h5",
                    },
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant={isXs ? "subtitle2" : "subtitle1"}
                  color="text.secondary"
                >
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
  const { title, items } = props.events;
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
      <SectionHeader title={title} isXs={props.isXs} />
      <StickerContainer>
        <Container>
          <GridDisplay
            list={items}
            onClick={() => props.onHandleScrollToInquire()}
            isXs={props.isXs}
          />
        </Container>
      </StickerContainer>
    </Box>
  );
});

Events.displayName = "Events";

export default Events;
