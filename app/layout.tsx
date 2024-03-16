"use client";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import theme from "@/theme";

const newTheme = createTheme({
  ...theme,
  typography: {
    // Set the default font family for all typography
    fontFamily: "'Original Surfer', sans-serif",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={newTheme}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
