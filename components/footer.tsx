import React from "react";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import StarIcon from "@mui/icons-material/Star";

function Footer() {
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
        pt: 14,
        pb: 6,
        mt: 4,
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
              <FacebookIcon sx={{ color: "white", mr: 1 }} />
              <InstagramIcon sx={{ color: "white", mx: 1 }} />
              <TwitterIcon sx={{ color: "white", ml: 1 }} />
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
            {events.map((event: string, index: number) => (
              <Typography
                key={`footer-${index}`}
                variant="body2"
                textAlign="center"
                gutterBottom
              >
                {event}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="body2"
              textAlign="center"
              gutterBottom
              fontSize={24}
            >
              CONTACT
            </Typography>
            <Typography variant="body2" textAlign="center" gutterBottom>
              Email: somethign@gmail.com
            </Typography>
            <Typography variant="body2" textAlign="center" gutterBottom>
              Phone: 06606803630
            </Typography>
            {/* Add content here */}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="body2"
              textAlign="center"
              gutterBottom
              fontSize={24}
            >
              LOCATION
            </Typography>
            <Typography variant="body2" textAlign="center" gutterBottom>
              Franz-Josefs-Kai 39, 1010 Wien
            </Typography>
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
            {/* Add content here */}
          </Grid>
        </Grid>
      </Container>
      <Divider
        sx={{
          bgcolor: "grey.500",
          marginTop: 10,
          marginBottom: 2,
        }}
      />
      <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
        Copyrights AS © BB Production - {new Date().getFullYear()} All rights
        reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
