export interface Project {
  title: string;
  company: string;
  duration: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "RDM - Remote Desktop Manager",
    company: "SYSco EDV",
    duration: "Aug 2023 - Jun 2024",
    description: "Desktopanwendung zur Verwaltung von Fernwartungen für SYSco EDV. Entwickelt mit C#, WPF und DevExpress im Rahmen der Diplomarbeit.",
    image: "/projects/ProjectAward1.jpg", // Add the image path
  },
  {
    title: "PlanITup",
    company: "ABF GmbH",
    duration: "Jun 2022 - Feb 2024",
    description: "Webanwendung zur Optimierung von Projektorganisationen, entwickelt mit OpenUI5 im Rahmen der HTL-Ausbildung.",
    image: "/projects/ProjectAward2.jpg", // Add the image path
  },
];
