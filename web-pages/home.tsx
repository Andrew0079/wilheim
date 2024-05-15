"use client";
import React, { forwardRef } from "react";
import { Typography, Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

interface HomeProps {
  title: string;
  buttonText: string;
  onNavigate: (page: string) => void;
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
      <Image
        src="/images/bg.jpeg" // Replace with your background image path
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        }}
      ></Box>
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.5)", // Tiny bit of shadow
        }}
      >
        <Image
           src="/images/wilheim/image24.jpeg" // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box> */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
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
        <source src="/assets/coffee.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 0,
        }}
      ></Box>
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
            {props.title}
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
              onClick={() => {
                props.onNavigate("Inquire");
              }}
            >
              <Typography color="#051923" fontWeight="600">
                {props.buttonText}
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
