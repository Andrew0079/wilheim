"use client";
import React, { forwardRef } from "react";
import { Container, Card, CardMedia, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import { SectionHeader, StickerContainer } from "@/components";

interface ContactProps {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const mapsUrl =
    "https://www.google.com/maps/place/Cafe+Wilheim/@48.2143352,16.3724985,16.37z/data=!4m6!3m5!1s0x476d07e53b871151:0x1d831e66aa788c98!8m2!3d48.2144234!4d16.3730642!16s%2Fg%2F11fppmj7fv?entry=ttu";
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
      <SectionHeader title="Contact" />
      <StickerContainer>
        <Container>
          <Box
            style={{ display: "flex", flexDirection: "column" }}
            gap={4}
            padding={4}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              gap={1}
            >
              <Typography
                fontWeight="bold"
                variant="h6"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                onClick={() => window.open(mapsUrl, "_blank")}
              >
                Franz-Josefs-Kai 39, 1010 Wien, Austria
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                |
              </Typography>
              <Typography
                fontWeight="bold"
                variant="h6"
                color="black"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link
                  href="tel:+436606803630"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  +436606803630
                </Link>
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                |
              </Typography>
              <Typography
                fontWeight="bold"
                variant="h6"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link
                  href="mailto:something@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  something@gmail.com
                </Link>
              </Typography>
            </Box>

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
              onClick={() => window.open(mapsUrl, "_blank")}
            >
              <CardMedia
                component="img"
                height={400}
                image="/images/map.png"
                alt="image"
              />
            </Card>
          </Box>
        </Container>
      </StickerContainer>
    </Box>
  );
});

Contact.displayName = "Contact";

export default Contact;
