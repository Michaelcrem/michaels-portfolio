export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  image: string;
  isWide?: boolean;
};

export const projects: Project[] = [
  {
    slug: "portfolio-os",
    title: "Medical Student Portfolio",
    description:
      "A lightweight, modular portfolio site showcasing a medical student’s experience and personal story.",
    year: "2026",
    image: "/projects/medical-portfolio-preview.png",
  },
  {
    slug: "workflow-automations",
    title: "Financial Site Design",
    description:
      "Silvant affiliate redesign, Virtus standards, and how I approach financial web experiences.",
    year: "2024",
    image: "/projects/rule-manager-preview-v3.svg",
  },
  {
    slug: "clinic-scheduler",
    title: "EU ETS Calculator",
    description:
      "A tool that allows ship owners to reduce fuel emissions by calculating their ship's EU Taxed CO2, Total Fuel, Total CO2, and Total Cost.",
    year: "2025",
    image: "/projects/eu-ets-preview-v2.png",
  },
  {
    slug: "insight-dashboard",
    title: "Get To Know Me",
    description:
      "Web developer with a passion for film and photography, blending creativity and technology to build engaging digital experiences.",
    year: "2024",
    image: "/projects/mobile-settings-mockup-preview.svg",
  },
];
