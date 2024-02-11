import React from "react";
import { Typography, Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Navigation } from "../components";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexGrow: 1,
        position: "relative",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src="/assets/9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Video Overlay */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "0",
        }}
      ></Box>
      <Navigation />

      <Box
        sx={{
          position: "absolute",
          zIndex: "1",
          // Use theme breakpoints for responsive styles
          paddingLeft: {
            xs: 0, // No padding for extra-small devices (mobile)
            md: 120, // Apply padding for medium devices (desktop) and up
          },
        }}
      >
        <Container>
          <Typography
            color="white"
            textAlign="center"
            fontSize={40}
            fontWeight="bold"
            fontFamily="comorant"
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {"You Bring the Laughter \n We Serve the Love"}
          </Typography>
          <Box
            sx={{
              display: "flex", // Enable flexbox
              justifyContent: "center", // Center horizontally
              width: "100%", // Take full width to ensure centering works
              mt: 2, // Optional: Adds margin top for spacing, adjust as needed
            }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "white", borderRadius: 20 }}
            >
              <Typography color="black" fontWeight="600" fontFamily="comorant">
                Reserve
              </Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
