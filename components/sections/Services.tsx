"use client";

import {
  AlertCircle,
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  FileCheck,
  Handshake,
  LineChart,
  Target,
  TrendingDown,
  Wallet,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/constants/data";

type CardItem = {
  title: string;
  icon: React.ElementType;
};

type Variant = "dark" | "light";

const forWhoContent: CardItem[] = [
  {
    title: "Cresceram muito e sentem que perderam o controle financeiro",
    icon: AlertCircle,
  },
  {
    title: "Não sabem se estão ganhando ou perdendo dinheiro",
    icon: TrendingDown,
  },
  {
    title: "Estão preocupadas com um endividamento crescente",
    icon: AlertTriangle,
  },
  {
    title: "Entendem que devem tomar melhores decisões financeiras",
    icon: LineChart,
  },
  {
    title: "Precisam reestruturar as suas finanças",
    icon: FileCheck,
  },
  {
    title:
      "Estão crescendo e buscam um suporte para decisões de investimento e captação de recursos",
    icon: Wallet,
  },
];

const weDeliverContent: CardItem[] = [
  { title: "Diagnóstico financeiro completo", icon: FileCheck },
  { title: "Modelo de desempenho financeiro gerencial", icon: BarChart3 },
  { title: "Orçamento financeiro", icon: Target },
  { title: "Avaliação de projetos de investimento", icon: Wallet },
  { title: "Renegociação de dívidas", icon: Handshake },
  { title: "Valuation – avaliação da empresa", icon: ArrowUpRight },
];

type SectionCardProps = {
  item: CardItem;
  variant: Variant;
};

function SectionCard({ item, variant }: SectionCardProps) {
  const Icon = item.icon;
  const isDark = variant === "dark";

  return (
    <Card
      className={`group rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "bg-black border-white/10 text-white"
          : "bg-white border-border text-foreground"
      }`}
    >
      <CardContent className="flex flex-col justify-between p-8 h-full min-h-[200px]">
        <div>
          <div
            className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${
              isDark ? "bg-accent/10" : "bg-accent-50"
            }`}
          >
            <Icon className="w-6 h-6 text-accent" />
          </div>

          <h3 className="font-semibold text-lg leading-snug">{item.title}</h3>
        </div>

        <Button
          asChild
          variant="link"
          className={cn(
            "mt-6 p-0 h-auto font-medium text-accent hover:text-accent/90",
          )}
        >
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Fale com um especialista
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

type CardsSectionProps = {
  title: string;
  items: CardItem[];
  variant: Variant;
  background: string;
  titleColor: string;
};

function CardsSection({
  title,
  items,
  variant,
  background,
  titleColor,
}: CardsSectionProps) {
  return (
    <div className={`${background} py-24`}>
      <MaxWidthWrapper>
        <div className="mb-16 text-center">
          <h2 className={`font-normal text-3xl md:text-5xl ${titleColor}`}>
            {title}
          </h2>
        </div>

        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <SectionCard key={index} item={item} variant={variant} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="scroll-my-24">
      <CardsSection
        title="Esta consultoria é para empresas e produtores rurais que:"
        items={forWhoContent}
        variant="dark"
        background="bg-[#565656]"
        titleColor="text-white"
      />

      <CardsSection
        title="Nossas Soluções"
        items={weDeliverContent}
        variant="light"
        background="bg-[#F5F5F5]"
        titleColor="text-black"
      />
    </section>
  );
}

export default Services;
