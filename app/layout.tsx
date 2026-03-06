import "./globals.css";

import { Footer } from "@/components/sections/Footer";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { ReactNode } from "react";
import { WhatsappButton } from "@/components/custom/WhatsappButton";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <head></head>

      <body
        className={cn("min-h-screen antialiased scroll-smooth", inter.variable)}
      >
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
