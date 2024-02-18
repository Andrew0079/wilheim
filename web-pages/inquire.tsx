"use client";

import React, { useState, forwardRef } from "react";
import { SectionHeader } from "@/components";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Input,
  Button,
  Container,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface InquireProps {}

const Inquire = forwardRef<HTMLDivElement, InquireProps>((props, ref) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

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
      <SectionHeader title="Inquire" />
      <Container>
        <Grid container spacing={6}>
          <Grid item xl={24} lg={24} md={24} sm={24} xs={24}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Typography fontWeight="bold" fontSize={35}>
                  INQUIRE NOW FOR YOUR EVENT LOCATION IN VIENNA
                </Typography>
                <Typography>
                  ✔ NO ROOM RENTAL ✔ NON-BINDING INQUIRY ✔ QUICK RESPONSE
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" gap={2}>
                <TextField size="small" label="First Name" fullWidth required />
                <TextField size="small" label="Last Name" fullWidth required />
              </Box>
              <TextField size="small" label="Company" fullWidth required />
              <TextField size="small" label="Phone number" fullWidth required />
              <TextField size="small" label="Email" fullWidth required />
              <TextField size="small" label="Number of people" required />
              <Box display="flex" flexDirection="row" gap={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Desired Date" />
                </LocalizationProvider>
                <TextField
                  fullWidth
                  label="Time"
                  required
                  placeholder="e.g: 7:00 p.m - 4:00 a.m"
                />
              </Box>
              <TextField
                size="small"
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
                <Typography color="white">Send Request</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

Inquire.displayName = "Inquire";

export default Inquire;
