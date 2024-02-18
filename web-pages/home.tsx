"use client";
import React, { forwardRef } from "react";
import { Typography, Container, Button } from "@mui/material";
import { Box } from "@mui/system";

interface HomeProps {
  onNavigate: (page: any) => void;
}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {
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
            sm: 0,
            md: 0,
            lg: 120,
            xl: 120,
          },
        }}
      >
        <Container>
          <Typography
            color="white"
            variant="h2"
            textAlign="center"
            fontWeight={300}
            sx={{
              whiteSpace: "pre-line",
              typography: {
                xs: "h4",
                sm: "h4",
                md: "h4",
                lg: "h3",
                xl: "h2",
              },
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
              style={{
                backgroundColor: "white",
                borderRadius: 5,
              }}
              onClick={() => props.onNavigate("Inquire")}
            >
              <Typography color="black" fontWeight="600">
                INQUIRE NOW
              </Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
});

Home.displayName = "Home";

export default Home;
