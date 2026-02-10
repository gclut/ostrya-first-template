"use client";
import member01 from "@/public/jorge.svg";
import member02 from "@/public/geile.jpg";

import { Button } from "./ui/Button";

const team = [
  {
    name: "Jorge Ferreira, CFA",
    role: `Economista - Consultor Financeiro`,
    img: member01.src,
    alt: "Jorge Ferreira",
    text: `Economista, mestre em Finanças Corporativas (Unisinos) e CFA charterholder. Possui experiência de 15 anos no mercado financeiro e de capitais. Sócio fundador da Ostrya Investimentos e Ostrya capital. Professor de finanças, economia e gestão em cursos de Graduação, MBA e Mestrado, na Unisinos. Professor de Economia na CFA Society Brazil. Trabalhou com restruturação de crédito corporativo entre 2016 e 2020 e foi Superintendente Executivo dos Comitês de Crédito do Banrisul entre 2020 e 2023. Participou da análise, concessão e restruturação de crédito para as maiores empresas do sul do país. Avaliação de Empresas (Insper), Restruturação de Empresas (Insper) e Fusões e Aquisições (Insper). Consultor de Títulos e Valores Mobiliários e Gestor de Carteiras (CVM). Analista de títulos e valores mobiliários (APIMEC)`,
    reverse: false,
  },
  {
    name: "Geile Lüttjohann",
    role: `Rio Grande do Sul - OAB/RS 102.625 <br /> Santa Catarina - OAB/SC 77.445-A`,
    img: member02.src,
    alt: "Geile Lüttjohann",
    text: `Advogada pós-graduada em Direito Bancário, com mais de 15 anos de experiência no setor financeiro, tendo atuado como Gerente Executiva de Análise de Crédito do Banrisul. Ao longo de sua trajetória, desenvolveu sólida expertise em crédito, cobrança, renegociação de dívidas e gestão de risco. É certificada em Crédito e Risco (FGV), Gestão Financeira e Desempenho Empresarial (Insper), Contabilidade Financeira (FGV), Sustentabilidade Corporativa e Regulação (FGV) e Falência e Recuperação de Empresas (FGV). Possui, ainda, qualificação em Crédito para o Agronegócio, além das certificações ABECIP CA-300 (crédito imobiliário), CPA-20 (voltada à distribuição de produtos de investimento) e FBB100 (crédito consignado, CDC e financiamento de veículos).`,
    reverse: true,
  },
];

export const Team = () => {
  return (
    <section id="equipe" className="scroll-my-24 bg-white py-24">
      <div className="max-w-screen-xl mx-auto px-4 text-black">
        <h2 className="text-4xl md:text-5xl text-center font-medium pb-20">
          Conheça Nossa Equipe
        </h2>

        <div className="space-y-32">
          {team.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                member.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-10 items-center`}
            >
              <img
                src={member.img}
                alt={member.alt}
                className="w-full md:w-1/2 rounded-xl object-cover shadow-sm"
              />

              <div className="w-full">
                <h3 className="text-2xl md:text-3xl font-light pb-2">
                  {member.name}
                </h3>
                <span
                  className="text-lg md:text-xl text-black font-semibold block"
                  dangerouslySetInnerHTML={{ __html: member.role }}
                ></span>
                <p className="text-gray-700 text-base leading-relaxed mt-6 whitespace-pre-line">
                  {member.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <Button
            href="https://wa.me/5551999984375?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20consultor."
            variant="secondary"
            size="md"
            className="max-sm:w-full"
          >
            Falar com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};
