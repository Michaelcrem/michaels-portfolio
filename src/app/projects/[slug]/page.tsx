import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ZoomableImage from "@/components/ZoomableImage";
import { AboutMeIntroWithPhotographyHover } from "@/components/AboutMeIntroWithPhotographyHover";
import { experienceEntries } from "@/data/experience";
import { projects } from "@/data/projects";
import { CRISP_SCREENSHOT_IMG } from "@/lib/crisp-screenshot-image";
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
    /** Shown in a dedicated “Prototype Flow Explanation” section when set. */
    prototypeFlow?: string;
    /** Shown in a dedicated “Entering Text” section when set. */
    enteringText?: string;
    /** Shown in a dedicated “File Upload” section when set. */
    fileUpload?: string;
    stackExplanation: string;
    heroImage: string;
    detailImages: { src: string; alt: string }[];
    timeline: string[];
    role: string[];
  }
> = {
  "eu-ets-calculator": {
    intro:
      "Collaborated with an engineer to build a maritime compliance analytics tool using Dash. Contributed to the app’s design and prototyping, shaping the user experience and interface architecture. The platform enables ship owners to calculate annual compliance costs, total CO₂ emissions, taxable CO₂, and total fuel consumption.",
    type: "Product",
    stack: ["Dash", "Python", "Figma"],
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
  "medical-student-portfolio": {
    intro:
      "This is a residency-focused portfolio site for a medical student built with React and a Node.js development workflow. The design is clean and minimal, with a focus on highlighting the student’s experiences while also giving space for their personality and story to come through.",
    type: "Portfolio",
    stack: ["React", "Node.js"],
    liveUrl: "#",
    purpose:
      "This project was created to build a clean, professional portfolio site for residency applications that could showcase more than just a CV. The goal was to create a space where the student could highlight their experiences, publications, leadership, and personal journey in a way that still felt approachable and genuine.\n\nBuilt with React and reusable styled components, the site was designed with consistency and scalability in mind while keeping the interface minimal and easy to navigate. Key sections include an About Me page, Experience timeline, and Publications section to organize academic and research work clearly.",
    stackExplanation:
      "For this project, I designed the interface in Figma using the Untitled UI design system as a foundation. From there, I created additional variables and expanded on the system with my own iconography and styling choices to better fit the overall feel of the site. I wanted the design to stay minimal and consistent while still feeling personal and polished.\n\nThis was also my first time using Cursor for a project, and I really enjoyed how much it improved the development workflow after finishing the designs in Figma. It made building and scaling components much more efficient, especially when translating the design system into code.\n\nI chose React because its component-based structure made it easy to keep the UI consistent across sections like About, Experience, and Publications. It also allowed me to reuse components throughout the site instead of rebuilding similar layouts repeatedly. Node.js helped create a smooth development workflow and gives the project room to grow later on if features like dynamic content, forms, or integrations ever need to be added. Together, the stack felt like a good fit for a clean, scalable portfolio site.",
    heroImage: "/projects/medical-portfolio-hero.png",
    detailImages: [
      {
        src: "/projects/medical-portfolio-bottom-1-v2.png",
        alt: "Medical student portfolio color palette",
      },
      {
        src: "/projects/medical-portfolio-bottom-2.png",
        alt: "Medical student portfolio icon design",
      },
    ],
    timeline: [
      "November 2025, Research",
      "December 2025, Design",
      "January 2026, Beta Testing",
    ],
    role: ["Lead Designer", "Lead Developer"],
  },
  "get-to-know-me": {
    intro:
      "I'm a web developer and UI designer currently working at Virtus Investment Partners, where I manage and support multiple affiliate websites across development, design, and digital marketing initiatives. Previously, I worked at American Bureau of Shipping building React applications and internal web tools, including an emissions and fuel cost calculator for ship owners. My work mainly focuses on React development, scalable UI systems, and creating digital experiences that feel clean, intuitive, and easy to use.\n\nI completed a full-stack engineering program — and enjoy photography outside of software, especially experimenting with film and vintage-era cameras.",
    type: "Product",
    stack: ["Pug", "Chart.js"],
    liveUrl: "https://mortgage--calculator-c1611120b7c4.herokuapp.com/",
    purpose:
      "The purpose of this project was to create an intuitive, visually engaging mortgage calculator that simplifies what is often a complex financial decision. Through multiple iterations, I refined both the calculation logic and UI interactions—ensuring accurate monthly payment computations, dynamic updates as users adjust sliders, and a clear breakdown of principal, property tax, and insurance. I designed the interface with a clean gradient overlay and a circular payment visualization to make the financial breakdown immediately digestible, while sliders and dropdowns keep the experience interactive and easy to use. Significant effort went into connecting the front-end inputs to reliable amortization logic, handling edge cases, and ensuring real-time responsiveness so the tool feels seamless and fully functional.",
    stackExplanation:
      "This project began with designing the full user interface and interaction flow in Adobe XD, where I mapped out the layout, visual hierarchy, and user experience before development. I then implemented the application using the Pug template engine to create clean, reusable, and maintainable HTML structures. For the data visualization, I integrated Chart.js to dynamically render the circular breakdown of monthly payments, allowing users to see real-time updates as inputs change. This stack allowed me to combine thoughtful design with efficient templating and interactive front-end visualization to deliver a polished, fully functional tool.",
    heroImage: "/projects/about-me-preview-group77.svg",
    detailImages: [],
    timeline: [
      "January 2024, UX Design",
      "February 2024, Build",
      "March 2024, Testing",
    ],
    role: ["UI designer", "Front-end developer"],
  },
  "financial-site-design": {
    intro: "",
    type: "Product",
    stack: ["Figma", "Statamic"],
    liveUrl: "#",
    purposePreamble:
      "I redesigned the Silvant Financial website, an affiliate of Virtus Investment Partners, with a focus on creating a cleaner and more user-friendly experience. I worked closely with the development team to make sure the designs translated smoothly into the final build while still meeting technical needs. My work included redesigning page layouts, improving the overall site structure, and helping create a more cohesive visual style across the site.\n\nThroughout the project, I worked closely with several product managers to create infographics, organize content structure, and make sure everything stayed aligned with brand guidelines. A big part of the process was finding the balance between making information easy to understand while still keeping the pages visually engaging and clean. Since Virtus has multiple affiliate teams, I also had the opportunity to collaborate across different groups and make sure the Silvant redesign fit within the larger company standards while still feeling tailored to Silvant’s audience and goals.",
    purpose:
      "Following the acquisition of Silvant by Virtus Investment Partners, the primary goal of the project was to centralize and elevate Silvant’s marketing and web presence under a unified strategy. As part of a broader initiative, we were simultaneously transitioning affiliate sites from KERN to Statamic CMS, which created a natural opportunity to modernize Silvant’s digital experience. The purpose of the redesign was not only to improve performance and scalability through a more flexible CMS, but also to ensure a seamless transition for all stakeholders involved—including Financial Advisors, Marketing Managers, and Product Owners—by prioritizing usability, clarity, and efficient content management workflows.\n\nA key component of the project’s purpose was to balance innovation with brand continuity. Through extensive research into current trends in financial services design, we aimed to enhance the site’s visual and functional appeal while preserving the recognizable elements that existing users trusted. Maintaining Silvant’s signature earthy green color palette was a deliberate decision to support brand familiarity, while introducing a more refined layout, improved information hierarchy, and modern design elements. Ultimately, the project was driven by the need to create a refreshed, cohesive, and user-centered experience that aligned with both Silvant’s identity and the evolving standards of the financial industry.",
    stackExplanation:
      "This project was built using Ceros as the primary design and development tool. I chose Ceros because it allows for rapid, drag-and-drop creation of interactive web experiences without requiring extensive front-end development, making it ideal for a fast-moving enterprise rollout. Its visual editor enabled me to design structured layouts, embed visuals, and maintain strong visual hierarchy while keeping the experience user-friendly. After completing the build in Ceros, the page was integrated and hosted within Adobe Experience Manager (AEM) to align with the organization’s broader web infrastructure. Hosting it in AEM ensured consistency with brand standards, centralized content management, and seamless deployment within the existing ABS digital ecosystem. This stack allowed for both speed in design and stability in enterprise-level hosting.",
    heroImage: "/projects/financial-site-design-preview-group72-3200w.png",
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
  "ai-messaging-schedular": {
    intro:
      "Designed an AI-powered scheduling and messaging app that helps users plan routines, draft and organize messages, schedule communications, and automate follow-ups—all in one streamlined experience.",
    type: "Product",
    stack: ["Figma", "AI messaging"],
    liveUrl: "#",
    purpose:
      "The goal of this project was to design a clear, intuitive messaging experience where users can chat with an AI assistant, provide relevant documents and information, and use that context to schedule and plan important events, meetings, and communications. I wanted to simplify the planning process by bringing AI assistance, messaging, and scheduling into one seamless workflow.",
    prototypeFlow:
      "The prototype maps a complete path from first open to a finished schedule. Users start on the Scheduler AI landing screen, continue with Google or email, then land on a help-centered home with quick actions like Start Planning. Choosing Start Planning opens a chat with the AI, where they describe what they need—such as a morning routine or a plant-watering plan. The assistant asks clarifying questions, then generates downloadable schedule assets the user can review and refine in the same conversation.",
    enteringText:
      "Once Start Planning is selected, the conversation becomes the main workspace. Users can tap a quick action or type freely into the Ask anything field—describing something like a monthly plant-watering routine—while Scheduler AI responds in chat and keeps the preferred tone available at the top. The keyboard and send controls stay anchored at the bottom so refining a request feels as natural as texting.",
    fileUpload:
      "Users can also bring existing materials into the conversation through a dedicated File Upload flow. From the chat, they open an upload sheet to add PDFs, videos, or design files, watch progress states as each file finishes, then return to the thread where attachments appear inline so Scheduler AI can incorporate them into the next schedule draft.",
    stackExplanation:
      "I designed the experience in Figma using the Untitled UI design system, mapping user journeys and creating wireframes to define the core messaging and scheduling workflows. I then developed high-fidelity designs and interactive prototypes to refine key interactions and create a consistent, intuitive experience across the product.",
    heroImage: "/projects/ai-messaging-schedular-preview.svg",
    detailImages: [
      {
        src: "/projects/ai-messaging-schedular-flow.png",
        alt: "Scheduler AI prototype flow from onboarding through chat to generated schedules",
      },
      {
        src: "/projects/ai-messaging-schedular-entering-text.svg",
        alt: "Scheduler AI home quick actions beside the entering-text chat state",
      },
      {
        src: "/projects/ai-messaging-schedular-file-upload.svg",
        alt: "Scheduler AI file upload sheet beside chat with attached files",
      },
    ],
    timeline: [
      "2026, Discovery",
      "2026, Design",
      "2026, Build",
    ],
    role: ["Designer"],
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

function ProjectMediaCaption({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="m-0 flex w-full flex-col gap-2 pb-4 md:pb-6">
      {children}
      <figcaption className="w-full text-center text-xs leading-snug text-[var(--muted)] sm:text-[13px]">
        {caption}
      </figcaption>
    </figure>
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

  const isMedicalPortfolio = slug === "medical-student-portfolio";
  const isRuleManager = slug === "financial-site-design";
  const relatedProjects = projects.filter(
    (item) => item.slug !== slug && item.slug !== "get-to-know-me",
  );
  const lessonsLearnedText =
    slug === "financial-site-design"
      ? "This project taught me how to balance brand consistency with modernization inside a large financial organization. I learned to translate stakeholder feedback from product, marketing, and engineering into a cohesive interface system that stayed true to Silvant's identity while aligning with Virtus standards. It also reinforced the value of designing content-first, reusable components during a CMS migration so teams can publish confidently without breaking visual consistency."
      : slug === "eu-ets-calculator"
        ? "This project reinforced how critical clarity is when designing tools for complex, data-heavy decisions. I learned to simplify technical EU ETS calculations into a guided flow that users could trust quickly, while still preserving analytical depth. It also highlighted the importance of close collaboration with engineering to align UI behavior, edge-case handling, and real-time calculation feedback so the final product felt both accurate and intuitive."
        : slug === "ai-messaging-schedular"
          ? "This project reinforced how important it is to keep conversational AI experiences simple and guided. I learned that quick actions, clear tone controls, and structured file-upload states help users feel confident when planning with an assistant—especially when messaging and scheduling live in the same flow. Designing the journeys in Figma with Untitled UI also showed me how early wireframes and interactive prototypes make it easier to refine complex interactions before they become hard to change."
          : "First and foremost, this project was where I really learned how to use Figma and Cursor together in my workflow. I was also new to working with the Untitled UI design system, so I spent a lot of time learning how to create and manage assets, variables, and reusable styles within a larger design structure.\n\nAt first, I wasn’t sure how helpful Cursor would actually be while building the project in React, but it ended up being a huge help, especially when setting up the initial scaffolding and structure of the site. It made the development process feel much smoother and more efficient than I expected.\n\nHonestly, the hardest part of the project was coordinating with the student and gathering all of the content and information needed for the site. I’m excited with how it’s coming together though, and hoping to have it launched soon.";

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
          {slug !== "get-to-know-me" && (
            <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]/90 px-5 py-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:px-8 sm:py-9 md:px-10 md:py-10">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-10 md:gap-x-14">
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
                <div className="flex min-w-0 flex-col gap-3 border-l border-[color:var(--border)] pl-4 sm:gap-3.5 sm:pl-8 md:pl-10">
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
                isMedicalPortfolio || slug === "eu-ets-calculator" ? "py-6 md:py-10" : ""
              }`}
            >
              {slug === "get-to-know-me" ? (
                <AboutMeIntroWithPhotographyHover intro={details.intro} />
              ) : (
                splitParagraphs(details.intro).map((paragraph, index) => (
                  <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                ))
              )}
            </div>
          </div>
        </div>

        {slug === "get-to-know-me" ? (
          <section
            id="experience"
            className="flex flex-col gap-8 border-t border-[color:var(--border)] pt-10 md:gap-10"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              Experience
            </h2>
            <div className="flex flex-col gap-8 md:gap-10">
              {experienceEntries.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="grid grid-cols-1 gap-2 sm:grid-cols-[11rem_1fr] sm:gap-x-4 sm:gap-y-0 md:gap-x-6 lg:gap-x-8"
                >
                  <p className="whitespace-nowrap text-lg tabular-nums leading-snug text-[var(--muted-strong)] sm:pt-0.5 md:text-xl">
                    {item.time}
                  </p>
                  <div className="flex min-w-0 flex-col gap-1">
                    <p className="min-w-0 text-pretty text-lg font-semibold leading-snug tracking-tight text-[var(--foreground)] md:text-xl">
                      {item.role} at {item.company}
                    </p>
                    <p className="max-w-2xl text-sm leading-5 text-[#666666] md:text-base md:leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {isRuleManager && (
          <div className="flex flex-col gap-8">
            {details.purposePreamble ? (
              <div className="flex w-full flex-col gap-5 text-base leading-7 text-[var(--muted)] md:gap-8 md:text-lg md:leading-8">
                {splitParagraphs(details.purposePreamble)
                  .slice(0, 1)
                  .map((paragraph, index) => (
                  <p key={`purpose-preamble-${paragraph.slice(0, 24)}-${index}`}>
                    {paragraph}
                  </p>
                  ))}
              </div>
            ) : null}
            <div className="pt-6 md:pt-10">
              <ProjectMediaCaption caption="Financial site design — composite preview">
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <div className="relative aspect-[1/1] w-full sm:aspect-[3200/2069]">
                    <ZoomableImage
                      src="/projects/financial-site-design-preview-group72-3200w.png"
                      alt="Financial site design preview"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 1200px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </ProjectMediaCaption>
            </div>
            <p className="text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
              Throughout the project, I worked closely with several product managers to
              create infographics, organize content structure, and make sure everything
              stayed aligned with brand guidelines. A big part of the process was
              finding the balance between making information easy to understand while
              still keeping the pages visually engaging and clean. Since Virtus has
              multiple affiliate teams, I also had the opportunity to collaborate
              across different groups and make sure the Silvant redesign fit within the
              larger company standards while still feeling tailored to Silvant&apos;s
              audience and goals.
            </p>
            <div className="pt-6 md:pt-10">
              <ProjectMediaCaption caption="Homepage and firm design">
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <div className="relative aspect-[1/1] w-full sm:aspect-[1728/1117]">
                    <ZoomableImage
                      src="/projects/financial-purpose-top-group75-1-2400w.png"
                      alt="Homepage and firm design"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 900px"
                      className="object-cover sm:object-contain"
                    />
                  </div>
                </div>
              </ProjectMediaCaption>
            </div>
            <div className="flex flex-col gap-6 py-6 md:gap-8 md:py-10">
              <h2 className="text-2xl font-semibold">Project Purpose and Goal</h2>
              <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                {splitParagraphs(details.purpose).map((paragraph, index) => (
                  <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="pt-6 md:pt-10">
              <ProjectMediaCaption caption="Infographic design desktop-mobile">
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <div className="relative aspect-[1/1] w-full sm:aspect-[1728/1117]">
                    <ZoomableImage
                      src="/projects/silvant-group-47.svg"
                      alt="Infographic design desktop-mobile"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 900px"
                      className="object-cover sm:object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </ProjectMediaCaption>
            </div>
            {details.designApproach ? (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6 py-6 md:gap-8 md:py-10">
                  <h2 className="text-2xl font-semibold">Design Approach</h2>
                  <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                    {splitParagraphs(details.designApproach).map((paragraph, index) => (
                      <p key={`design-approach-${paragraph.slice(0, 24)}-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="pt-6 md:pt-10">
                  <ProjectMediaCaption caption="Silvant mood board">
                    <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                      <div className="relative aspect-[1/1] w-full sm:aspect-[1728/1117]">
                        <ZoomableImage
                          src="/projects/silvant-macbook-16-mockup.svg"
                          alt="Silvant mood board"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 900px"
                          className="object-cover sm:object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                  </ProjectMediaCaption>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {isMedicalPortfolio ? (
          <div className="flex flex-col gap-8">
            <ProjectMediaCaption caption="Medical student portfolio — hero overview">
              <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--surface-strong)]">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
                  <div className="absolute inset-0 sm:hidden">
                    <ZoomableImage
                      src={project.previewImage ?? project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 90vw, 900px"
                      className="object-cover object-center"
                      priority
                      unoptimized={(project.previewImage ?? project.image).endsWith(
                        ".svg",
                      )}
                    />
                  </div>
                  <div className="absolute inset-0 hidden sm:block">
                    <ZoomableImage
                      src={details.heroImage}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 90vw, 900px"
                      className="object-contain object-center"
                      loading="lazy"
                      unoptimized={details.heroImage.endsWith(".svg")}
                    />
                  </div>
                </div>
              </div>
            </ProjectMediaCaption>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              {details.detailImages.map((image, index) => (
                <ProjectMediaCaption key={`${image.src}-${index}`} caption={image.alt}>
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
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
                </ProjectMediaCaption>
              ))}
            </div>
          </div>
        ) : slug === "financial-site-design" || slug === "get-to-know-me" ? null : (
          <ProjectMediaCaption caption={`${project.title} — hero preview`}>
            <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--surface)]">
              <div
                className={`relative w-full ${
                  slug === "ai-messaging-schedular"
                    ? "aspect-[1728/1117] bg-[#c5daf5]"
                    : "aspect-[1/1] sm:aspect-[16/10] md:aspect-[16/9]"
                }`}
              >
                {slug === "eu-ets-calculator" ? (
                  <>
                    <div className="absolute inset-0 sm:hidden">
                      <ZoomableImage
                        src={project.previewImage ?? project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                        priority
                        unoptimized={(project.previewImage ?? project.image).endsWith(
                          ".svg",
                        )}
                      />
                    </div>
                    <div className="absolute inset-0 hidden sm:block">
                      <ZoomableImage
                        src={details.heroImage}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                        loading="lazy"
                        unoptimized={details.heroImage.endsWith(".svg")}
                      />
                    </div>
                  </>
                ) : (
                  <ZoomableImage
                    src={details.heroImage}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1800px"
                    className={
                      slug === "ai-messaging-schedular"
                        ? `object-contain object-center ${CRISP_SCREENSHOT_IMG}`
                        : "object-cover"
                    }
                    priority
                    quality={slug === "ai-messaging-schedular" ? 100 : undefined}
                    decoding={
                      slug === "ai-messaging-schedular" ? "sync" : undefined
                    }
                    unoptimized={
                      details.heroImage.endsWith(".svg") ||
                      slug === "ai-messaging-schedular"
                    }
                  />
                )}
              </div>
            </div>
          </ProjectMediaCaption>
        )}

        {!isRuleManager && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              {slug !== "get-to-know-me" && (
                <div className="flex flex-col gap-6 py-6 md:py-10">
                  <h2 className="text-2xl font-semibold">Project Purpose and Goal</h2>
                  <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                    {splitParagraphs(details.purpose).map((paragraph, index) => (
                      <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
              {slug === "ai-messaging-schedular" && details.prototypeFlow && (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6 py-6 md:py-10">
                    <h2 className="text-2xl font-semibold">
                      Prototype Flow Explanation
                    </h2>
                    <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                      {splitParagraphs(details.prototypeFlow).map((paragraph, index) => (
                        <p key={`prototype-flow-${paragraph.slice(0, 24)}-${index}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  {details.detailImages[0] && (
                    <ProjectMediaCaption caption={details.detailImages[0].alt}>
                      <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                        <div className="relative aspect-[1024/355] w-full bg-white">
                          <ZoomableImage
                            src={details.detailImages[0].src}
                            alt={details.detailImages[0].alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 1800px"
                            quality={100}
                            decoding="sync"
                            unoptimized
                            className={`object-contain object-center ${CRISP_SCREENSHOT_IMG}`}
                          />
                        </div>
                      </div>
                    </ProjectMediaCaption>
                  )}
                  {details.enteringText && (
                    <>
                      <div className="flex flex-col gap-6 py-6 md:py-10">
                        <h2 className="text-2xl font-semibold">Entering Text</h2>
                        <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                          {splitParagraphs(details.enteringText).map(
                            (paragraph, index) => (
                              <p
                                key={`entering-text-${paragraph.slice(0, 24)}-${index}`}
                              >
                                {paragraph}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                      {details.detailImages[1] && (
                        <ProjectMediaCaption caption={details.detailImages[1].alt}>
                          <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                            <div className="relative aspect-[1728/1117] w-full bg-[#c5daf5]">
                              <ZoomableImage
                                src={details.detailImages[1].src}
                                alt={details.detailImages[1].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 1800px"
                                quality={100}
                                decoding="sync"
                                unoptimized
                                className={`object-contain object-center ${CRISP_SCREENSHOT_IMG}`}
                              />
                            </div>
                          </div>
                        </ProjectMediaCaption>
                      )}
                    </>
                  )}
                  {details.fileUpload && (
                    <>
                      <div className="flex flex-col gap-6 py-6 md:py-10">
                        <h2 className="text-2xl font-semibold">File Upload</h2>
                        <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                          {splitParagraphs(details.fileUpload).map(
                            (paragraph, index) => (
                              <p
                                key={`file-upload-${paragraph.slice(0, 24)}-${index}`}
                              >
                                {paragraph}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                      {details.detailImages[2] && (
                        <ProjectMediaCaption caption={details.detailImages[2].alt}>
                          <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                            <div className="relative aspect-[1728/1117] w-full bg-[#c5daf5]">
                              <ZoomableImage
                                src={details.detailImages[2].src}
                                alt={details.detailImages[2].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 1800px"
                                quality={100}
                                decoding="sync"
                                unoptimized
                                className={`object-contain object-center ${CRISP_SCREENSHOT_IMG}`}
                              />
                            </div>
                          </div>
                        </ProjectMediaCaption>
                      )}
                    </>
                  )}
                </div>
              )}
              {slug !== "get-to-know-me" && (
                <div className="flex flex-col gap-8">
              {isMedicalPortfolio && (
                <ProjectMediaCaption caption="Medical student portfolio — about section">
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface-strong)]">
                    <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
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
                </ProjectMediaCaption>
              )}
              {slug === "eu-ets-calculator" && (
                <ProjectMediaCaption caption="EU ETS calculator — growth and traction metrics">
                  <div className="overflow-hidden rounded-2xl bg-[var(--surface)]">
                    <div className="relative aspect-[5/2] w-full">
                      <ZoomableImage
                        src="/projects/eu-ets-growth.png"
                        alt="EU ETS growth metrics preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover object-center scale-[1.18]"
                      />
                    </div>
                  </div>
                </ProjectMediaCaption>
              )}
              {slug !== "ai-messaging-schedular" && (
              <div className="flex flex-col gap-6 py-6 md:py-10">
                <h2 className="text-2xl font-semibold">Design Approach</h2>
                <div className="flex w-full flex-col gap-5 md:gap-8 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                  {splitParagraphs(
                    "My approach to the design was to keep the site clean, organized, and easy to move through without feeling too rigid or overly formal. I used rounded, bubble-like shapes throughout the icons and headers to give the layout a softer and more welcoming feel. It helped make the site feel a little more personal while naturally guiding users through each section.\n\nI also worked with different shades of blue to create contrast and structure across the page. Lighter tones help separate sections without adding clutter, while darker blues draw attention to important elements like headers and icons. The overall goal was to keep the interface modern and cohesive while still feeling simple and approachable."
                  ).map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
              )}
              {isMedicalPortfolio && (
                <ProjectMediaCaption caption="Medical student portfolio — experience grid layout">
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
                </ProjectMediaCaption>
              )}
              {slug === "financial-site-design" && (
                <ProjectMediaCaption caption="Rule Manager — help guide design approach">
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <div className="relative aspect-[1/1] w-full sm:aspect-[16/9]">
                      <ZoomableImage
                        src="/projects/rule-manager-design-approach.png"
                        alt="Rule Manager help guide design approach"
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </ProjectMediaCaption>
              )}
              {slug === "financial-site-design" && (
                <ProjectMediaCaption caption="Rule Manager — help guide interaction preview">
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <div className="relative aspect-[1/1] w-full sm:aspect-video">
                      <video
                        className="h-full w-full object-cover"
                        src="/videos/rule-manager-help-guide.mov"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  </div>
                </ProjectMediaCaption>
              )}
              {slug === "eu-ets-calculator" && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                  <ProjectMediaCaption caption="EU ETS calculator — color palette">
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
                  </ProjectMediaCaption>
                  <ProjectMediaCaption caption="EU ETS calculator — typography">
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
                  </ProjectMediaCaption>
                </div>
              )}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-8">
            {slug === "eu-ets-calculator" && (
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
                  <ProjectMediaCaption caption={details.detailImages[0].alt}>
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
                  </ProjectMediaCaption>
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
                  <ProjectMediaCaption caption="EU ETS calculator — invalid IMO input state">
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
                  </ProjectMediaCaption>
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
                <ProjectMediaCaption caption="EU ETS calculator — multi-ship IMO entry">
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
                </ProjectMediaCaption>
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
                <ProjectMediaCaption caption="EU ETS calculator — results and outputs">
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
                </ProjectMediaCaption>
              </div>
          )}
          {slug !== "get-to-know-me" && (
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
              slug !== "financial-site-design" &&
              slug !== "ai-messaging-schedular" &&
              details.detailImages.length > 0 && (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                  {(details.detailImages[0]?.src.includes("eu-ets-flow")
                    ? details.detailImages.slice(1)
                    : details.detailImages
                  ).map((image, index) => {
                    const isFlow = image.src.includes("eu-ets-flow");

                    return (
                      <ProjectMediaCaption
                        key={`${image.src}-${index}`}
                        caption={image.alt}
                      >
                        <div
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
                      </ProjectMediaCaption>
                    );
                  })}
                </div>
              </div>
            )}
            </div>
          </div>
        )}

        {slug !== "get-to-know-me" && (
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
                <div
                  className={`relative size-14 shrink-0 overflow-hidden rounded-lg border border-[color:var(--border)] sm:h-16 sm:w-24 ${
                    item.previewContain ? "bg-[#c5daf5]" : "bg-[var(--surface-strong)]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} preview`}
                    fill
                    sizes="96px"
                    quality={85}
                    className={`object-center ${
                      item.previewContain ? "object-contain" : "object-cover"
                    }`}
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
