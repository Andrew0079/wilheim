import React from "react";
import { Box, Divider, Typography } from "@mui/material";

function SectionHeader({ title }: { title: string }) {
  return (
    <Box width="90%" px={10} paddingBottom={15}>
      <Divider>
        <Typography variant="h3">{title}</Typography>
      </Divider>
    </Box>
  );
}

export default SectionHeader;
