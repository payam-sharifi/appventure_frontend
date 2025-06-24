import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
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

export const metadata: Metadata = {
  title: "Appventure",
  //description: "Boost Your Business, Elevate Your Income!",
description:"Boost Your Business, Elevate Your Income!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

    <html lang="en">
    <Script src="/js/jquery.min.js"></Script>
    <Script src="/js/jquery.scrolly.min.js"></Script>
    <Script src="/js/jquery.dropotron.min.js"></Script>
    <Script src="/js/jquery.scrollex.min.js"></Script>
    <Script src="/js/browser.min.js"></Script>
    <Script src="/js/breakpoints.min.js"></Script>
    <Script src="/js/util.js"></Script>
    <Script src="/js/main.js"></Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ToastContainer />
             <Header />      
        {children}

        <Footer />
        {/* Scroll to Top Button */}

      </body>
    </html>
    </>
  );
}
