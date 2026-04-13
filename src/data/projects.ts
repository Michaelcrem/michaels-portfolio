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
    slug: "clinic-scheduler",
    title: "EU ETS Calculator",
    description:
      "A tool that allows ship owners to reduce fuel emissions by calculating their ship's EU Taxed CO2, Total Fuel, Total CO2, and Total Cost.",
    year: "2025",
    image: "/projects/eu-ets-preview-v2.png",
  },
  {
    slug: "insight-dashboard",
    title: "Mortgage Calculator",
    description:
      "A tool used to calculate monthly mortgage payments based off home price, down payment, and mortgage loan type.",
    year: "2024",
    image: "/projects/mortgage-calculator-preview.png",
  },
  {
    slug: "workflow-automations",
    title: "Rule Manager Help Guide Page",
    description:
      "An interactive Rule Manager Help Guide that provides clear, step-by-step support for navigating and managing improved rules and guides platform.",
    year: "2024",
    image: "/projects/rule-manager-preview-v3.svg",
  },
];
