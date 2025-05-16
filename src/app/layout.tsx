import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template Multisitio",
  description: "Template para crear múltiples sitios web con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton
          phoneNumber="1132929169"
          message="Hola, me gustaría obtener más información sobre sus productos."
        />
      </body>
    </html>
  );
}
