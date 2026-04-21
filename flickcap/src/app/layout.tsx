import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FlickCap — AI Captions for Desi Creators",
  description:
    "Create viral captions in Hindi, Urdu, Punjabi, Tamil, Bengali & more. AI-powered captioning platform built for South Asian content creators.",
  keywords: ["captions", "AI", "Hindi", "Urdu", "Punjabi", "South Asian", "creators", "video"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
