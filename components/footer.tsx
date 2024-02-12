import React from "react";
import { Box, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        py: 15, // Padding top and bottom
        mt: 4, // Margin top for some spacing above the footer
        backgroundColor: "black", // Use theme's primary color or any color you prefer
        color: "white", // Text color
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" textAlign="center" fontFamily="comorant">
          © Your Bar Name - {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" textAlign="center">
          All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
