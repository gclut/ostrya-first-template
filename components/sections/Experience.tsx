import { BadgeCheck, FileText, Users } from "lucide-react";

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
    <section id="experience" className="bg-black pb-24 text-white">
      <div className="mx-auto px-4 max-w-screen-xl">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <article
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              <experience.icon className="w-10 h-10" aria-hidden="true" />
              <p className="mt-4 font-light text-2xl">{experience.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
