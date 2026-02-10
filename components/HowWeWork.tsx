import { FileSearch, Target, Rocket, RefreshCw } from "lucide-react";

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

const HowWeWork = () => {
  return (
    <section className="bg-black py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como Trabalhamos
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Um processo estruturado para transformar a saúde financeira da sua
            empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-white/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute -top-4 left-8">
                <span className="bg-amber-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                  Etapa {step.number}
                </span>
              </div>

              <div className="mt-4 mb-6">
                <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                  <step.icon className="w-7 h-7 text-amber-400" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
