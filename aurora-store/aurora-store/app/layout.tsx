import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Aurora — Small-batch goods",
  description: "A demo storefront built while learning Next.js e-commerce.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plex.variable}`}>
      <body className="font-body">
        <CartProvider>
          <Header />
          <main className="mx-auto max-w-6xl px-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
