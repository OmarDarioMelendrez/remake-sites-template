"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="bg-[#F5F0EB]">
      <section className="bg-[#8B4513]/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#8B4513]/90 text-center mb-4">
            Contacto
          </h1>
          <p className="text-center text-lg text-[#8B4513]/70 mb-12">
            Estamos aquí para atender sus consultas y necesidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto mb-12">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Phone className="h-10 w-10 text-[#8B4513]/70 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#8B4513]/90">
                Teléfono
              </h3>
              <p className="text-[#8B4513]/80">4748-1904</p>
              <a
                href="https://wa.me/5491132929169"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B4513]/80 hover:text-[#8B4513] transition-colors underline"
              >
                WhatsApp: 11 3292 9169
              </a>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Mail className="h-10 w-10 text-[#8B4513]/70 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#8B4513]/90">
                Email
              </h3>
              <p className="text-[#8B4513]/80">moliendaperricone@hotmail.com</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-10 w-10 text-[#8B4513]/70 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-[#8B4513]/90">
                Horarios
              </h3>
              <p className="text-[#8B4513]/80">Lunes a viernes:</p>
              <p className="text-[#8B4513]/80">7:30 a 11:30 y 13:00 a 17:00</p>
              <p className="text-[#8B4513]/80">Sábados: 7:30 a 11:30</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#8B4513]/90 mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-[#8B4513]/70">
                <MapPin className="inline-block h-5 w-5 mr-1" />
                Riobamba 1618, Don Torcuato, Buenos Aires, Argentina
              </p>
            </div>

            <div className="h-[600px] bg-[#8B4513]/10 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.014559124578!2d-58.652650023413604!3d-34.49115997259471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcba0145c152a1%3A0x7a32a6ca9384a1a8!2sRiobamba%201618%2C%20B1611DQR%20Don%20Torcuato%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1716089249115!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Molienda Perricone"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
