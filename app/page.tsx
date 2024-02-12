"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Home, Services } from "@/pages";
import { Navigation, Footer } from "../components";

function Main() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);

  const [isAtTop, setIsAtTop] = useState(true); // State to track if user is at the top of the page

  const handleScroll = () => {
    // Check if the scroll position is at the top of the page
    const atTop = window.scrollY === 0;
    setIsAtTop(atTop);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navigation isAtTop={isAtTop} />
      </Box>
      <Home />
      <Services />
      <Footer />
    </Box>
  );
}

export default Main;
