import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: [""],
});

export const metadata = {
  title: "Guru Sahib Books",
  description: "Official website of Guru Sahib Books",
  author: "S Davinder Singh Thammanwal"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable}  antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
