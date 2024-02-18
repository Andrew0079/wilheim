import React from "react";
import { Container, Divider, Typography } from "@mui/material";

function SectionHeader({ title }: { title: string }) {
  return (
    <Container>
      <Divider style={{ paddingBottom: 40 }}>
        <Typography variant="h3">{title}</Typography>
      </Divider>
    </Container>
  );
}

export default SectionHeader;
