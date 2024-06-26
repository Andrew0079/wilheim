"use client";
import React, { forwardRef, useState, useEffect } from "react";
import { Card, Typography, Link, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { SectionHeader } from "@/components";
import Reviews from "./components/reviews";
import { useTheme } from "@mui/material/styles";

interface ContactProps {
  contact: {
    title: string;
    subTitle: {
      one: string;
      two: string;
    };
  };
  isXs: boolean;
  isEnglish: boolean;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const {
    title,
    subTitle: { one, two },
  } = props.contact;
  const isEnglish = props.isEnglish;
  const fontSize = props.isXs ? 14 : 18;
  const mapsUrl =
    "https://www.google.com/maps/place/Cafe+Wilheim/@48.2143352,16.3724985,16.37z/data=!4m6!3m5!1s0x476d07e53b871151:0x1d831e66aa788c98!8m2!3d48.2144234!4d16.3730642!16s%2Fg%2F11fppmj7fv?entry=ttu";

  const theme = useTheme();
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const calculateWidth = () => {
      const breakpoints: any = theme.breakpoints.values;
      const windowWidth = window.innerWidth;
      const matchedBreakpoint =
        Object.keys(breakpoints)
          .reverse()
          .find((key) => windowWidth >= breakpoints[key]) || "xs";
      return Math.max(breakpoints[matchedBreakpoint] - 100, 0);
    };
    // Function to update width
    const updateWidth = () => {
      const newWidth = calculateWidth();
      setWidth(newWidth);
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth); // Add resize listener

    return () => {
      window.removeEventListener("resize", updateWidth); // Cleanup listener
    };
  }, [theme]);

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
      <SectionHeader title={title} isXs={props.isXs} />
      <Box
        marginBottom={5}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
        gap={1}
      >
        <Typography
          fontWeight="bold"
          fontSize={fontSize}
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
          fontSize={fontSize}
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
          fontSize={fontSize}
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
      <Box
        sx={{
          paddingBottom: 5,
          width: "90%",
          margin: "0 auto", // Centers the box in the parent container
          textAlign: "center", // Centers the text inside the box
          display: "flex", // Enables flexbox layout
          justifyContent: "center", // Centers children horizontally in the flex container
          alignItems: "center", // Centers children vertically in the flex container
        }}
      >
        <Divider sx={{ width: "20%" }} />
      </Box>
      <Box
        sx={{
          width: "90%",
          margin: "0 auto", // Centers the box in the parent container
          textAlign: "center", // Centers the text inside the box
        }}
      >
        <Typography
          fontSize={fontSize}
          fontWeight="bold"
          component="div"
          paddingBottom={2}
        >
          {isEnglish ? "Reviews" : "Bewertungen"}
        </Typography>
        <Typography fontSize={fontSize} component="div">
          {one}
        </Typography>
        <Typography fontSize={fontSize} component="div">
          {two}
        </Typography>
      </Box>

      <Box
        sx={{
          paddingBottom: 5,
          paddingTop: 5,
          width: width === 0 ? 340 : width, // Responsive width
          margin: "0 auto", // Centers the box in the parent container
          textAlign: "center", // Centers the text inside the box
        }}
        alignItems="center"
      >
        <Reviews />
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
