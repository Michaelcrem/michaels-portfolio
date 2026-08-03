export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  image: string;
  previewImage?: string;
  isWide?: boolean;
  /** Show the full image without cropping (object-contain) on featured cards / heroes. */
  previewContain?: boolean;
  /** Skip next/image compression for sharper screenshots at the same pixel size. */
  previewUnoptimized?: boolean;
  /** Shown as badges on homepage featured project cards. */
  technologies?: string[];
};

export const projects: Project[] = [
  {
    slug: "eu-ets-calculator",
    title: "EU ETS Calculator",
    description:
      "Developed a Python/Dash emissions calculator used by 45K+ users in its first month to estimate maritime compliance costs under the EU Emmisions Trading System.",
    year: "2025",
    image: "/projects/eu-ets-preview-v2.png",
    technologies: ["Dash", "Python", "Figma"],
  },
  {
    slug: "financial-site-design",
    title: "Financial Site Design",
    description:
      "Led the redesign and development of key client-facing webpages, increasing content engagement by 8% through improved information architecture and usability.",
    year: "2024",
    image: "/projects/financial-site-design-preview-group72-3200w.png",
    technologies: ["Figma", "Statamic"],
  },
  {
    slug: "ai-messaging-schedular",
    title: "AI Messaging Schedular",
    description:
      "An AI-assisted messaging scheduler for planning, drafting, and sending messages on a set cadence.",
    year: "2026",
    image: "/projects/ai-messaging-schedular-preview.png",
    previewContain: true,
    previewUnoptimized: true,
    technologies: ["React", "AI"],
  },
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
    slug: "get-to-know-me",
    title: "Get to Know Me",
    description:
      "Web developer with a passion for film and photography, blending creativity and technology to build engaging digital experiences.",
    year: "2024",
    image: "/projects/about-me-preview-group77.svg",
  },
];
