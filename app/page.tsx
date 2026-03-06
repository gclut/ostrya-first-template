import { Hero } from "@/components/sections/Hero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Posts } from "@/components/sections/Posts";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <Team />
      <Testimonials />
      <Posts />
    </>
  );
}
