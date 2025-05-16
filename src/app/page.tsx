"use client";

import { ArrowDown, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="bg-[#F5F0EB]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#8B4513]/10 to-[#8B4513]/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B4513]/90 mb-6 font-heading">
            MOLIENDA PERRICONE
          </h1>
          <p className="text-xl md:text-2xl text-[#8B4513]/80 max-w-3xl mx-auto mb-8">
            Más de 50 años de excelencia en la molienda de minerales
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/productos"
              className="bg-[#8B4513]/90 hover:bg-[#8B4513] text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Ver Productos
            </Link>
            <Link
              href="/contacto"
              className="bg-white hover:bg-[#8B4513]/5 text-[#8B4513]/90 font-medium py-3 px-6 rounded-lg border border-[#8B4513]/30 transition-colors"
            >
              Contactar
            </Link>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-8 w-8 text-[#8B4513]/70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#8B4513]/90 text-center mb-8">
              Nuestra Historia
            </h2>
            <div className="space-y-6">
              <p className="text-[#8B4513]/80 leading-relaxed">
                Perricone es una empresa con más de 50 años de trayectoria
                ininterrumpida en el mercado de la minería, que se especializa
                en la molienda de minerales tales como dolomitas, carbonatos,
                cuarzos y dragonitas, de los que se extraen granitos y
                marmolinas en sus distintas granulometrías, así como también
                escallas a partir del acerrado de bochones.
              </p>
              <p className="text-[#8B4513]/80 leading-relaxed">
                Desde su fundación en el año 1964 por Miguel Perricone, un
                visionario italiano que desde muy temprana edad forjó su amor
                por el rubro, instaló la molienda en la ciudad de Don Torcuato,
                abasteciendo al mercado cada vez más demandante con granitos,
                marmolinas y escallas provenientes de distintos yacimientos y
                canteras, provenientes de más de 10 provincias de la República
                Argentina.
              </p>
              <p className="text-[#8B4513]/80 leading-relaxed">
                En la actualidad la empresa continúa con la misma dedicación y
                esmero que perdura a través de las generaciones venideras
                ampliando la variedad de productos tales como cuarzo, mica,
                fibras, aditivos, cemento blanco, abrasivos, pigmentos, etc.
                Abasteciendo y satisfaciendo la amplia demanda del mercado así
                como también brindándole asesoramiento y trato personalizado a
                cada cliente, generando un vínculo de confianza muy valorado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="bg-[#8B4513]/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#8B4513]/90 text-center mb-8">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Products cards */}
            {[
              "Granitos",
              "Marmolinas",
              "Escallas",
              "Cuarzos",
              "Ferrites",
              "Otros",
            ].map((product, index) => (
              <Link
                key={index}
                href={`/productos/${product.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <div className="h-40 bg-[#8B4513]/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#8B4513]/30 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {product.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#8B4513]/90 mb-2 group-hover:text-[#8B4513] transition-colors">
                    {product}
                  </h3>
                  <p className="text-[#8B4513]/70">
                    Descubra nuestra amplia variedad de {product.toLowerCase()}{" "}
                    de alta calidad.
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/productos"
              className="bg-[#8B4513]/90 hover:bg-[#8B4513] text-white font-medium py-3 px-8 rounded-lg inline-flex items-center transition-colors"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#8B4513]/90 mb-4">
              Contacte con Nosotros
            </h2>
            <p className="text-xl text-[#8B4513]/70 mb-8">
              Estamos aquí para atender sus consultas y necesidades
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
              <div className="p-6 bg-[#8B4513]/5 rounded-lg">
                <Phone className="h-10 w-10 text-[#8B4513]/70 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[#8B4513]/90">
                  Teléfono
                </h3>
                <p className="text-[#8B4513]/80">4748-1904</p>
                <p className="text-[#8B4513]/80">WhatsApp: 11 3292 9169</p>
              </div>
              <div className="p-6 bg-[#8B4513]/5 rounded-lg">
                <Mail className="h-10 w-10 text-[#8B4513]/70 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[#8B4513]/90">
                  Email
                </h3>
                <p className="text-[#8B4513]/80">
                  moliendaperricone@hotmail.com
                </p>
              </div>
              <div className="p-6 bg-[#8B4513]/5 rounded-lg">
                <Clock className="h-10 w-10 text-[#8B4513]/70 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[#8B4513]/90">
                  Horarios
                </h3>
                <p className="text-[#8B4513]/80">
                  Lun-Vie: 7:30-11:30, 13:00-17:00
                </p>
                <p className="text-[#8B4513]/80">Sáb: 7:30-11:30</p>
              </div>
            </div>
            <Link
              href="/contacto"
              className="bg-[#8B4513]/90 hover:bg-[#8B4513] text-white font-medium py-3 px-8 rounded-lg inline-flex items-center transition-colors"
            >
              Contáctenos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
