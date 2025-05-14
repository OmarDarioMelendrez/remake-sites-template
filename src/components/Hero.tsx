"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Título Principal del Sitio
            </h1>
            <p className="text-lg text-black mb-8">
              Una breve descripción de los servicios que ofrece la empresa. Este
              texto debe ser conciso y claro, explicando el valor que aporta a
              los clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-black">
              <Button asChild size="lg" variant="outline">
                <Link href="/servicios">Nuestros Servicios</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/turnos">Solicitar Turno</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96">
            <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden">
              {/* Main image would go here */}
              <div className="w-full h-full flex items-center justify-center text-black">
                Imagen Principal
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Characteristics */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Característica 1
            </h3>
            <p className="text-black">
              Descripción breve de la primera característica o beneficio
              destacado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Característica 2
            </h3>
            <p className="text-black">
              Descripción breve de la segunda característica o beneficio
              destacado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary text-xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Característica 3
            </h3>
            <p className="text-black">
              Descripción breve de la tercera característica o beneficio
              destacado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
