import type { Metadata } from "next";
import { montserrat } from "@/config/fonts";
import "../globals.css";
import "../normalize.css";

import { TopMenu } from "@/components";

export const metadata: Metadata = {
  title: "SkalyVan | Shop",
  description: "SkalyVan Shop | Merch, accesories and more.",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
