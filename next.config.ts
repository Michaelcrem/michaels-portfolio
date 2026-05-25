import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  redirects: async () => [
    {
      source: "/projects/portfolio-os",
      destination: "/projects/medical-student-portfolio",
      permanent: true,
    },
    {
      source: "/projects/workflow-automations",
      destination: "/projects/financial-site-design",
      permanent: true,
    },
    {
      source: "/projects/clinic-scheduler",
      destination: "/projects/eu-ets-calculator",
      permanent: true,
    },
    {
      source: "/projects/insight-dashboard",
      destination: "/projects/get-to-know-me",
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: "/portfolio-share-preview-cv20260503.png",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, must-revalidate",
        },
      ],
    },
  ],
};

export default nextConfig;
