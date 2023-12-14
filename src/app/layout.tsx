import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/tony/general/header";
import Sidebar from "@/components/tony/general/sidebar";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// console.log(fontSans.variable);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Sidebar />
        <section className="flex h-[100vh]  w-full flex-col  ">
          <Header />
          <div className="flex-1 overflow-y-scroll">{children}</div>
        </section>
      </body>
    </html>
  );
}
