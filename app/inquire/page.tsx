"use client";

import React, { useState } from "react";
import { Navigation } from "@/components";
import { Box, Grid, Typography, TextField, Input, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Inquire() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Navigation isAtTop={false} />
      <Grid
        container
        spacing={6}
        sx={{ width: "80%", position: "relative", zIndex: 2 }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex", // Use flexbox for the container
              flexDirection: "column", // Arrange children in a column
              gap: 4, // Add space between children
            }}
          >
            <Typography fontWeight="bold" fontSize={35}>
              INQUIRE NOW FOR YOUR BIRTHDAY LOCATION IN VIENNA
            </Typography>
            <Typography>
              ✔ NO ROOM RENTAL ✔ NON-BINDING INQUIRY ✔ QUICK RESPONSE
            </Typography>
            <TextField label="Number of people" required />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Desired Date" />
            </LocalizationProvider>
            <TextField
              label="Time"
              required
              placeholder="e.g: 7:00 p.m - 4:00 a.m"
            />
            <TextField
              label="Detail"
              fullWidth
              multiline
              rows={6}
              placeholder="e.g. process, requirements, special whishes"
            />
            <Button
              style={{
                width: "25%",
                backgroundColor: "black",
                borderRadius: 5,
              }}
            >
              <Typography color="white">Proceed</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Content Here
          </Typography>
          <Typography>
            Add your content on the left side here. This could be an
            introduction, information about what the user is scheduling, or any
            other relevant information.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Inquire;
