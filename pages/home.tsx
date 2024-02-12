import React from "react";
import { Typography, Container, Button } from "@mui/material";
import { Box } from "@mui/system";

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/assets/9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,

          paddingLeft: {
            xs: 0,
            md: 120,
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
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "white", borderRadius: 5 }}
            >
              <Typography color="black" fontWeight="600" fontFamily="comorant">
                INQUIRE NOW
              </Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
