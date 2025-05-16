"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { Product, ProductKey } from "@/data/products";

interface ProductListProps {
  products: Record<ProductKey, Product>;
}

export default function ProductList({ products }: ProductListProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="mt-8">
      {Object.entries(products).map(([key, product]) => (
        <Accordion
          key={key}
          title={product.title}
          isOpen={openAccordion === key}
          toggle={() => toggleAccordion(key)}
        >
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={key === "granitos"}
                />
              </div>
              <div>
                <p className="text-[#8B4513]/80 mb-4">{product.description}</p>
                <p className="text-[#8B4513]/80">{product.details}</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#8B4513]/90 mb-4">
              Aplicaciones
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[#8B4513]/80">
              {product.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={`/productos/${product.slug}`}
                className="inline-block bg-[#8B4513]/90 hover:bg-[#8B4513] text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Ver más detalles
              </Link>
            </div>
          </div>
        </Accordion>
      ))}
    </div>
  );
}
