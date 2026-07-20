import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
// import NavBar from "./components/Navbar";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Emiliano Garcia",
  description: "Software engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="max-w-lg mx-auto px-6 py-10 text-center space-y-6">
        
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
