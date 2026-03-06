"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import member01 from "@/public/jorge.svg";
import member02 from "@/public/geile.jpg";
import { whatsappLink } from "@/constants/data";

const team = [
  {
    name: "Jorge Ferreira, CFA",
    role: ["Economista", "Consultor Financeiro"],
    credentials: "CFA Charterholder",
    img: member01.src,
    alt: "Jorge Ferreira",
    text: `Economista, mestre em Finanças Corporativas (Unisinos) e CFA charterholder. Possui experiência de 15 anos no mercado financeiro e de capitais. Sócio fundador da Ostrya Investimentos e Ostrya capital. Professor de finanças, economia e gestão em cursos de Graduação, MBA e Mestrado, na Unisinos. Professor de Economia na CFA Society Brazil. Trabalhou com restruturação de crédito corporativo entre 2016 e 2020 e foi Superintendente Executivo dos Comitês de Crédito do Banrisul entre 2020 e 2023. Participou da análise, concessão e restruturação de crédito para as maiores empresas do sul do país. Avaliação de Empresas (Insper), Restruturação de Empresas (Insper) e Fusões e Aquisições (Insper). Consultor de Títulos e Valores Mobiliários e Gestor de Carteiras (CVM). Analista de títulos e valores mobiliários (APIMEC)`,
    reverse: false,
  },
  {
    name: "Geile Lüttjohann",
    role: ["Advogada"],
    credentials: "OAB/RS 102.625 · OAB/SC 77.445-A",
    img: member02.src,
    alt: "Geile Lüttjohann",
    text: `Advogada pós-graduada em Direito Bancário, com mais de 15 anos de experiência no setor financeiro, tendo atuado como Gerente Executiva de Análise de Crédito do Banrisul. Ao longo de sua trajetória, desenvolveu sólida expertise em crédito, cobrança, renegociação de dívidas e gestão de risco. É certificada em Crédito e Risco (FGV), Gestão Financeira e Desempenho Empresarial (Insper), Contabilidade Financeira (FGV), Sustentabilidade Corporativa e Regulação (FGV) e Falência e Recuperação de Empresas (FGV). Possui, ainda, qualificação em Crédito para o Agronegócio, além das certificações ABECIP CA-300 (crédito imobiliário), CPA-20 (voltada à distribuição de produtos de investimento) e FBB100 (crédito consignado, CDC e financiamento de veículos).`,
    reverse: true,
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-24 scroll-my-24">
      <div className="mx-auto px-4 max-w-screen-xl">
        <div className="mb-20 text-center">
          <h2 className="font-semibold text-4xl md:text-5xl tracking-tight">
            Conheça Nossa Equipe
          </h2>
          <p className="mt-4 text-muted-foreground">
            Experiência técnica e atuação estratégica em finanças e direito.
          </p>
        </div>

        <div className="space-y-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border overflow-hidden transition-shadow"
            >
              <CardContent className="p-8">
                <div
                  className={`flex flex-col gap-10 items-start ${
                    member.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex justify-center w-full md:w-1/3">
                    <Avatar className="rounded-2xl w-48 h-48">
                      <AvatarImage asChild src={member.img}>
                        <img
                          src={member.img}
                          alt={member.alt}
                          width={400}
                          height={400}
                          className="border rounded-full object-cover"
                        />
                      </AvatarImage>
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="space-y-4 w-full md:w-2/3">
                    <div>
                      <h3 className="font-semibold text-2xl md:text-3xl">
                        {member.name}
                      </h3>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {member.role.map((r, i) => (
                          <Badge key={i} variant="secondary">
                            <span>{r}</span>
                          </Badge>
                        ))}
                      </div>

                      <p className="mt-2 text-muted-foreground text-sm">
                        {member.credentials}
                      </p>
                    </div>

                    <Separator />

                    <p className="max-w-prose text-muted-foreground text-justify leading-relaxed whitespace-pre-line">
                      {member.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            asChild
            size="lg"
            variant="default"
            className="bg-accent max-sm:w-full"
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Falar com um especialista
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
