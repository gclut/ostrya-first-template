import {
  ArrowUpRight,
  AlertCircle,
  TrendingDown,
  PiggyBank,
  LineChart,
  FileCheck,
  BarChart3,
  Target,
  Wallet,
  Scale,
} from "lucide-react";
import Link from "next/link";

type CardProps = {
  title: string;
  icon: React.ElementType;
};

const forWhoContent: CardProps[] = [
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
    icon: PiggyBank,
  },
  {
    title: "Entendem que devem tomar melhores decisões financeiras",
    icon: LineChart,
  },
];

const weDeliverContent: CardProps[] = [
  {
    title: "Diagnóstico financeiro completo",
    icon: FileCheck,
  },
  {
    title: "Modelo de desempenho financeiro gerencial",
    icon: BarChart3,
  },
  {
    title: "Orçamento financeiro",
    icon: Target,
  },
  {
    title: "Avaliação de projetos de investimento",
    icon: Wallet,
  },
  {
    title: "Renegociação de dívidas",
    icon: Scale,
  },
];

type SectionCardProps = {
  card: CardProps;
  variant: "dark" | "light";
};

const SectionCard = ({ card, variant }: SectionCardProps) => {
  const Icon = card.icon;
  const isDark = variant === "dark";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
        isDark
          ? "bg-black hover:bg-gray-800"
          : "bg-white border border-gray-100 hover:shadow-xl"
      }`}
    >
      <div className="flex flex-col h-full min-h-[180px] justify-between">
        <div>
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              isDark ? "bg-amber-400/10" : "bg-amber-50"
            }`}
          >
            <Icon className="w-6 h-6 text-amber-500" />
          </div>
          <h3
            className={`text-lg font-semibold leading-snug ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {card.title}
          </h3>
        </div>

        <Link
          href="/contato"
          className={`inline-flex items-center gap-2 text-sm font-medium mt-4 transition-colors ${
            isDark
              ? "text-amber-400 hover:text-amber-300"
              : "text-amber-600 hover:text-amber-700"
          }`}
        >
          Fale com um especialista
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isDark ? "bg-amber-400/10" : "bg-amber-100"
        }`}
      />
    </div>
  );
};

export const Services = () => {
  return (
    <section className="">
      {/* For who section */}
      <div className=" py-20 bg-[#565656]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-center text-3xl md:text-5xl mb-20  text-white font-bold">
              Esta consultoria é para empresas que:
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {forWhoContent.map((card, index) => (
              <SectionCard key={index} card={card} variant="dark" />
            ))}
          </div>
        </div>
      </div>

      {/* We deliver section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
      
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nossas Soluções
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weDeliverContent.map((card, index) => (
              <SectionCard key={index} card={card} variant="light" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
