"use client";

import { ArrowRight, Menu, X } from "lucide-react";

import { CTAButton } from "../custom/CTAButton";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { useState } from "react";
import { whatsappLink } from "@/constants/data";

const navbarItems = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Insights Empresariais", href: "/#posts" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 left-0 z-50 fixed bg-black shadow-md w-full text-white">
      <div className="mx-auto px-4 lg:px-10 max-w-screen-xl">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <img
              src={Logo.src}
              alt="Logo da L&S Advocacia"
              className="brightness-0 invert w-26 h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {navbarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="font-medium text-gray-300 hover:text-white transition"
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
            className="hidden lg:inline-flex items-center gap-2 hover:bg-white px-5 py-2 border border-white rounded-full font-semibold text-white hover:text-black text-sm transition"
          >
            Fale Conosco <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Icon */}
          <button
            aria-label="Abrir menu"
            onClick={() => setIsOpen(true)}
            className="lg:hidden inline-flex hover:bg-white/10 p-2 rounded-md transition"
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="z-40 fixed inset-0 bg-black/50 backdrop-blur-sm"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white text-black shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-gray-200 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
            className="hover:bg-gray-100 p-2 rounded-md"
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
                className="block font-medium text-gray-700 hover:text-black text-base transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={whatsappLink}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 hover:bg-black mt-4 px-4 py-2 border border-black rounded-full font-semibold hover:text-white text-sm transition"
            >
              Fale Conosco <ArrowRight size={16} />
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};
