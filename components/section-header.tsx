import React from "react";
import { Container, Divider, Typography } from "@mui/material";

function SectionHeader({ title, isXs }: { title: string; isXs: boolean }) {
  return (
    <Container>
      <Divider style={{ paddingBottom: 40 }}>
        <Typography
          textAlign="center"
          variant={isXs ? "h5" : "h3"}
          noWrap={true}
        >
          {title}
        </Typography>
      </Divider>
    </Container>
  );
}

export default SectionHeader;
