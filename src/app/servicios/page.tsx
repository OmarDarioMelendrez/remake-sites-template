import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Servicios | Template Multisitio",
  description: "Conoce todos nuestros servicios y cómo podemos ayudarte",
};

const services = [
  {
    id: "service-1",
    title: "Servicio 1",
    description:
      "Descripción detallada del servicio 1. Explica en qué consiste, qué beneficios ofrece y por qué los clientes deberían elegirlo.",
    icon: "🛠️",
  },
  {
    id: "service-2",
    title: "Servicio 2",
    description:
      "Descripción detallada del servicio 2. Explica en qué consiste, qué beneficios ofrece y por qué los clientes deberían elegirlo.",
    icon: "📊",
  },
  {
    id: "service-3",
    title: "Servicio 3",
    description:
      "Descripción detallada del servicio 3. Explica en qué consiste, qué beneficios ofrece y por qué los clientes deberían elegirlo.",
    icon: "🔍",
  },
  {
    id: "service-4",
    title: "Servicio 4",
    description:
      "Descripción detallada del servicio 4. Explica en qué consiste, qué beneficios ofrece y por qué los clientes deberían elegirlo.",
    icon: "📱",
  },
  {
    id: "service-5",
    title: "Servicio 5",
    description:
      "Descripción detallada del servicio 5. Explica en qué consiste, qué beneficios ofrece y por qué los clientes deberían elegirlo.",
    icon: "💼",
  },
  {
    id: "service-6",
    title: "Servicio 6",
    description:
      "Descripción detallada del servicio 6. Explica en qué consiste, qué beneficios ofrece y por qué los clientes deberían elegirlo.",
    icon: "🌐",
  },
];

export default function ServiciosPage() {
  return (
    <main className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Descubre nuestra amplia gama de servicios diseñados para satisfacer
            todas tus necesidades.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center scroll-mt-24`}
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-primary/10 w-40 h-40 rounded-full flex items-center justify-center">
                  <span className="text-6xl">{service.icon}</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  {service.title}
                </h2>
                <p className="text-black mb-6">{service.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Beneficios:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Primer beneficio importante del servicio.</li>
                    <li>Segundo beneficio importante del servicio.</li>
                    <li>Tercer beneficio importante del servicio.</li>
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-primary/5 p-10 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas más información?
          </h2>
          <p className="text-lg mb-6">
            Contáctanos para obtener más detalles sobre nuestros servicios y
            cómo podemos ayudarte.
          </p>
          <div className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Contactar Ahora
          </div>
        </div>
      </div>
      <WhatsAppButton phoneNumber="1234567890" />
    </main>
  );
}
