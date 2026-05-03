import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ZoomableImage from "@/components/ZoomableImage";
import { projects } from "@/data/projects";
import {
  getProductionSiteUrl,
  SOCIAL_PREVIEW_IMAGE_PATH,
} from "@/lib/site";

const siteUrl = getProductionSiteUrl();
const ogImageUrl = `${siteUrl}${SOCIAL_PREVIEW_IMAGE_PATH}`;

const projectDetails: Record<
  string,
  {
    intro: string;
    type: string;
    stack: string[];
    liveUrl?: string;
    purpose: string;
    /** Shown above “Project Purpose and Goal” when set (e.g. Financial Site Design). */
    purposePreamble?: string;
    /** Shown after purpose + visuals on Financial Site Design when set. */
    designApproach?: string;
    stackExplanation: string;
    heroImage: string;
    detailImages: { src: string; alt: string }[];
    timeline: string[];
    role: string[];
  }
> = {
  "clinic-scheduler": {
    intro:
      "Collaborated with an engineer to build a maritime compliance analytics tool using Dash. Contributed to the app’s design and prototyping, shaping the user experience and interface architecture. The platform enables ship owners to calculate annual compliance costs, total CO₂ emissions, taxable CO₂, and total fuel consumption.",
    type: "Product",
    stack: ["Dash", "Python", "Analytics"],
    liveUrl: "#",
    purpose:
      "The purpose of this project was to develop an intuitive, easy-to-use Dash application that enables ship owners to calculate annual compliance costs, total CO₂ emissions, taxable CO₂, and total fuel consumption. The goal was to provide ship owners with clear, actionable insights into their fuel emissions so they can better understand their environmental impact and prevent future compliance risks. During the initial release, the tool was fully public-facing to maximize visibility and drive traffic to the site. After gaining strong early traction, access to the application was transitioned to a login-based model, requiring users to register before using the tool. The platform reached over 45,000 users within its first month, demonstrating strong demand and engagement.",
    stackExplanation:
      "The application was built using Dash, with a strong emphasis on creating a seamless and intuitive user experience. I led the entire front-end design process, developing wireframes and interactive prototypes to ensure complex emissions and compliance data could be presented in a clear, digestible way. The interface was structured around user-centered workflows, allowing ship owners to easily input data and instantly visualize fuel usage, total CO₂ output, and taxable emissions. As the product evolved from a public-facing tool to a login-based experience, the design was adapted to support user onboarding and conversion. The final result balanced analytical depth with simplicity, enabling high engagement and rapid adoption at scale.",
    heroImage: "/projects/eu-ets-hero-v6.png",
    detailImages: [
      {
        src: "/projects/eu-ets-flow.png",
        alt: "EU ETS calculator flow preview",
      },
    ],
    timeline: [
      "May 2023, Research",
      "June 2023, Design",
      "August 2023, Development",
      "November 2023, Beta Testing",
      "January 2024, Shipped",
    ],
    role: ["Lead Designer", "Front-End Developer"],
  },
  "portfolio-os": {
    intro:
      "This is a residency-focused portfolio site for a medical student, built with React and a Node.js-based development workflow. The minimalist, timeless design highlights the student’s experience while telling a personal story that allows them to shine.",
    type: "Portfolio",
    stack: ["React", "Node.js"],
    liveUrl: "#",
    purpose:
      "This project was created to design a simple yet elegant medical student portfolio that prioritizes usability, clarity, and consistency through React and reusable styled components. The site presents the student’s personal journey, accomplishments, and academic work within a minimalist, scalable interface.\n\nA key objective was to improve visibility through strategic keyword placement, ensuring the portfolio appears in search results when research programs or institutions look up the student. Core sections include an About Me overview, a structured Experience section, and a Publications section highlighting scholarly work.",
    stackExplanation:
      "I chose React for its component-based structure and ability to keep the UI consistent across sections like About, Experience, and Publications. Node.js supports a smooth development workflow and makes it easy to expand the site later with dynamic data, form handling, or integrations if needed. Together, they provide a modern, scalable stack that fits a clean, minimalist portfolio.",
    heroImage: "/projects/medical-portfolio-hero.png",
    detailImages: [
      {
        src: "/projects/medical-portfolio-bottom-1-v2.png",
        alt: "Medical student portfolio interface preview",
      },
      {
        src: "/projects/medical-portfolio-bottom-2.png",
        alt: "Medical student portfolio details preview",
      },
    ],
    timeline: [
      "November 2025, Research",
      "December 2025, Design",
      "January 2026, Beta Testing",
      "February 2026, Shipped",
    ],
    role: ["Lead Designer", "Lead Developer"],
  },
  "insight-dashboard": {
    intro:
      "I have experience working as a Web Developer across multiple organizations, where I’ve focused on building applications with React and designing intuitive, user-friendly interfaces. In my previous role at American Bureau of Shipping, I contributed to developing and enhancing web platforms using React and Adobe Experience Manager (AEM), including co-creating a tool that helped ship owners estimate fuel usage and emissions costs.\n\nIn my current role at Virtus Investment Partners, I manage and support multiple affiliate websites, working closely with development, marketing, and social media teams to implement design updates and create cohesive digital experiences. Overall, my work centers on combining strong React development skills with thoughtful UI design to build efficient and engaging web applications.",
    type: "Product",
    stack: ["Pug", "Chart.js"],
    liveUrl: "https://mortgage--calculator-c1611120b7c4.herokuapp.com/",
    purpose:
      "The purpose of this project was to create an intuitive, visually engaging mortgage calculator that simplifies what is often a complex financial decision. Through multiple iterations, I refined both the calculation logic and UI interactions—ensuring accurate monthly payment computations, dynamic updates as users adjust sliders, and a clear breakdown of principal, property tax, and insurance. I designed the interface with a clean gradient overlay and a circular payment visualization to make the financial breakdown immediately digestible, while sliders and dropdowns keep the experience interactive and easy to use. Significant effort went into connecting the front-end inputs to reliable amortization logic, handling edge cases, and ensuring real-time responsiveness so the tool feels seamless and fully functional.",
    stackExplanation:
      "This project began with designing the full user interface and interaction flow in Adobe XD, where I mapped out the layout, visual hierarchy, and user experience before development. I then implemented the application using the Pug template engine to create clean, reusable, and maintainable HTML structures. For the data visualization, I integrated Chart.js to dynamically render the circular breakdown of monthly payments, allowing users to see real-time updates as inputs change. This stack allowed me to combine thoughtful design with efficient templating and interactive front-end visualization to deliver a polished, fully functional tool.",
    heroImage: "/projects/insight-dashboard.png",
    detailImages: [],
    timeline: [
      "January 2024, UX Design",
      "February 2024, Build",
      "March 2024, Testing",
    ],
    role: ["UI designer", "Front-end developer"],
  },
  "workflow-automations": {
    intro: "",
    type: "Product",
    stack: ["Documentation", "UX", "Web"],
    liveUrl: "#",
    purposePreamble:
      "I played a key role in the redesign of the Silvant website, an affiliate of Virtus Investment Partners, where I focused on both visual design and cross-functional collaboration. I worked closely with the development team to translate design concepts into scalable, user-friendly experiences, ensuring the final product aligned with both technical requirements and user needs. My contributions included designing page layouts, refining site structure, and helping create a cohesive visual system that elevated the overall user experience.\n\nThroughout the project, I partnered with multiple product managers to develop infographics, define content hierarchy, and maintain strict adherence to brand guidelines. This required balancing creative design with strategic thinking to ensure that each page effectively communicated key information while remaining visually engaging. Working at Virtus also meant collaborating across multiple affiliate teams, giving me the opportunity to align Silvant's design with broader organizational standards while still tailoring the experience to their unique audience and goals.",
    purpose:
      "Following the acquisition of Silvant by Virtus Investment Partners, the primary goal of the project was to centralize and elevate Silvant’s marketing and web presence under a unified strategy. As part of a broader initiative, we were simultaneously transitioning affiliate sites from KERN to Statamic CMS, which created a natural opportunity to modernize Silvant’s digital experience. The purpose of the redesign was not only to improve performance and scalability through a more flexible CMS, but also to ensure a seamless transition for all stakeholders involved—including Financial Advisors, Marketing Managers, and Product Owners—by prioritizing usability, clarity, and efficient content management workflows.\n\nA key component of the project’s purpose was to balance innovation with brand continuity. Through extensive research into current trends in financial services design, we aimed to enhance the site’s visual and functional appeal while preserving the recognizable elements that existing users trusted. Maintaining Silvant’s signature earthy green color palette was a deliberate decision to support brand familiarity, while introducing a more refined layout, improved information hierarchy, and modern design elements. Ultimately, the project was driven by the need to create a refreshed, cohesive, and user-centered experience that aligned with both Silvant’s identity and the evolving standards of the financial industry.",
    stackExplanation:
      "This project was built using Ceros as the primary design and development tool. I chose Ceros because it allows for rapid, drag-and-drop creation of interactive web experiences without requiring extensive front-end development, making it ideal for a fast-moving enterprise rollout. Its visual editor enabled me to design structured layouts, embed visuals, and maintain strong visual hierarchy while keeping the experience user-friendly. After completing the build in Ceros, the page was integrated and hosted within Adobe Experience Manager (AEM) to align with the organization’s broader web infrastructure. Hosting it in AEM ensured consistency with brand standards, centralized content management, and seamless deployment within the existing ABS digital ecosystem. This stack allowed for both speed in design and stability in enterprise-level hosting.",
    heroImage: "/projects/rule-manager-hero.svg",
    detailImages: [],
    timeline: [
      "October 2024, Requirements",
      "January 2025, Content Design",
      "March 2025, Implementation",
      "June 2025, Launch",
    ],
    role: ["UI Designer"],
    designApproach:
      "My design approach for Silvant started in Figma with low-fidelity page shells, then moved to higher fidelity as content models stabilized in Statamic. I prioritized scan-friendly layouts for advisory audiences: generous whitespace, a clear typographic scale for headings and body copy, and repeatable patterns for product tiles, disclosures, and calls to action.\n\nI iterated with engineering on breakpoints and CMS-driven components so marketing could publish updates without breaking the visual system. Infographics and iconography were simplified to align with broader Virtus patterns while keeping Silvant’s earthy greens as the anchor for recognition and trust.",
  },
};

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project could not be found.",
    };
  }

  const details = projectDetails[slug];
  const pageDescription =
    details?.intro?.slice(0, 180) ||
    details?.purpose?.slice(0, 180) ||
    project.description;

  return {
    title: project.title,
    description: pageDescription,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Michael Cremonini`,
      description: pageDescription,
      url: `/projects/${slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1024,
          height: 544,
          alt: "Michael Cremonini Portfolio homepage preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Michael Cremonini`,
      description: pageDescription,
      images: [ogImageUrl],
    },
  };
}

