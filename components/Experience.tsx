import { BadgeCheck, FileText, HandCoins, Users } from "lucide-react";

const experiences = [
  {
    icon: BadgeCheck,
    title: "	Experiência de mais de uma década em finanças empresariais",
  },
  {
    icon: Users,
    title: "Serviço customizado para as suas necessidades",
  },
  {
    icon: FileText,
    title: "Equipe multidisciplinar",
  },
];

export function Experience() {
  return (
    <section id="experience" className="pb-24 bg-black text-white">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map((experience, index) => (
            <article
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <experience.icon className="w-10 h-10" aria-hidden="true" />
              <p className="font-light text-2xl mt-4">{experience.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
