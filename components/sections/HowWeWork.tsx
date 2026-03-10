"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileSearch, RefreshCw, Rocket, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    number: "01",
    title: "Diagnóstico completo da sua empresa",
    description:
      "Análise profunda da situação financeira atual, identificando pontos fortes e oportunidades de melhoria.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Estruturação da estratégia e do plano financeiro",
    description:
      "Desenvolvimento de um plano personalizado alinhado aos seus objetivos de crescimento.",
    icon: Target,
  },
  {
    number: "03",
    title: "Implementação",
    description:
      "Execução prática das estratégias definidas com acompanhamento dedicado.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Acompanhamento e revisões",
    description:
      "Monitoramento contínuo dos resultados e ajustes para garantir o sucesso.",
    icon: RefreshCw,
  },
];

export function HowWeWork() {
  return (
    <section className="bg-black py-24">
      <MaxWidthWrapper>
        <div className="mb-16 text-center">
          <h2 className="font-semibold text-white text-4xl md:text-5xl tracking-tight">
            Como Trabalhamos
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Um processo estruturado para transformar a saúde financeira da sua
            empresa.
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.number}
                className="relative flex flex-col bg-zinc-900 border-zinc-800 hover:border-amber-500/40 text-white transition-colors"
              >
                <CardHeader className="space-y-4 min-h-[140px]">
                  <div className="flex justify-between items-center">
                    <Badge
                      variant="secondary"
                      className="bg-accent font-semibold text-black"
                    >
                      Etapa {step.number}
                    </Badge>

                    <div className="flex justify-center items-center bg-amber-500/10 rounded-xl w-12 h-12">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  <CardTitle className="text-lg line-clamp-2 leading-snug">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <Separator className="bg-zinc-800" />

                <CardContent className="flex-1 pt-6">
                  <CardDescription className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
