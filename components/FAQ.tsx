'use client';
import {
  Banknote,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  ClipboardList,
  Gavel,
  Handshake,
  MapPin,
  UserCheck,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';

const faqs = [
  {
    icon: Handshake,
    question: 'O escritório atua apenas judicialmente?',
    answer:
      'Não. Atuamos também na negociação direta com os credores, sempre que essa for a melhor solução.',
  },
  {
    icon: Banknote,
    question: 'Vocês atendem só casos com bancos?',
    answer:
      'Não. Atuamos em dívidas com bancos, financeiras, fornecedores, particulares e fintechs, desde que envolvam endividamento ou risco patrimonial.',
  },
  {
    icon: CircleHelp,
    question: 'Tenho várias dívidas e não sei por onde começar. Como funciona?',
    answer:
      'Fazemos um diagnóstico completo e montamos um plano estratégico para o seu caso, com soluções combinadas: negociação, revisão judicial, suspensão de débitos, entre outras.',
  },
  {
    icon: Building2,
    question: 'Atendem empresas ou só pessoas físicas?',
    answer: 'Atendemos pessoas físicas, empresas e produtores rurais.',
  },
  {
    icon: Users,
    question: 'Quem são os profissionais do escritório?',
    answer:
      'Advogados especializados em Direito Bancário e civil, com experiência no sistema financeiro e apoio técnico de especialistas da área contábil e econômica.',
  },
  {
    icon: Briefcase,
    question: 'O escritório apenas orienta ou atua diretamente?',
    answer:
      'Atuamos diretamente. Cuidamos das tratativas e processos por você. O cliente participa só quando necessário.',
  },
  {
    icon: Gavel,
    question: 'Fui citado. Posso esperar?',
    answer: 'Não. O prazo para defesa é curto. A demora pode gerar penhora e bloqueio de contas.',
  },
  {
    icon: UserCheck,
    question: 'Vou precisar ir à audiência?',
    answer:
      'Na maioria dos casos, não. Se for necessário, avisamos com antecedência e acompanhamos você.',
  },
  {
    icon: MapPin,
    question: 'O escritório atende só no Rio Grande do Sul?',
    answer:
      'Não. Embora nossa base seja no RS, atendemos clientes de todo o Brasil. A maior parte dos casos é resolvida à distância. Se preciso, vamos até você.',
  },
  {
    icon: ClipboardList,
    question: 'O atendimento tem custo?',
    answer:
      'Antes de qualquer cobrança, buscamos compreender sua realidade e avaliar juridicamente o seu caso. Só após essa etapa é que os honorários são discutidos, com clareza e personalização conforme a demanda.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="scroll-my-24 bg-gray-50 py-12 md:py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl  font-medium text-black text-center mb-12 md:mb-16">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="bg-white rounded-xl shadow-sm cursor-pointer transition hover:shadow-md p-4"
              aria-expanded={openIndex === index}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' ? toggle(index) : null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="inline-block rounded-xl p-3 bg-gray-100 border border-gray-200">
                    <faq.icon className="text-gray-600 w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-gray-500 w-5 h-5" />
                )}
              </div>
              {openIndex === index && (
                <p className="ml-16 mt-2 text-gray-600 text-base transition-all duration-300 ease-in-out">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

          <div className="text-center mt-16">
            <Button
              href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado"
              variant="secondary"
              size="md"
              className="max-sm:w-full"
            >
              Falar com um Advogado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
