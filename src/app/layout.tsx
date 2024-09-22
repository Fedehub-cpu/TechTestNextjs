import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./components/providers/Provider";
import Navbar from './components/navbar/Navbar';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background text-primary", inter.className)}>
        <Provider>
        <Navbar></Navbar>
          <div className="w-full h-full px-4">
            {children}
            </div>
        </Provider>
      </body>
    </html>
  );
}
