import Link from 'next/link';

export const WhatsappButton = () => {
  return (
    <Link
      href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-transparent rounded-full transition"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
      <img
        src={'/button.svg'}
        alt="Botão do WhatsApp"
      />
    </Link>
  );
};
