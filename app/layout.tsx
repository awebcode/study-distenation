import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
});

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
    url:"https://studydistenation.vercel.app/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={`${poppins.className}${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
