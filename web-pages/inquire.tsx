"use client";

import React, { useState, forwardRef, useEffect } from "react";
import { SectionHeader } from "@/components";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  CircularProgress,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import emailjs from "emailjs-com";

interface InquireProps {
  isEnglish: boolean;
  inquires: { title: string; text: string; subText: string };
  isXs: boolean;
}

interface FormField {
  value: string;
  required: boolean;
}

const defaultForm = {
  firstName: { value: "", required: true },
  lastName: { value: "", required: true },
  company: { value: "", required: false },
  phoneNumber: { value: "", required: true },
  email: { value: "", required: true },
  numberOfPeople: { value: "", required: true },
  time: { value: "", required: true },
  detail: { value: "", required: false },
  date: { value: "", required: true },
};

const Inquire = forwardRef<HTMLDivElement, InquireProps>((props, ref) => {
  const [form, setForm] = useState<{
    [key: string]: FormField;
  }>(defaultForm);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const isXs = props.isXs;
  const { title, text, subText } = props.inquires;

  const handleForm = (key: string, value: string, required: boolean) => {
    setForm({ ...form, [key]: { value, required } });
  };

  const handleSubmit = () => {
    setLoading(true);
    const serviceID = "service_bxuf2nd";
    const templateID = "template_euzvnxp";
    const userID = "JTiGW0CSFcrZ-oym5";

    const emailParams = {
      to_name: "Wilheim",
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      company: form.company.value,
      phoneNumber: form.phoneNumber.value,
      emailTo: form.email.value,
      numberOfPeople: form.numberOfPeople.value,
      atTime: form.time.value,
      date: form.date.value,
      detail: form.detail.value,
    };

    emailjs.send(serviceID, templateID, emailParams, userID).then(
      () => {
        setLoading(false);
        setForm(defaultForm);
      },
      () => {
        setLoading(false);
        setForm(defaultForm);
      }
    );
  };

  useEffect(() => {
    const requiredFields = Object.keys(form).filter(
      (key) => form[key].required && !form[key].value.trim()
    );
    if (requiredFields.length === 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isFormValid, form]);

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
      <SectionHeader title={title} isXs={isXs} />
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
                <Typography
                  fontWeight="bold"
                  fontSize={isXs ? 14 : 28}
                  textAlign="center"
                >
                  {text}
                </Typography>
                <Typography textAlign="center">{subText}</Typography>
              </Box>
              <Box display="flex" flexDirection="row" gap={2}>
                <TextField
                  size="small"
                  label="First Name"
                  value={form.firstName.value}
                  fullWidth
                  required
                  onChange={(event) =>
                    handleForm("firstName", event.target.value, true)
                  }
                />
                <TextField
                  size="small"
                  label="Last Name"
                  value={form.lastName.value}
                  fullWidth
                  required
                  onChange={(event) =>
                    handleForm("lastName", event.target.value, true)
                  }
                />
              </Box>
              <TextField
                size="small"
                label="Company"
                value={form.company.value}
                fullWidth
                onChange={(event) =>
                  handleForm("company", event.target.value, false)
                }
              />
              <TextField
                size="small"
                label="Phone number"
                value={form.phoneNumber.value}
                fullWidth
                required
                onChange={(event) =>
                  handleForm("phoneNumber", event.target.value, true)
                }
              />
              <TextField
                size="small"
                label="Email"
                value={form.email.value}
                fullWidth
                required
                onChange={(event) =>
                  handleForm("email", event.target.value, true)
                }
              />
              <TextField
                size="small"
                label="Number of people"
                value={form.numberOfPeople.value}
                required
                onChange={(event) =>
                  handleForm("numberOfPeople", event.target.value, true)
                }
              />
              <Box display="flex" flexDirection="row" gap={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={form.date.value === "" ? null : form.date.value}
                    onChange={(date: any) => {
                      handleForm("date", date.format("YYYY-MM-DD"), true);
                    }}
                    label="Desired Date"
                    slotProps={{
                      textField: {
                        required: true,
                      },
                    }}
                  />
                </LocalizationProvider>
                <TextField
                  fullWidth
                  label="Time"
                  value={form.time.value}
                  required
                  placeholder="e.g: 7:00 p.m - 4:00 a.m"
                  onChange={(event) =>
                    handleForm("time", event.target.value, true)
                  }
                />
              </Box>
              <TextField
                size="small"
                label="Detail"
                value={form.detail.value}
                fullWidth
                multiline
                rows={6}
                placeholder="e.g. process, requirements, special whishes"
                onChange={(event) =>
                  handleForm("detail", event.target.value, false)
                }
              />
              {loading && <CircularProgress style={{ color: "gray" }} />}
              {!loading && (
                <Button
                  disabled={!isFormValid}
                  onClick={() => handleSubmit()}
                  style={{
                    width: "25%",
                    backgroundColor: !isFormValid ? "gray" : "black",
                    borderRadius: 5,
                  }}
                >
                  <Typography color="white">
                    {props.isEnglish ? "Send Request" : "Anfrage senden"}
                  </Typography>
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

Inquire.displayName = "Inquire";

export default Inquire;
