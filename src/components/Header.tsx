"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between text-black">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Logo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="font-medium text-black hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/quienes-somos"
            className="font-medium text-black hover:text-primary transition-colors"
          >
            Quiénes Somos
          </Link>
          <Link
            href="/servicios"
            className="font-medium text-black hover:text-primary transition-colors"
          >
            Servicios
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium text-black hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/quienes-somos"
              className="font-medium text-black hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiénes Somos
            </Link>
            <Link
              href="/servicios"
              className="font-medium text-black hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
