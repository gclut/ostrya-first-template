"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/public/logo.png";

const navbarItems = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Atualidades", href: "#posts" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-10">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <img
              src={Logo.src}
              alt="Logo da L&S Advocacia"
              className="w-26 h-12 invert brightness-0"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {navbarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white transition font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white px-5 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Fale Conosco <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Icon */}
          <button
            aria-label="Abrir menu"
            onClick={() => setIsOpen(true)}
            className="inline-flex lg:hidden p-2 hover:bg-white/10 rounded-md transition"
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white text-black shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 py-6">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-black transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center gap-2 border border-black rounded-full px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
            >
              Fale Conosco <ArrowRight size={16} />
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};
