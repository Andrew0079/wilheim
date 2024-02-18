import React from "react";
import { Box } from "@mui/material";

function StickerContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url("/stickers/sticker0.jpg")`,
          backgroundRepeat: "repeat, repeat",
          backgroundSize: "150px 150px",
          opacity: 0.1, // Adjust for desired fade
          zIndex: -1,
        },
        zIndex: 1, // Ensure content is above the pseudo-element
      }}
    >
      {children}
    </Box>
  );
}

export default StickerContainer;
