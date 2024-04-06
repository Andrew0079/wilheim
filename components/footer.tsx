import React, { MutableRefObject } from "react";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";

function ItemContainer({
  children,
  scale,
  href,
  onClick,
}: {
  children: React.ReactNode;
  scale?: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Box
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      component="a"
      href={onClick ? undefined : href}
      sx={{
        display: "inline-flex",
        color: "white",
        textDecoration: "none",
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          transform: `scale(${scale ?? 1.15})`,
        },
      }}
    >
      {children}
    </Box>
  );
}

function Footer({ eventRef }: { eventRef: MutableRefObject<any> }) {
  const mapsUrl =
    "https://www.google.com/maps/place/Cafe+Wilheim/@48.2143352,16.3724985,16.37z/data=!4m6!3m5!1s0x476d07e53b871151:0x1d831e66aa788c98!8m2!3d48.2144234!4d16.3730642!16s%2Fg%2F11fppmj7fv?entry=ttu";
  const events = [
    "Birthday",
    "Company Party",
    "Christmas Party",
    "Bachelor Party",
    "Meeting",
    "Live performance",
  ];
  return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
        backgroundColor: "#051923",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="body2"
              textAlign="center"
              gutterBottom
              fontSize={24}
            >
              WILHEIM
            </Typography>
            <Box textAlign="center">
              <ItemContainer scale="1.50">
                <FacebookIcon sx={{ color: "white", mr: 1 }} />
              </ItemContainer>
              <ItemContainer scale="1.50">
                <InstagramIcon sx={{ color: "white" }} />
              </ItemContainer>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="body2"
              textAlign="center"
              gutterBottom
              fontSize={24}
            >
              EVENTS
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              {events.map((event: string, index: number) => {
                const element =
                  eventRef?.current?.getBoundingClientRect().top +
                  window.scrollY;
                return (
                  <ItemContainer
                    key={`footer-${index}`}
                    onClick={() => {
                      window.scrollTo({
                        top: element - 80,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <Typography
                      variant="body2"
                      textAlign="center"
                      gutterBottom
                      style={{ cursor: "pointer" }}
                    >
                      {event}
                    </Typography>
                  </ItemContainer>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="body2"
                textAlign="center"
                gutterBottom
                fontSize={24}
              >
                CONTACT
              </Typography>
              <ItemContainer href="mailto:info@wilheim.at">
                <Typography variant="body2" textAlign="center" gutterBottom>
                  Email: info@wilheim.at
                </Typography>
              </ItemContainer>
              <ItemContainer href="tel:+436606803630">
                <Typography variant="body2" textAlign="center" gutterBottom>
                  Phone: +43 660 6803 630
                </Typography>
              </ItemContainer>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="body2"
                textAlign="center"
                gutterBottom
                fontSize={24}
              >
                LOCATION
              </Typography>
              <ItemContainer href={mapsUrl}>
                <Typography variant="body2" textAlign="center" gutterBottom>
                  Franz-Josefs-Kai 39, 1010 Wien
                </Typography>
              </ItemContainer>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="body2"
              textAlign="center"
              gutterBottom
              fontSize={24}
            >
              REVIEWS
            </Typography>
            <Box textAlign="center" sx={{ mt: 2 }}>
              <StarIcon sx={{ color: "yellow", mr: 0.5 }} />
              <StarIcon sx={{ color: "yellow", mx: 0.5 }} />
              <StarIcon sx={{ color: "yellow", mx: 0.5 }} />
              <StarIcon sx={{ color: "yellow", mx: 0.5 }} />
              <StarIcon sx={{ color: "yellow", ml: 0.5 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider
        sx={{
          bgcolor: "grey.500",
          marginTop: 10,
          marginBottom: 6,
        }}
      />

      <Typography variant="body1" textAlign="center">
        Copyrights AS © BB Production - {new Date().getFullYear()} All rights
        reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
