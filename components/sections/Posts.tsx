"use client";

import { ArrowRight, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { posts } from "@/data/posts";

export function Posts() {
  return (
    <section id="posts" className="py-24 scroll-my-24">
      <div className="mx-auto px-4 max-w-screen-xl">
        <div className="mb-16 text-center">
          <h2 className="font-semibold text-4xl md:text-5xl tracking-tight">
            Insights empresariais
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground"></p>
        </div>

        {/* Grid */}
        <div className="gap-8 grid md:grid-cols-3">
          {posts.map((post, i) => (
            <Card key={i} className="shadow-none border rounded-lg overflow-hidden">
              <CardHeader>
                <img
                  src={post.image!.src ?? "#"}
                  alt={post.image!.alt ?? "#"}
                  className="border w-full h-[220px] object-cover"
                />
              </CardHeader>

              <div className="flex flex-col justify-between h-full">
                <CardContent className="pt-5">
                  <h3 className="font-semibold text-lg leading-snug">
                    {post.title}
                  </h3>
                </CardContent>

                <CardFooter className="flex justify-between my-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </div>

                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/posts/${post.slug}`}>
                      Saiba Mais <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
