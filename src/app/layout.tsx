import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lafti Naga a best e-commerce store in africa",
  description: "web development in progress.........",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} md-px-20 px-10`}>
        <section className="border-b-2 border-black ">
          <Image src="/Lafti-Naga-logo.png" width={300} height={100} alt="Lafti Naga Logo" />
        </section>
        {children}
      </body>
    </html>
  );
}
