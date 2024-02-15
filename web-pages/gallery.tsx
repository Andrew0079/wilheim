"use client";

import React, { useState, forwardRef } from "react";
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Grid,
  CardMedia,
  Card,
  Divider,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { SectionHeader, GridDisplay } from "@/components";

interface GalleryProps {}

function GalleryRow({
  list,
  rowName,
}: {
  rowName: string;
  list: { image: string }[];
}) {
  return (
    <Box
      marginBottom={5}
      sx={{
        display: "flex",
        overflowX: "auto",
        width: "100%",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none", // Firefox
      }}
    >
      {list.map(({ image }, index: number) => (
        <Box
          key={`${rowName}-${index}`}
          sx={{
            minWidth: 300,
            height: 220,
            marginRight: "8px",
            display: "inline-block",
          }}
        >
          <Card
            sx={{
              borderRadius: 2,
              height: "100%",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                borderRadius: 2,
              },
            }}
            // onClick={() => handleOpen(index)}
          >
            <CardMedia
              component="img"
              image={image}
              alt="image"
              sx={{ height: "100%", objectFit: "cover" }}
            />
          </Card>
        </Box>
      ))}
    </Box>
  );
}

const Gallery = forwardRef<HTMLDivElement, GalleryProps>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 9; // 3 rows * 3 columns

  const handleOpen = (index: number) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handleBack = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  const imageUrls = [
    { image: "/images/wilheim/image1.jpeg" },
    { image: "/images/wilheim/image2.jpeg" },
    { image: "/images/wilheim/image3.jpeg" },
    { image: "/images/wilheim/image4.jpeg" },
    { image: "/images/birthday.jpeg" },
    { image: "/images/company-party.jpg" },
    { image: "/images/christmas-party.jpg" },
    { image: "/images/bachelor.jpg" },
    { image: "/images/wilheim/image7.png" },
    { image: "/images/wilheim/image8.png" },
    { image: "/images/wilheim/image9.png" },
    { image: "/images/wilheim/image10.png" },
    { image: "/images/wilheim/image11.png" },
    { image: "/images/wilheim/image12.png" },
  ];

  const halfLength = Math.ceil(imageUrls.length / 2);

  // Split the array into two halves
  const firstHalf = imageUrls.slice(0, halfLength);
  const secondHalf = imageUrls.slice(halfLength);
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SectionHeader title="Gallery" />
      <Container>
        <GalleryRow list={firstHalf} rowName="first" />
        <GalleryRow list={secondHalf} rowName="second" />
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        style={{ borderRadius: 20 }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "black",
            height: "auto",
            width: "100%",
            "&:before": {
              content: '""',
              display: "block",
              paddingTop: "56.25%",
            },
          }}
        >
          <IconButton
            onClick={handleBack}
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              zIndex: 2,
              "&:hover": {
                backgroundColor: "white",
                boxShadow: "none",
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Image
              src={imageUrls[currentImage].image}
              alt={`Image ${currentImage + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "white",
                boxShadow: "none",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
});

Gallery.displayName = "Gallery";

export default Gallery;
