import type { Metadata } from "next";
import { yipes, luxury, luxuryScript, maxima } from "../../public/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awchicks Web",
  description: "Awchicks Website and Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${yipes.variable} ${luxury.variable} ${luxuryScript.variable} ${maxima.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
