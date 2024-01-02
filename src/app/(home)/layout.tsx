import type { Metadata } from "next";
import { montserrat } from "@/config/fonts";
import "../globals.css";
import "../normalize.css";

import { Background, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "SkalyVan",
  description:
    'SkalyVan is a Chilean alternative metal band that was founded in 2018. With two albums released such as "The Scars That Define Us" and "Ashes To Remain" with inspirations in metalcore and deathcore.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        <Background />
        {children}
      </body>
    </html>
  );
}
