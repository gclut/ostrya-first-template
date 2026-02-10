'use client';

import { Quote } from 'lucide-react';
import { Button } from './ui/Button';

const testimonials = [
  {
    name: 'Leopoldo S.',
    text: 'Já tinha feito 2 vezes a negociação com a cooperativa e esse ano eles não aceitavam mais renegociar. O escritório conseguiu uma nova negociação e não perdi meu terreno, que estava em garantia.',
  },
  {
    name: 'Carmem M.',
    text: 'Eu sei que vocês são excelentes, que eu não poderia estar melhor amparada. Confio plenamente em vocês.',
  },
  {
    name: 'Raquel L.',
    text: 'São muito sérios e me tranquilizaram muito, nunca fiquei sem resposta até no final de semana me respondiam hoje já consigo dormir em paz.',
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-black py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4 text-white">
        <h2 className="text-4xl md:text-5xl text-center font-medium pb-20">
          O que nossos clientes dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <Quote className="text-accent w-6 h-6 mb-4" />
              <p className="text-gray-700 text-base leading-relaxed mb-6">“{testimonial.text}”</p>
              <span className="text-sm font-semibold text-gray-900 block">
                — {testimonial.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <Button
            href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado"
            variant="outline"
            size="md"
            className="max-sm:w-full"
          >
            Falar com um Advogado
          </Button>
        </div>
      </div>
    </section>
  );
};
