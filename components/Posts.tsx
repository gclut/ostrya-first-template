import PostCard from '@/components/ui/PostCard';
import { posts } from '@/data/posts';
import { Button } from './ui/Button';

export function Posts() {
  return (
    <section
      id="posts"
      className="scroll-my-24 bg-white py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center text-black font-medium pb-20">Insights Jurídicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.slug.trim()}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </div>

        <div className='text-center mt-10'>
          <Button
            href="https://wa.me/5551989905849?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado"
            variant="secondary"
            size="md"
            className="max-sm:w-full "
          >
            Falar com um Advogado
          </Button>
        </div>
      </div>
    </section>
  );
}
