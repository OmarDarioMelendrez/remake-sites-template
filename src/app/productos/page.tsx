import { Metadata } from "next";
import { productsData } from "@/data/products";
import ProductList from "@/app/productos/ProductList";

export const metadata: Metadata = {
  title: "Productos | Molienda Perricone - Minerales de Alta Calidad",
  description:
    "Descubra nuestra amplia gama de productos minerales: granitos, marmolinas, escallas, cuarzos, ferrites y más. Calidad garantizada para todas sus necesidades industriales.",
  keywords:
    "granitos, marmolinas, escallas, cuarzos, ferrites, minerales, molienda, industria, construcción",
  openGraph: {
    title: "Productos | Molienda Perricone",
    description:
      "Descubra nuestra amplia gama de productos minerales de alta calidad para la industria.",
    type: "website",
    locale: "es_AR",
    siteName: "Molienda Perricone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Productos | Molienda Perricone",
    description:
      "Descubra nuestra amplia gama de productos minerales de alta calidad para la industria.",
  },
  alternates: {
    canonical: "https://moliendaperricone.com/productos",
  },
};

export default function ProductsPage() {
  return (
    <main className="bg-[#F5F0EB] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#8B4513]/90 text-center mb-4">
            Nuestros Productos
          </h1>
          <p className="text-center text-lg text-[#8B4513]/70 mb-12">
            En Molienda Perricone ofrecemos una amplia variedad de minerales
            molidos de alta calidad.
          </p>

          <ProductList products={productsData} />
        </div>
      </div>
    </main>
  );
}
