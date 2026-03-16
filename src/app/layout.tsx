import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer/Footer";

const geistMontserrat = Montserrat({
 variable: "--font-montserrat",
 subsets: ['latin']
})

export const metadata: Metadata = {
  title: "TechSis Network",
  description: "Empowering Women, Transforming the Future of Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMontserrat.className} scroll-container flex flex-col w-full antialiased bg-[#FFFEFE]`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
