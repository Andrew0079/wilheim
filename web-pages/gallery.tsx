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
    { image: "/images/wilheim/img1.jpg" },
    { image: "/images/wilheim/img2.jpg" },
    { image: "/images/wilheim/img3.PNG" },
    { image: "/images/wilheim/img4.jpg" },
    { image: "/images/wilheim/img5.jpg" },
    { image: "/images/wilheim/img6.JPG" },
    { image: "/images/wilheim/img7.jpg" },
    { image: "/images/wilheim/img8.jpg" },
    { image: "/images/wilheim/img9.jpg" },
    { image: "/images/wilheim/img10.jpg" },
    { image: "/images/wilheim/img11.jpg" },
    { image: "/images/wilheim/img12.jpg" },
    { image: "/images/wilheim/img13.jpg" },
    { image: "/images/wilheim/img14.jpeg" },
    { image: "/images/wilheim/img15.jpg" },
    { image: "/images/wilheim/img16.jpg" },
    { image: "/images/wilheim/img17.JPG" },
    { image: "/images/wilheim/img18.jpg" },
    { image: "/images/wilheim/img19.jpg" },
    { image: "/images/wilheim/img20.jpg" },
    { image: "/images/wilheim/img21.jpeg" },
    { image: "/images/wilheim/img22.PNG" },
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
