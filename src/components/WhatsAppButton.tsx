"use client";

import { Phone } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({
  phoneNumber = "1234567890",
  message = "Hola, me gustaría obtener más información",
}: WhatsAppButtonProps) => {
  // Eliminar caracteres no numéricos del número de teléfono
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");

  // Crear URL de WhatsApp
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
};

export default WhatsAppButton;
