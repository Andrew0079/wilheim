import React, { MutableRefObject } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";

interface FooterProps {
  eventRef: MutableRefObject<any>;
  events: {
    title: string;
    items: { title: string; text: string }[];
  };
  isEnglish: boolean;
  isXs: boolean;
}

function ItemContainer({
  children,
  scale,
  href,
  onClick,
}: {
  children: React.ReactNode;
  scale?: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Box
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      component="a"
      href={onClick ? undefined : href}
      sx={{
        cursor: "pointer",
        display: "inline-flex",
        color: "white",
        textDecoration: "none",
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          transform: `scale(${scale ?? 1.15})`,
        },
      }}
    >
      {children}
    </Box>
  );
}

function Footer({ eventRef, events, isEnglish, isXs }: FooterProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { items } = events;

  const mapsUrl =
    "https://www.google.com/maps/place/Cafe+Wilheim/@48.2143352,16.3724985,16.37z/data=!4m6!3m5!1s0x476d07e53b871151:0x1d831e66aa788c98!8m2!3d48.2144234!4d16.3730642!16s%2Fg%2F11fppmj7fv?entry=ttu";

  return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
        backgroundColor: "#051923",
        color: "white",
      }}
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Container
        style={{
          width: "95%",
          minWidth: "95%",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={2}
            sx={{ paddingBottom: isSmallScreen ? 2 : 0 }}
          >
            <Typography
              variant="body2"
              textAlign="center"
              gutterBottom
              fontSize={isXs ? 16 : 24}
            >
              WILHEIM
            </Typography>
            <Box textAlign="center">
              <ItemContainer
                scale="1.50"
                href="https://www.facebook.com/cafewilheim"
              >
                <FacebookIcon sx={{ color: "white", mr: 1 }} />
              </ItemContainer>
              <ItemContainer
                scale="1.50"
                href="https://www.instagram.com/wilheim.cafe.bar/"
              >
                <InstagramIcon sx={{ color: "white" }} />
              </ItemContainer>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={isEnglish ? 3 : 4}
            lg={isEnglish ? 2 : 3}
            sx={{ paddingBottom: isSmallScreen ? 2 : 0 }}
          >
            <Typography
              variant="body2"
              textAlign="center"
              gutterBottom
              fontSize={isXs ? 16 : 24}
              noWrap
            >
              {(isEnglish ? "Events" : "Veranstaltungen").toUpperCase()}
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              {items.map(({ title }: { title: string }, index: number) => {
                const element =
                  eventRef?.current?.getBoundingClientRect().top +
                  window.scrollY;
                return (
                  <ItemContainer
                    key={`footer-${index}`}
                    onClick={() => {
                      window.scrollTo({
                        top: element - 80,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <Typography
                      variant="body2"
                      textAlign="center"
                      gutterBottom
                      style={{ cursor: "pointer" }}
                    >
                      {title}
                    </Typography>
                  </ItemContainer>
                );
              })}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={2}
            sx={{ paddingBottom: isSmallScreen ? 2 : 0 }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="body2"
                textAlign="center"
                gutterBottom
                fontSize={isXs ? 16 : 24}
              >
                {(isEnglish ? "CONTACT" : "Kontakt").toUpperCase()}
              </Typography>
              <ItemContainer href="mailto:info@wilheim.at">
                <Typography variant="body2" textAlign="center" gutterBottom>
                  Email: info@wilheim.at
                </Typography>
              </ItemContainer>
              <ItemContainer href="tel:+436606803630">
                <Typography variant="body2" textAlign="center" gutterBottom>
                  Phone: +43 660 6803 630
                </Typography>
              </ItemContainer>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={2}
            sx={{ paddingBottom: isSmallScreen ? 2 : 0 }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="body2"
                textAlign="center"
                gutterBottom
                fontSize={isXs ? 16 : 24}
              >
                {(isEnglish ? "LOCATION" : "Standort").toUpperCase()}
              </Typography>
              <ItemContainer href={mapsUrl}>
                <Typography variant="body2" textAlign="center" gutterBottom>
                  Franz-Josefs-Kai 39, 1010 Wien
                </Typography>
              </ItemContainer>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={2}
            sx={{ paddingBottom: isSmallScreen ? 2 : 0 }}
          >
            <Typography
              variant="body2"
              textAlign="center"
              gutterBottom
              fontSize={isXs ? 16 : 24}
            >
              {(isEnglish ? " REVIEWS" : "BEWERTUNGEN").toUpperCase()}
            </Typography>
            <Box textAlign="center" sx={{ mt: 2 }}>
              <StarIcon sx={{ color: "yellow", mr: 0.5 }} />
              <StarIcon sx={{ color: "yellow", mx: 0.5 }} />
              <StarIcon sx={{ color: "yellow", mx: 0.5 }} />
              <StarIcon sx={{ color: "yellow", mx: 0.5 }} />
              <StarIcon sx={{ color: "yellow", ml: 0.5 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider
        sx={{
          bgcolor: "grey.500",
          marginTop: 10,
          marginBottom: 6,
        }}
      />
      <Typography variant="body1" textAlign="center">
        Copyrights AS © BB Production - {new Date().getFullYear()} All rights
        reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
