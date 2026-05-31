export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  image: string;
  previewImage?: string;
  isWide?: boolean;
  /** Skip next/image compression for sharper screenshots at the same pixel size. */
  previewUnoptimized?: boolean;
  /** Shown as badges on homepage featured project cards. */
  technologies?: string[];
};

export const projects: Project[] = [
  {
    slug: "medical-student-portfolio",
    title: "Medical Student Portfolio",
    description:
      "A lightweight, modular portfolio site showcasing a medical student’s experience and personal story.",
    year: "2026",
    image: "/projects/medical-portfolio-preview-group67.svg",
    technologies: ["React", "Node.js", "Figma"],
  },
  {
    slug: "financial-site-design",
    title: "Financial Site Design",
    description:
      "Silvant affiliate redesign, Virtus standards, and how I approach financial web experiences.",
    year: "2024",
    image: "/projects/financial-site-design-preview-group72-3200w.png",
    technologies: ["Figma", "Statamic"],
  },
  {
    slug: "eu-ets-calculator",
    title: "EU ETS Calculator",
    description:
      "A tool that allows ship owners to reduce fuel emissions by calculating their ship's EU Taxed CO2, Total Fuel, Total CO2, and Total Cost.",
    year: "2025",
    image: "/projects/eu-ets-preview-v2.png",
    technologies: ["Dash", "Python", "Analytics"],
  },
  {
    slug: "get-to-know-me",
    title: "Get to Know Me",
    description:
      "Web developer with a passion for film and photography, blending creativity and technology to build engaging digital experiences.",
    year: "2024",
    image: "/projects/about-me-preview-group77.svg",
  },
];
