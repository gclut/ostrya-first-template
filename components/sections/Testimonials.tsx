"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-[#F5F5F5] py-20 w-full min-h-[580px]">
      <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-4 mb-14 text-center">
          <span className="mb-4 text-muted-foreground text-sm uppercase">
            Depoimentos
          </span>
          <h2 className="font-normal text-3xl md:text-5xl tracking-tight">
            O que nossos clientes dizem
          </h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-[85%] md:basis-[60%] lg:basis-[30%]"
              >
                <Card className="shadow-sm rounded-2xl h-full overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <div className="flex flex-col justify-between p-8 h-[520px] lg:h-[570px] md:">
                      <div>
                        <Avatar className="mb-4">
                          <AvatarImage src={item.avatar} />
                          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-muted-foreground leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">{item.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
