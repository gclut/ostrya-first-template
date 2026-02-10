import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/GoogleTagManager';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import favicon from '@/public/favicon.svg';
import { WhatsappButton } from '@/components/WhatsappButton';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Luttjohann & Soares Advocacia | Especialistas em Direito Bancário',
  description:
    'O escritório Luttjohann & Soares Advocacia Bancária, conta com Advogados Especialistas em Direito Bancário, com mais de 15 anos de experiência prática no setor financeiro. Nosso escritório atua na defesa de pessoas físicas e jurídicas em questões como renegociação de dívidas, revisão de contratos, defesa contra cobranças abusivas e defesa em ações de cobrança e execução de dívidas bancárias.',

  robots: 'index, follow',
  openGraph: {
    title: 'Luttjohann & Soares Advocacia',
    description:
      'O escritório Luttjohann & Soares Advocacia Bancária, conta com Advogados Especialistas em Direito Bancário, com mais de 15 anos de experiência prática no setor financeiro. Nosso escritório atua na defesa de pessoas físicas e jurídicas em questões como renegociação de dívidas, revisão de contratos, defesa contra cobranças abusivas e defesa em ações de cobrança e execução de dívidas bancárias.',
    url: 'https://luttjohannsoares.com.br',
    siteName: 'Luttjohann & Soares Advocacia',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: favicon.src,
  },
  alternates: {
    canonical: 'https://luttjohannsoares.com.br',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <GoogleTagManager />

        {/* Dados estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Luttjohann & Soares Advocacia',
              url: 'https://luttjohannsoares.com.br',
              logo: 'https://luttjohannsoares.com.br/logo.svg',
              description:
                'O escritório Luttjohann & Soares Advocacia Bancária, conta com Advogados Especialistas em Direito Bancário, com mais de 15 anos de experiência prática no setor financeiro. Nosso escritório atua na defesa de pessoas físicas e jurídicas em questões como renegociação de dívidas, revisão de contratos, defesa contra cobranças abusivas e defesa em ações de cobrança e execução de dívidas bancárias.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Tamandaré, 140, sala 901',
                addressLocality: 'Novo Hamburgo',
                addressRegion: 'RS',
                postalCode: '93410-150',
                addressCountry: 'BR',
              },
              telephone: '+55-51-98990-5849',
              email: 'contato@luttjohannsoares.com.br',
              founder: 'Luttjohann & Soares',
              priceRange: 'Consultar',
              areaServed: 'BR',
              openingHours: 'Mo-Fr 08:00-18:00',
              sameAs: ['https://www.instagram.com/luttjohannsoares.adv/'],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased scroll-smooth min-h-screen`}>
        <GoogleTagManagerNoScript />
        <div>
          <Navbar />
          <main>{children}</main>
          <WhatsappButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
