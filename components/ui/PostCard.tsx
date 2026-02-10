// components/PostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  slug: string;
  title: string;
}

export default function PostCard({ slug, title }: PostCardProps) {
  return (
    <div className=" border h-auto rounded-lg overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition">
      <div className=" bottom-0 h-full left-0 bg-white py-8 px-4">
        <h2 className="text-xl font-semibold text-black mb-4">{title}</h2>
        <Link
          href={`/posts/${slug}`}
          className="inline-flex items-center gap-2 hover:underline text-[#80411F] font-semibold"
        >
          Saiba mais <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
