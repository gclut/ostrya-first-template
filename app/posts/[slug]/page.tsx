import { posts } from '@/data/posts';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Tipagem conforme Next.js 15 — params agora é uma Promise
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Função para gerar os caminhos estáticos
export function generateStaticParams(): { slug: string }[] {
  return posts.map((post) => ({
    slug: encodeURIComponent(post.slug),
  }));
}

// Componente principal da página do post
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-bold text-red-600">Post não encontrado.</h1>
        <Link
          href="/"
          className="text-blue-600 underline"
        >
          Voltar para home
        </Link>
      </div>
    );
  }

  return (
    <section className="mt-24 py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl text-black font-bold mb-6">{post.title}</h1>
        <article
          className="prose prose-lg text-black"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Link
        href="/#posts"
        className="flex items-center justify-center w-full mt-16 hover:underline text-[#80411F] font-semibold gap-2"
      >
        Voltar ao Blog
        <ArrowRight className="w-4 h-4" />
      </Link>

      <div className="text-center mt-10">
        <Button
          href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado"
          variant="secondary"
          size="md"
          className="max-sm:w-full "
        >
          Falar com um Advogado
        </Button>
      </div>
    </section>
  );
}
