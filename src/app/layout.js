import HeaderComp from "./components/header";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./context/Themescontext";
import { Footer } from "./components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const protestGuerrilla = localFont({
  src: "./fonts/ProtestGuerrilla.ttf",
  variable: "--font-protestGuerrilla",
});

export const metadata = {
  title: "Ankit Tiwari",
  description: "A Layout page for Ankit Tiwari's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={protestGuerrilla.variable}>
      <body
        className={`mt-16 md:mt-28 lg:mt-24 ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider>
          <HeaderComp />
          {children}
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
