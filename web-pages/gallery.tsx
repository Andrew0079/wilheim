"use client";
import React, { useState, forwardRef } from "react";
import {
  Box,
  Dialog,
  IconButton,
  CardMedia,
  Card,
  Container,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { SectionHeader, StickerContainer } from "@/components";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface GalleryProps {
  title: string;
  isXs: boolean;
}

function StandardImageList({
  list,
  onHandleClick,
}: {
  list: { image: string }[];
  onHandleClick: (index: number) => void;
}) {
  return (
    <ImageList
      gap={16}
      variant="quilted"
      cols={4}
      rowHeight={150}
      style={{ borderRadius: 15, padding: 16 }}
    >
      {list.map(({ image }, index: number) => (
        <ImageListItem key={`row-${index}`}>
          <Card
            sx={{
              height: "100%",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt="image"
              height="100%"
              onClick={() => onHandleClick(index)}
            />
          </Card>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const Gallery = forwardRef<HTMLDivElement, GalleryProps>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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
    { image: "/images/wilheim/image5.png" },
    { image: "/images/wilheim/image6.png" },
    { image: "/images/wilheim/image7.png" },
    { image: "/images/wilheim/image8.png" },
    { image: "/images/wilheim/image9.png" },
    { image: "/images/wilheim/image10.png" },
    { image: "/images/wilheim/image11.png" },
    { image: "/images/wilheim/image12.png" },
    { image: "/images/wilheim/image13.jpeg" },
    { image: "/images/wilheim/image14.jpeg" },
    { image: "/images/wilheim/image15.JPG" },
    { image: "/images/wilheim/image16.jpg" },
    { image: "/images/wilheim/image17.jpg" },
    { image: "/images/wilheim/image18.jpg" },
    { image: "/images/wilheim/image19.jpg" },
    { image: "/images/wilheim/image20.jpg" },
    { image: "/images/wilheim/image21.jpg" },
    { image: "/images/wilheim/image22.jpeg" },
    { image: "/images/wilheim/image23.jpeg" },
    { image: "/images/wilheim/image24.jpeg" },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SectionHeader title={props.title} isXs={props.isXs} />
      <StickerContainer>
        <Container style={{ minWidth: "90%" }}>
          <StandardImageList list={imageUrls} onHandleClick={handleOpen} />
        </Container>
      </StickerContainer>
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
