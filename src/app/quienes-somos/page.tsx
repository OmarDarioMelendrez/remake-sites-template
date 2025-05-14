import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Quiénes Somos | Template Multisitio",
  description: "Conoce más sobre nuestra empresa y nuestro equipo",
};

export default function QuienesSomosPage() {
  return (
    <main className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Quiénes Somos
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Conoce nuestra historia, misión, visión y los valores que nos
            definen como empresa.
          </p>
        </div>

        {/* History */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Nuestra Historia
              </h2>
              <p className="text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-black">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="relative h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Image would go here */}
              <div className="w-full h-full flex items-center justify-center text-black">
                Imagen de la Historia
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Nuestra Misión
              </h2>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Nuestra Visión
              </h2>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Calidad",
                description:
                  "Nos comprometemos a ofrecer servicios de la más alta calidad.",
              },
              {
                title: "Integridad",
                description:
                  "Actuamos con honestidad y transparencia en todo lo que hacemos.",
              },
              {
                title: "Innovación",
                description:
                  "Buscamos constantemente nuevas formas de mejorar nuestros servicios.",
              },
              {
                title: "Compromiso",
                description:
                  "Nos comprometemos plenamente con las necesidades de nuestros clientes.",
              },
              {
                title: "Respeto",
                description: "Tratamos a todos con dignidad y consideración.",
              },
              {
                title: "Excelencia",
                description:
                  "Nos esforzamos por alcanzar la excelencia en cada aspecto de nuestro trabajo.",
              },
            ].map((valor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {valor.title}
                </h3>
                <p className="text-bl">{valor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-black">Foto del Miembro {member}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    Nombre Apellido
                  </h3>
                  <p className="text-bl mb-4">Cargo / Posición</p>
                  <p className="text-black text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <WhatsAppButton phoneNumber="1234567890" />
    </main>
  );
}
