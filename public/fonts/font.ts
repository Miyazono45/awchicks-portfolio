import localFont from "next/font/local";

export const yipes = localFont({
  src: "../fonts/Yipes/Yipes.otf",
  display: "swap",
  variable: "--font-yipes",
});

export const luxury = localFont({
  src: "../fonts/Luxury/Luxury.woff2",
  display: "swap",
  variable: "--font-luxury",
});

export const luxuryScript = localFont({
  src: "../fonts/Luxury/Luxury-Script.woff2",
  display: "swap",
  variable: "--font-luxuryScript",
});

export const maxima = localFont({
  src: [
    {
      path: "../fonts/Maxima/MaximaNouva-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Maxima/MaximaNouva-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Maxima/MaximaNouva-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/Maxima/MaximaNouva-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Maxima/MaximaNouva-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Maxima/MaximaNouva-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Maxima/MaximaNouva-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Maxima/MaximaNouva-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-maxima",
});
