import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/libs/Provider/StoreProvider";

export const metadata: Metadata = {
  title: "Books App",
  description: "A simple books app",
};

const montserratFont = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${montserratFont.className}`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
