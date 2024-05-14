import { Box } from "@mui/material";
import React from "react";
import Lottie from "lottie-react";
import LoadingLottie from "../public/lottie/loading.json";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1300,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Lottie
          animationData={LoadingLottie}
          loop={true}
          style={{ height: 400, width: 400 }}
        />
      </Box>
    </Box>
  );
}

export default Loading;
