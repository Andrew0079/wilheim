"use client";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const newTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "'Original Surfer', sans-serif",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={newTheme}>
          <body suppressHydrationWarning={true}>{children}</body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
