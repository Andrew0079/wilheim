"use client";
import React, { forwardRef } from "react";
import { Card, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import { SectionHeader } from "@/components";

interface ContactProps {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const mapsUrl =
    "https://www.google.com/maps/place/Cafe+Wilheim/@48.2143352,16.3724985,16.37z/data=!4m6!3m5!1s0x476d07e53b871151:0x1d831e66aa788c98!8m2!3d48.2144234!4d16.3730642!16s%2Fg%2F11fppmj7fv?entry=ttu";
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <SectionHeader title="Contact" />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={1}
      >
        <Typography
          fontWeight="bold"
          variant="h6"
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={() => window.open(mapsUrl, "_blank")}
        >
          Franz-Josefs-Kai 39, 1010 Wien
        </Typography>
        <Typography fontWeight="bold" variant="h6">
          |
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h6"
          color="black"
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Link
            href="tel:+43 660 680 3630"
            style={{ textDecoration: "none", color: "black" }}
          >
            +43 660 680 3630
          </Link>
        </Typography>
        <Typography fontWeight="bold" variant="h6">
          |
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h6"
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Link
            href="mailto: info@wilheim.at"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            info@wilheim.at
          </Link>
        </Typography>
      </Box>
      <Card
        sx={{
          marginTop: 5,
          width: "100%",
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
          cursor: "pointer",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.5946368212835!2d16.370489276969547!3d48.214423371252146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07e53b871151%3A0x1d831e66aa788c98!2sCafe%20Wilheim!5e0!3m2!1sen!2sat!4v1712386816360!5m2!1sen!2sat"
          width="100%"
          height="550px"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </Card>
    </Box>
  );
});

Contact.displayName = "Contact";

export default Contact;
