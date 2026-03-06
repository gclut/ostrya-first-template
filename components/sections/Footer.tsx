"use client";

import { Copyright, Mail, MapPin, Phone } from "lucide-react";

import Link from "next/link";
import Logo from "@/public/logo.png";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Insights empresariais", href: "/#posts" },
];

export const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 text-gray-300">
      <div className="gap-12 grid grid-cols-1 md:grid-cols-3 mx-auto px-4 max-w-screen-xl">
        {/* Logo e descrição */}
        <Link href="/">
          <img
            src={Logo.src}
            alt="Logo da L&S Advocacia"
            className="brightness-0 invert mb-4 w-26 h-12"
          />
        </Link>

        {/* Navegação */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Navegação</h4>
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
          <h4 className="mb-4 font-semibold text-white">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Joaquim Pedro Soares, 560 – Sala 402, Novo
              Hamburgo/RS.
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> (51) 99998-4375
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> ostrya@ostrya.com.br
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="mt-12 pt-6 border-white/10 border-t text-gray-300 text-sm text-center">
        <Copyright size={16} /> Ostrya Capital {new Date().getFullYear()}. Todos
        os direitos reservados.
      </div>
    </footer>
  );
};
