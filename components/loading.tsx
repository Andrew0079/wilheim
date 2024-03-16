import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import StickerContainer from "./sticker-container";

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
      <StickerContainer stickerType="coffee.jpeg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Image
            src="/images/wilheim/image0.png"
            alt="Loading"
            height={150}
            width={150}
            style={{ borderRadius: 20 }}
          />
        </Box>
      </StickerContainer>
    </Box>
  );
}

export default Loading;
