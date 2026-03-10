"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { experiences } from "@/data/experiences";
import { whatsappLink } from "@/constants/data";

function HeroHeader() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight">
        Especialistas em{" "}
        <span className="text-accent">Finanças Empresariais</span>
      </h1>

      <p className="max-w-2xl text-gray-300 text-lg">
        Experiência e conhecimento estratégico em finanças corporativas para
        estruturar, proteger e potencializar o crescimento da sua empresa.
      </p>

      <HeroActions />
    </div>
  );
}

function HeroActions() {
  return (
    <div className="flex sm:flex-row flex-col gap-4">
      <Button size="lg" asChild className="gap-2">
        <Link href={whatsappLink} rel="noopener noreferrer" target="_blank">
          Consultar agora
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </Button>

      <Button size="lg" variant="secondary" asChild className="gap-2">
        <Link href={whatsappLink} rel="noopener noreferrer" target="_blank">
          Agendar consulta
          <Calendar className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}
export function Hero() {
  return (
    <main className="flex items-center bg-black pt-20 min-h-screen text-white">
      <MaxWidthWrapper>
        <section className="flex flex-col justify-center items-center gap-16 py-24 text-center">
          <HeroHeader />

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur border-white/10"
                >
                  <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                    <Icon className="w-8 h-8 text-accent" aria-hidden="true" />
                    <p className="font-medium text-white text-lg">
                      {experience.title}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