const splitParagraphs = (text: string) =>
  text
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

/** Splits "May 2023, Research" so the label after the comma can be emphasized. */
function formatTimelineEntry(item: string) {
  const idx = item.indexOf(",");
  if (idx === -1) {
    return item;
  }
  const datePart = item.slice(0, idx).trim();
  const labelPart = item.slice(idx + 1).trim();
  if (!labelPart) {
    return datePart;
  }
  return (
    <>
      <span className="text-[var(--muted)]">{datePart}</span>
      {", "}
      <span className="font-semibold text-[var(--foreground)]">{labelPart}</span>
    </>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const details = projectDetails[slug] ?? {
    intro: `${project.title} is presented here with a clean, focused layout that highlights the problem, approach, and outcome.`,
    type: "Project",
    stack: ["Design", "Development"],
    liveUrl: "#",
    purpose:
      "This section captures the purpose and goals behind the project, outlining what was built, who it serves, and the outcomes it was meant to deliver.",
    stackExplanation:
      "This section explains the technology choices, how they supported the build, and how the stack kept the experience consistent and scalable.",
    heroImage: project.image,
    detailImages: [],
    timeline: ["2024, Discovery", "2024, Design", "2024, Launch"],
    role: ["Designer", "Developer"],
  };

  const isMedicalPortfolio = slug === "portfolio-os";
  const isRuleManager = slug === "workflow-automations";
  const relatedProjects = projects.filter((item) => item.slug !== slug);
  const lessonsLearnedText =
    slug === "workflow-automations"
      ? "This project taught me how to balance brand consistency with modernization inside a large financial organization. I learned to translate stakeholder feedback from product, marketing, and engineering into a cohesive interface system that stayed true to Silvant's identity while aligning with Virtus standards. It also reinforced the value of designing content-first, reusable components during a CMS migration so teams can publish confidently without breaking visual consistency."
      : slug === "clinic-scheduler"
        ? "This project reinforced how critical clarity is when designing tools for complex, data-heavy decisions. I learned to simplify technical EU ETS calculations into a guided flow that users could trust quickly, while still preserving analytical depth. It also highlighted the importance of close collaboration with engineering to align UI behavior, edge-case handling, and real-time calculation feedback so the final product felt both accurate and intuitive."
        : "This project reinforced a clear, minimalist design approach built on the Untitled UI system in Figma, accelerated by using Cursor to scaffold the portfolio quickly, and strengthened by building reusable React components that keep the experience consistent and scalable.";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20 xl:px-24">
        <Link
          className="relative z-10 inline-flex text-sm text-[#2E90FA] hover:text-[#1D7CE5]"
          href="/"
        >
          ← Back to home
        </Link>

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">{project.title}</h1>
          {slug === "insight-dashboard" && (
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface-strong)]">
              <div className="relative aspect-[16/9] w-full">
                <ZoomableImage
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          )}
          {slug !== "insight-dashboard" && (
            <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/90 px-5 py-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:px-8 sm:py-9 md:px-10 md:py-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 md:gap-x-14">
                <div className="flex min-w-0 flex-col gap-3 sm:gap-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:text-xs sm:tracking-[0.2em]">
                    Timeline
                  </p>
                  <div className="flex flex-col gap-2.5 sm:gap-3">
                    {details.timeline.map((item) => (
                      <p
                        key={item}
                        className="text-[13px] leading-snug text-[var(--muted)] sm:text-sm sm:leading-relaxed md:text-base"
                      >
                        {formatTimelineEntry(item)}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex min-w-0 flex-col gap-3 border-l border-[color:var(--border)] pl-5 sm:gap-3.5 sm:pl-8 md:pl-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:text-xs sm:tracking-[0.2em]">
                    My Role
                  </p>
                  <div className="flex flex-col gap-2">
                    {details.role.map((item) => (
                      <span
                        key={item}
                        className="inline-flex w-fit max-w-full rounded-full border border-[color:var(--border)] bg-[var(--surface-strong)] px-2.5 py-1 text-[11px] font-semibold leading-tight text-[var(--foreground)] sm:px-3 sm:py-1 sm:text-xs md:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-8">
            <div
              className={`flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8 ${
                isMedicalPortfolio || slug === "clinic-scheduler" ? "py-6 md:py-10" : ""
              }`}
            >
              {splitParagraphs(details.intro).map((paragraph, index) => (
                <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {isRuleManager && (
          <div className="flex flex-col gap-8">
            {details.purposePreamble ? (
              <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                {splitParagraphs(details.purposePreamble).map((paragraph, index) => (
                  <p key={`purpose-preamble-${paragraph.slice(0, 24)}-${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
              <ZoomableImage
                src="/projects/financial-site-design-preview-group72-3200w.png"
                alt="Financial site design preview"
                width={3200}
                height={2069}
                sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 1200px"
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col gap-6 py-6 md:py-10">
              <h2 className="text-2xl font-semibold">Project Purpose and Goal</h2>
              <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                {splitParagraphs(details.purpose).map((paragraph, index) => (
                  <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                <ZoomableImage
                  src="/projects/silvant-group-47.svg"
                  alt="Silvant website redesign mockup"
                  width={1728}
                  height={1117}
                  className="h-auto w-full"
                  unoptimized
                />
              </div>
            </div>
            {details.designApproach ? (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6 py-6 md:py-10">
                  <h2 className="text-2xl font-semibold">Design Approach</h2>
                  <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                    {splitParagraphs(details.designApproach).map((paragraph, index) => (
                      <p key={`design-approach-${paragraph.slice(0, 24)}-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <ZoomableImage
                    src="/projects/silvant-macbook-16-mockup.svg"
                    alt="Silvant design mockup on MacBook Pro"
                    width={1728}
                    height={1117}
                    className="h-auto w-full"
                    unoptimized
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}

        {isMedicalPortfolio ? (
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--surface-strong)]">
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <ZoomableImage
                  src={details.heroImage}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 90vw, 900px"
                  className="object-contain object-center"
                  priority
                  unoptimized={details.heroImage.endsWith(".svg")}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              {details.detailImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]"
                >
                  <ZoomableImage
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="h-auto w-full"
                    unoptimized={image.src.endsWith(".svg")}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : slug === "workflow-automations" || slug === "insight-dashboard" ? null : (
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--surface)]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] md:aspect-[16/9]">
              <ZoomableImage
                src={details.heroImage}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
                priority
                unoptimized={details.heroImage.endsWith(".svg")}
              />
            </div>
          </div>
        )}

        {!isRuleManager && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              {slug !== "insight-dashboard" && (
                <div className="flex flex-col gap-6 py-6 md:py-10">
                  <h2 className="text-2xl font-semibold">Project Purpose and Goal</h2>
                  <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                    {splitParagraphs(details.purpose).map((paragraph, index) => (
                      <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
              {slug !== "insight-dashboard" && (
                <div className="flex flex-col gap-8">
              {isMedicalPortfolio && (
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface-strong)]">
                  <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                    <ZoomableImage
                      src="/projects/medical-portfolio-about-section.png"
                      alt="Medical student portfolio about section preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover object-center"
                      unoptimized
                    />
                  </div>
                </div>
              )}
              {slug === "clinic-scheduler" && (
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <div className="relative aspect-[5/2] w-full">
                    <ZoomableImage
                      src="/projects/eu-ets-growth.png"
                      alt="EU ETS growth metrics preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-6 py-6 md:py-10">
                <h2 className="text-2xl font-semibold">Design Approach</h2>
                <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                  {splitParagraphs(
                    "My design approach focused on creating an interface that feels approachable, organized, and easy to navigate. I used rounded, bubble-inspired shapes in the icons and headers to soften the layout and make the design feel more welcoming and engaging. These rounded forms help reduce visual rigidity while guiding the user’s eye naturally through each section of the page.\n\nTo support this structure, I incorporated multiple shades of blue to create hierarchy and visual depth. Lighter blues provide subtle background structure, while deeper tones highlight important elements like icons and headers. This combination helps maintain a cohesive design while keeping the interface clean, modern, and easy to interact with."
                  ).map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {isMedicalPortfolio && (
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <div className="relative aspect-[4/1] w-full">
                    <ZoomableImage
                      src="/projects/medical-portfolio-grid-left.png"
                      alt="Medical student portfolio grid layout preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              {slug === "workflow-automations" && (
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <ZoomableImage
                    src="/projects/rule-manager-design-approach.png"
                    alt="Rule Manager help guide design approach"
                    width={1600}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="h-auto w-full"
                  />
                </div>
              )}
              {slug === "workflow-automations" && (
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <video
                    className="h-auto w-full"
                    src="/videos/rule-manager-help-guide.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              )}
              {slug === "clinic-scheduler" && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <div className="relative aspect-[1/1] w-full">
                      <ZoomableImage
                        src="/projects/eu-ets-color-palette-v2.png"
                        alt="EU ETS calculator color palette"
                        fill
                        sizes="(max-width: 768px) 100vw, 520px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <ZoomableImage
                      src="/projects/eu-ets-typography-v4.png"
                      alt="EU ETS typography preview"
                      width={1400}
                      height={900}
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              )}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-8">
            {slug === "clinic-scheduler" && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6 py-6 md:py-10">
                  <h2 className="text-2xl font-semibold">
                    Prototype Flow Explanation
                  </h2>
                  <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                    <p>
                      The EU ETS Calculator is designed to guide users through a
                      structured and intuitive process for estimating emissions-related
                      costs for maritime vessels. The workflow emphasizes validation,
                      flexibility for multi-ship input, and clear calculation outputs.
                    </p>
                  </div>
                </div>
                {details.detailImages[0]?.src.includes("eu-ets-flow") && (
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <ZoomableImage
                      src={details.detailImages[0].src}
                      alt={details.detailImages[0].alt}
                      width={1600}
                      height={900}
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="h-auto w-full"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-6 py-6 md:py-10">
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                    IMO Input & Validation
                  </h2>
                  <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                    <p>
                      The user begins on the primary input screen, where they are
                      prompted to enter a 7-digit IMO number (International Maritime
                      Organization identifier), which uniquely corresponds to a
                      registered vessel.
                    </p>
                    <p>
                      If the entered IMO is invalid (incorrect format or not found in
                      the system), the interface immediately displays an error message,
                      prompting the user to re-enter a valid number. This validation
                      step ensures that only verified ships are processed, maintaining
                      data integrity and calculation accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <div className="relative aspect-[1814/658] w-full">
                      <ZoomableImage
                        src="/projects/eu-ets-imo-invalid-v10.png"
                        alt="EU ETS calculator invalid IMO input"
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 py-6 md:py-10">
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                    IMO Submission & Multi-Ship Entry
                  </h2>
                  <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                    <p>
                      Once a valid IMO is entered, the user can click the <b>“Submit”</b>{" "}
                      button.
                    </p>
                    <ul className="list-disc pl-6">
                      <li>
                        The submitted IMO is stored within the session, allowing users
                        to build a list of vessels.
                      </li>
                      <li>
                        Users can continue entering additional IMOs, making the tool
                        scalable for ship owners managing multiple vessels.
                      </li>
                      <li>
                        The interface supports iterative entry without forcing
                        immediate calculation, improving usability for fleet-level
                        analysis.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <div className="relative aspect-[1814/658] w-full">
                    <ZoomableImage
                      src="/projects/eu-ets-imo-multi-ship.png"
                      alt="EU ETS multi-ship entry preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 py-6 md:py-10">
                  <h2 className="text-2xl font-semibold">
                    Output & Results Display
                  </h2>
                  <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                    <p>
                      Upon calculation, the application returns key EU ETS metrics for
                      the selected vessels:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>EU Taxed CO₂ Cost</li>
                      <li>Total Fuel Consumption</li>
                      <li>Total CO₂ Emissions (current year)</li>
                    </ul>
                    <p>
                      These outputs provide users with a clear understanding of their
                      regulatory exposure and environmental impact, enabling informed
                      operational and financial decisions.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <div className="relative aspect-[1814/658] w-full">
                    <ZoomableImage
                      src="/projects/eu-ets-output-results-v2.png"
                      alt="EU ETS output results preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
          )}
          {slug !== "insight-dashboard" && (
            <div className="flex flex-col gap-6 py-6 md:py-10">
              <h2 className="text-2xl font-semibold">Web Stack Explanation</h2>
              <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                {splitParagraphs(details.stackExplanation).map((paragraph, index) => (
                  <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
            {!isMedicalPortfolio &&
              slug !== "workflow-automations" &&
              details.detailImages.length > 0 && (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                  {(details.detailImages[0]?.src.includes("eu-ets-flow")
                    ? details.detailImages.slice(1)
                    : details.detailImages
                  ).map((image, index) => {
                    const isFlow = image.src.includes("eu-ets-flow");

                    return (
                      <div
                        key={`${image.src}-${index}`}
                        className={`overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] ${
                          isRuleManager ? "w-full md:max-w-[520px] md:mx-auto" : ""
                        }`}
                      >
                        {isRuleManager ? (
                          <ZoomableImage
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={900}
                            sizes="(max-width: 768px) 100vw, 520px"
                            className="h-auto w-full"
                            quality={95}
                            unoptimized
                          />
                        ) : (
                          <div
                            className={`relative w-full ${
                              isFlow ? "aspect-[21/9]" : "aspect-[16/9]"
                            }`}
                          >
                            <ZoomableImage
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 420px"
                              className={isFlow ? "object-contain" : "object-cover"}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            </div>
          </div>
        )}

        {slug !== "insight-dashboard" && (
          <section className="flex flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] p-8">
            <h2 className="text-2xl font-semibold">Lessons Learned</h2>
            <div className="flex flex-col gap-4 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
              {splitParagraphs(
                lessonsLearnedText
              ).map((paragraph, index) => (
                <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        <section
          aria-labelledby="related-work-heading"
          className="flex flex-col gap-5 border-t border-[color:var(--border)] pt-10"
        >
          <div className="flex flex-col gap-1">
            <h2
              id="related-work-heading"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]"
            >
              More work
            </h2>
            <p className="text-sm leading-snug text-[var(--muted)]">
              A few other projects worth a look.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group flex min-w-0 gap-3 rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-3 transition hover:border-[#2E90FA]/35 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)] sm:p-3.5"
              >
                <div className="relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-lg border border-[color:var(--border)] bg-[var(--surface-strong)] sm:h-16 sm:w-24">
                  <Image
                    src={item.image}
                    alt={`${item.title} preview`}
                    fill
                    sizes="96px"
                    quality={85}
                    className="object-cover object-center"
                    unoptimized={
                      Boolean(item.isWide) ||
                      Boolean(item.previewUnoptimized) ||
                      item.image.endsWith(".svg")
                    }
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
                  <span className="truncate text-sm font-semibold text-[var(--foreground)] transition group-hover:text-[#2E90FA]">
                    {item.title}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{item.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
