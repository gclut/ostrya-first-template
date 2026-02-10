"use client";

import Link from "next/link";
import { BadgeCheck, Copyright, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/public/logo.png";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Atualidades", href: "#atualidades" },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo e descrição */}
        <Link href="/">
          <img
            src={Logo.src}
            alt="Logo da L&S Advocacia"
            className="invert brightness-0 mb-4 w-26 h-12"
          />
        </Link>

        {/* Navegação */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Joaquim Pedro Soares, 560 – Sala 402, Novo
              Hamburgo/RS.
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> (51) 98990-5849
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> ...
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-300">
        <Copyright size={16} /> Ostrya Capital {new Date().getFullYear()}. Todos
        os direitos reservados.
      </div>
    </footer>
  );
};
