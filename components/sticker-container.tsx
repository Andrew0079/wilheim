import React from "react";
import { Box } from "@mui/material";

function StickerContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#FFF7FC",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",

          zIndex: -1,
        },
        zIndex: 1,
      }}
    >
      {children}
    </Box>
  );
}

export default StickerContainer;
