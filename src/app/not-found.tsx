"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0EB]">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-[#8B4513]/90">404</h1>
        <p className="text-xl text-[#8B4513]/70 mb-8">
          ¡Ups! Página no encontrada
        </p>
        <Link
          href="/"
          className="inline-block bg-[#8B4513]/90 hover:bg-[#8B4513] text-white font-medium py-3 px-6 rounded-md transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
