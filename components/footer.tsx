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
        py: 6, // Adjusted padding to better fit multiple columns
        mt: 4,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="body2" textAlign="center" gutterBottom>
              WILHEIM - the No. 1 Eventocation in Vienna since 2012.
            </Typography>
            <Box textAlign="center">
              <FacebookIcon sx={{ color: "white", mr: 1 }} />
              <InstagramIcon sx={{ color: "white", mx: 1 }} />
              <TwitterIcon sx={{ color: "white", ml: 1 }} />
            </Box>
            {/* Add content here */}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="body2" textAlign="center" gutterBottom>
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

            {/* Add content here */}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="body2" textAlign="center" gutterBottom>
              INFORMATION
            </Typography>
            <Typography variant="body2" textAlign="center" gutterBottom>
              Contact
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
            <Typography variant="body2" textAlign="center" gutterBottom>
              LOCATION
            </Typography>
            <Typography variant="body2" textAlign="center" gutterBottom>
              Franz-Josefs-Kai 39, 1010 Wien
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="body2" textAlign="center" gutterBottom>
              Reviews
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
        <Divider sx={{ bgcolor: "grey.500", marginTop: 2, marginBottom: 2 }} />
        <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
          Web design by AS © Bubba Production - {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" textAlign="center">
          All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
