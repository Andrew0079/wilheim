"use client";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import theme from "@/theme";
import Head from "next/head";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const newTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "'Seasons', serif",
  },
});

const structuredData = {
  "@context": "http://schema.org",
  "@type": "CafeOrCoffeeShopOrBar",
  name: "Cafe Wilheim",
  "@id": "",
  telephone: "+43123456789",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Cafe Street",
    addressLocality: "Vienna",
    postalCode: "1010",
    addressCountry: "AT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.2144234,
    longitude: 16.3730642,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "00:00",
  },
  sameAs: [
    "https://www.facebook.com/cafewilheim",
    "https://www.instagram.com/wilheim.cafe.bar/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Cafe Wilheim - Best Cafe in Vienna, Austria</title>
        <meta
          name="description"
          content="Visit Cafe Wilheim, the best cafe bar in Vienna, Austria. Enjoy our unique atmosphere, delicious coffee, and exquisite pastries. Located at the heart of Vienna."
        />
        <meta
          name="keywords"
          content="Cafe Wilheim, cafe Vienna, best coffee in Vienna, cafe bar Vienna, Austria"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.google.com/maps/place/Cafe+Wilheim/@48.2144269,16.3704893,17z/data=!3m1!4b1!4m6!3m5!1s0x476d07e53b871151:0x1d831e66aa788c98!8m2!3d48.2144234!4d16.3730642!16s%2Fg%2F11fppmj7fv?entry=ttu"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <AppRouterCacheProvider>
        <ThemeProvider theme={newTheme}>
          <body suppressHydrationWarning={true}>{children}</body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
