"use client";
import React, { useRef, MouseEvent, useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";

function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const scrollLeftButton = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightButton = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      isDown.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // The scroll speed
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const reviewsList = data?.reviews;
        if (reviewsList) {
          setReviews(reviewsList);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    if (reviews?.length === 0) {
      fetchReviews();
    }
  }, [reviews]);

  return (
    <>
      {loading && (
        <Box
          gap={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 200,
            justifyContent: " center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
          <Typography color="black">Loading reviews...</Typography>
        </Box>
      )}
      {reviews.length > 0 && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={scrollLeftButton}>
            <ArrowBackIosIcon />
          </IconButton>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              height: 250,
              gap: 2,
              padding: 2,
              width: "100%",
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              cursor: "grab",
            }}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {reviews
              .filter((review) => review?.extracted_snippet)
              .map((review, index) => {
                const userReview = review?.extracted_snippet?.original;
                const userName = review?.user?.name;
                const userImage = review?.user?.thumbnail;
                const reviewDate = review?.iso_date_of_last_edit;

                return (
                  <Card key={index} sx={{ minWidth: 300 }}>
                    <CardHeader
                      avatar={<Avatar src={userImage} alt="image" />}
                      title={userName}
                      subheader={moment(reviewDate).format("DD/MM/YYYY HH:mm")}
                    />
                    <CardContent
                      sx={{
                        maxHeight: 120,
                        overflowY: "auto",
                        "&::-webkit-scrollbar": { display: "none" },
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        {userReview}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
          </Box>
          <IconButton onClick={scrollRightButton}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
}

export default HorizontalScroll;
