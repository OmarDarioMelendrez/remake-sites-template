import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Molienda Perricone - Más de 50 años de excelencia en molienda de minerales",
    template: "%s | Molienda Perricone",
  },
  description:
    "Molienda Perricone: granitos, marmolinas, escallas, cuarzos, ferrites y más. Calidad y experiencia en molienda de minerales.",
  keywords: [
    "molienda perricone",
    "granitos",
    "marmolinas",
    "escallas",
    "cuarzos",
    "ferrites",
    "minerales",
    "molienda",
    "industria",
    "construcción",
  ],
  openGraph: {
    title: "Molienda Perricone",
    description:
      "Molienda Perricone: granitos, marmolinas, escallas, cuarzos, ferrites y más. Calidad y experiencia en molienda de minerales.",
    type: "website",
    locale: "es_AR",
    siteName: "Molienda Perricone",
    url: "https://moliendaperricone.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Molienda Perricone",
    description:
      "Molienda Perricone: granitos, marmolinas, escallas, cuarzos, ferrites y más. Calidad y experiencia en molienda de minerales.",
  },
  alternates: {
    canonical: "https://moliendaperricone.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B4513" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
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
