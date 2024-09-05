import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_home_components/Navbar";
import Footer from "./_home_components/footer/Footer";
import dynamic from "next/dynamic";
const ScrollToTop = dynamic(() => import("./_reusable-components/ScrollToTop"), { ssr: false })
import localFont from 'next/font/local'
const helvetica = localFont({ src: [{ path: './fonts/helvetica-255/Helvetica-Bold.ttf', weight: '700' },{path: './fonts/helvetica-255/Helvetica.ttf', weight: '400'}] })

export const metadata: Metadata = {
  title: "Study Distenation -Asikur",
  description: "Study Distenation -Asikur",
  icons: {
    icon: "/assets/navbar/logo.svg",
  },
  openGraph: {
    title: "Study Distenation -Asikur",
    description: "Study Distenation -Asikur",
    images: {
      url: "/assets/app-process/1.png",
    },
    siteName: "Study Distenation",
    type: "article",
    url: "https://studydistenation.vercel.app/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col bg-[#f5f5f5]  ${helvetica.className}`}>
        <Navbar />
        <div className="flex-grow">  {children}</div>
        <ScrollToTop />
      
  
        <div className="">  <Footer /></div>
      </body>
    </html>
  );
}
