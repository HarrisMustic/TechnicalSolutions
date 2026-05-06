import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechnicalSolutions | Software Automation & Web Solutions",
  description:
    "Professional websites, automation tools, data integration, DevOps support, and custom technical solutions by Harris Mustic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
