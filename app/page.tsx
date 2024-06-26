"use client";
import React, { useRef, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { Home, Gallery, Service, Events, Contact, Inquire } from "@/web-pages";
import { Navigation, Footer, Loading } from "../components";
import { LANGUAGE } from "@/uitls/utils";
import { getLocalization } from "../internationalization/localization";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Main() {
  const [language, setLanguage] = useState<"EN" | "DE">(LANGUAGE.DE);
  const homeRef = useRef<any>(null);
  const eventsRef = useRef<any>(null);
  const ourServicesRef = useRef<any>(null);
  const galleryRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const inquireRef = useRef<any>(null);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const localization = getLocalization(language);
  const isEnglish = LANGUAGE.EN === language;
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
      case "Startseite":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Events":
      case "Veranstaltungen":
        if (eventsRef.current) {
          elementPosition =
            eventsRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Our Service":
      case "Unser Service":
        if (ourServicesRef.current) {
          elementPosition =
            ourServicesRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Gallery":
      case "Galerie":
        if (galleryRef.current) {
          elementPosition =
            galleryRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Inquire":
      case "Anfragen":
        if (inquireRef.current) {
          elementPosition =
            inquireRef.current.getBoundingClientRect().top + window.scrollY;
        }
        break;
      case "Contact":
      case "Kontakt":
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

  const handleScrollToInquire = () => {
    const elementPosition =
      inquireRef.current.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - 90,
      behavior: "smooth",
    });
  };

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
              navigationItems={localization.navigation}
              onNavigate={scrollToSection}
              onSetLanguage={setLanguage}
            />
          </Box>
          <Box component="main">
            <Grid container spacing={4}>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Home
                  ref={homeRef}
                  onNavigate={scrollToSection}
                  title={localization.homeTitle}
                  buttonText={localization.buttonText}
                />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Events
                  ref={eventsRef}
                  events={localization.events}
                  onHandleScrollToInquire={handleScrollToInquire}
                  isXs={isXs}
                />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Service
                  ref={ourServicesRef}
                  services={localization.service}
                  isXs={isXs}
                />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Gallery
                  ref={galleryRef}
                  title={isEnglish ? "Gallery" : "Galerie"}
                  isXs={isXs}
                />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Inquire
                  ref={inquireRef}
                  inquires={localization.inquire}
                  isEnglish={isEnglish}
                  isXs={isXs}
                />
              </Grid>
              <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                <Contact
                  ref={contactRef}
                  contact={localization.contact}
                  isXs={isXs}
                  isEnglish={isEnglish}
                />
                <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
                  <Footer
                    eventRef={eventsRef}
                    events={localization.events}
                    isEnglish={isEnglish}
                    isXs={isXs}
                  />
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
