"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#8B4513]/90 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              MOLIENDA PERRICONE
            </h3>
            <p className="text-white/80 mb-4">
              Más de 50 años de trayectoria ininterrumpida en el mercado de la
              minería, especializados en la molienda de minerales.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social media icons could go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-white/60" />
                <span>
                  Riobamba 1618, Don Torcuato, Buenos Aires, Argentina
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-white/60" />
                <span>Tel: 4748-1904</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-white/60" />
                <span>WhatsApp: 11 3292 9169</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-white/60" />
                <span>moliendaperricone@hotmail.com</span>
              </li>
              <li className="flex items-start mt-4">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-white/60" />
                <div>
                  <p>Lunes a viernes: 7:30 a 11:30 y 13:00 a 17:00</p>
                  <p>Sábados: 7:30 a 11:30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
          <p>
            © {new Date().getFullYear()} Molienda Perricone. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
