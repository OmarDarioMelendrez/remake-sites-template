"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    id: "service-1",
    title: "Servicio 1",
    description:
      "Descripción breve del servicio 1. Explica en qué consiste y qué beneficios ofrece.",
    icon: "🛠️",
  },
  {
    id: "service-2",
    title: "Servicio 2",
    description:
      "Descripción breve del servicio 2. Explica en qué consiste y qué beneficios ofrece.",
    icon: "📊",
  },
  {
    id: "service-3",
    title: "Servicio 3",
    description:
      "Descripción breve del servicio 3. Explica en qué consiste y qué beneficios ofrece.",
    icon: "🔍",
  },
  {
    id: "service-4",
    title: "Servicio 4",
    description:
      "Descripción breve del servicio 4. Explica en qué consiste y qué beneficios ofrece.",
    icon: "📱",
  },
  {
    id: "service-5",
    title: "Servicio 5",
    description:
      "Descripción breve del servicio 5. Explica en qué consiste y qué beneficios ofrece.",
    icon: "💼",
  },
  {
    id: "service-6",
    title: "Servicio 6",
    description:
      "Descripción breve del servicio 6. Explica en qué consiste y qué beneficios ofrece.",
    icon: "🌐",
  },
];

const Services = ({ services = defaultServices }: ServicesProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios diseñados para satisfacer
            todas sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-black mb-6">{service.description}</p>
              <Button asChild variant="outline">
                <Link href={`/servicios#${service.id}`} className="text-black">
                  Más información
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/servicios" className="text-black">
              Ver todos los servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
