"use client";
import React, { useRef, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { Home, Gallery, Service, Events, Contact, Inquire } from "@/web-pages";
import { Navigation, Footer, Loading } from "../components";

const LANGUAGE = {
  ENG: "ENG",
  GER: "GER",
};
function Main() {
  const [language, setLanguage] = useState(LANGUAGE.GER);
  const homeRef = useRef<any>(null);
  const eventsRef = useRef<any>(null);
  const ourServicesRef = useRef<any>(null);
  const galleryRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const inquireRef = useRef<any>(null);

  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const atTop = window.scrollY === 0;
    setIsAtTop(atTop);
  };

  const scrollToSection = (section: any) => {
    let offset = 90;
    let elementPosition = 0;
    switch (section) {
      case "Home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Events":
        if (eventsRef.current) {
          elementPosition =
            eventsRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Our Service":
        if (ourServicesRef.current) {
          elementPosition =
            ourServicesRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Gallery":
        if (galleryRef.current) {
          elementPosition =
            galleryRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Inquire":
        if (inquireRef.current) {
          elementPosition =
            inquireRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Contact":
        if (contactRef.current) {
          elementPosition =
            contactRef.current.getBoundingClientRect().top + window.scrollY;
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
            <Navigation
              isAtTop={isAtTop}
              language={language}
              onNavigate={scrollToSection}
              onSetLanguage={setLanguage}
            />
          </Box>
          <Box component="main">
            <Grid container spacing={4}>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Home ref={homeRef} onNavigate={scrollToSection} />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Events ref={eventsRef} />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Service ref={ourServicesRef} />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Gallery ref={galleryRef} />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Inquire ref={inquireRef} />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Contact ref={contactRef} />
                <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                  <Footer eventRef={eventsRef} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Main;
