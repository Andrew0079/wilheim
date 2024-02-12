"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Home, Services, Gallery } from "@/web-pages";
import { Navigation, Footer } from "../components";

function Main() {
  const homeRef = useRef<any>(null);
  const servicesRef = useRef<any>(null);
  const galleryRef = useRef<any>(null); // Add ref for Gallery

  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const atTop = window.scrollY === 0;
    setIsAtTop(atTop);
  };

  const scrollToSection = (section: any) => {
    let offset = 90; // Offset from the top, adjust as needed
    let elementPosition = 0;
    switch (section) {
      case "Home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Services":
        if (servicesRef.current) {
          elementPosition =
            servicesRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Gallery":
        if (galleryRef.current) {
          elementPosition =
            galleryRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
    }
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navigation isAtTop={isAtTop} onNavigate={scrollToSection} />
      </Box>
      <Home ref={homeRef} />
      <Services ref={servicesRef} />
      <Gallery ref={galleryRef} />
      <Footer />
    </Box>
  );
}

export default Main;
