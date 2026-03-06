import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { posts } from "@/data/posts";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams(): { slug: string }[] {
  return posts.map((post) => ({
    slug: encodeURIComponent(post.slug),
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 p-8 w-full min-h-screen text-3xl text-center">
        <h1 className="font-bold text-4xl">Post não encontrado.</h1>
        <Link href="/" className="underline">
          Voltar para home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white mt-24 py-20">
      <div className="mx-auto px-4 max-w-3xl">
        {/* imagem do post */}
        {post.image && (
          <div className="mb-10 border rounded-xl overflow-hidden">
            <img
              src={post.image.src ?? "#"}
              alt={post.image.alt ?? "#"}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        <h1 className="mb-3 font-bold text-black text-3xl md:text-4xl">
          {post.title}
        </h1>

        <p className="mb-10 text-muted-foreground text-sm">Por {post.author}</p>

        <article className="max-w-none prose lg:prose-lg">
          {post.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p key={index} className="text-neutral-800 leading-relaxed">
                  {block.text}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2 key={index} className="mt-10 mb-4 font-semibold text-2xl">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="space-y-2 list-disc list-inside">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </article>

        <Separator className="my-10" />
      </div>
    </section>
  );
}
