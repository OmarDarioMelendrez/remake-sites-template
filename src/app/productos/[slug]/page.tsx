import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { productsData } from "@/data/products";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = Object.values(productsData).find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    return {
      title: "Producto no encontrado | Molienda Perricone",
    };
  }

  return {
    title: `${product.title} | Molienda Perricone - Minerales de Alta Calidad`,
    description: `${product.description} ${product.details}`,
    keywords: `${product.title.toLowerCase()}, minerales, molienda, ${product.applications.join(
      ", "
    )}`,
    openGraph: {
      title: `${product.title} | Molienda Perricone`,
      description: product.description,
      type: "website",
      locale: "es_AR",
      siteName: "Molienda Perricone",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Molienda Perricone`,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `https://moliendaperricone.com/productos/${product.slug}`,
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = Object.values(productsData).find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#F5F0EB] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/productos"
            className="inline-block text-[#8B4513]/80 hover:text-[#8B4513] mb-8"
          >
            ← Volver a Productos
          </Link>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48 md:h-[400px] w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>

            <div className="p-8">
              <h1 className="text-4xl font-bold text-[#8B4513]/90 mb-6">
                {product.title}
              </h1>

              <div className="prose prose-brown max-w-none">
                <p className="text-lg text-[#8B4513]/80 mb-4">
                  {product.description}
                </p>
                <p className="text-[#8B4513]/80 mb-8">{product.details}</p>

                <h2 className="text-2xl font-semibold text-[#8B4513]/90 mb-4">
                  Aplicaciones
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-[#8B4513]/80">
                  {product.applications.map((app, index) => (
                    <li key={index} className="text-lg">
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
