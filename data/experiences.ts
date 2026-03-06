import { BadgeCheck, FileText, Users } from "lucide-react";

type Experience = {
  icon: any;
  title: string;
};

export const experiences: Experience[] = [
  {
    icon: BadgeCheck,
    title: "Experiência de mais de uma década em finanças empresariais",
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
