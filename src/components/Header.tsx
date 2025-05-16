"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleProductsMenu = () => setProductsOpen(!productsOpen);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Inicio", path: "/" },
    {
      name: "Productos",
      path: "/productos",
      dropdown: true,
      items: [
        { name: "Granitos", path: "/productos/granitos" },
        { name: "Marmolinas", path: "/productos/marmolinas" },
        { name: "Escallas", path: "/productos/escallas" },
        { name: "Cuarzos", path: "/productos/cuarzos" },
        { name: "Ferrites", path: "/productos/ferrites" },
        { name: "Otros", path: "/productos/otros" },
      ],
    },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[#8B4513]/90 font-heading font-bold text-xl md:text-2xl">
              MOLIENDA PERRICONE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    onClick={toggleProductsMenu}
                    className={cn(
                      "flex items-center px-1 py-2 text-base font-medium hover:text-[#8B4513]/90",
                      isActive(link.path)
                        ? "text-[#8B4513]/90 border-b-2 border-[#8B4513]/90"
                        : "text-[#8B4513]/90"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute hidden group-hover:block pt-2 left-0 min-w-[200px]">
                    <div className="bg-white shadow-lg rounded-md py-2 border border-gray-200">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-[#8B4513]/90 hover:bg-[#8B4513]/10 hover:text-[#8B4513]/90"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className={cn(
                    "px-1 py-2 text-base font-medium hover:text-[#8B4513]/90",
                    isActive(link.path)
                      ? "text-[#8B4513]/90 border-b-2 border-[#8B4513]/90"
                      : "text-[#8B4513]/90"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-[#8B4513]/90 hover:text-[#8B4513]/90"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="space-y-1">
                  <button
                    onClick={toggleProductsMenu}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-[#8B4513]/90"
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        productsOpen ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {productsOpen && (
                    <div className="pl-4 space-y-1 border-l-2 border-[#8B4513]/20 ml-3">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className="block px-3 py-2 text-sm text-[#8B4513]/90 hover:text-[#8B4513]/90"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className={cn(
                    "block px-3 py-2 text-base font-medium hover:text-[#8B4513]/90",
                    isActive(link.path)
                      ? "text-[#8B4513]/90 border-l-2 border-[#8B4513]/90 pl-2"
                      : "text-[#8B4513]/90"
                  )}
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
