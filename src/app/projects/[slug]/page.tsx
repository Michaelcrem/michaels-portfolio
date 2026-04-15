import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

const projectDetails: Record<
  string,
  {
    intro: string;
    type: string;
    stack: string[];
    liveUrl?: string;
    purpose: string;
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
      "This mortgage calculator features a clean, easy-to-follow UI that makes estimating your total monthly home payment simple and intuitive. It calculates your full monthly cost—including principal, property taxes, and insurance—and clearly breaks down each component so you can understand exactly where your money is going and plan with confidence.",
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
    intro:
      "I have experience working as a Web Developer across multiple organizations, where I’ve focused on building applications with React and designing intuitive, user-friendly interfaces. In my previous role at American Bureau of Shipping, I contributed to developing and enhancing web platforms using React and Adobe Experience Manager (AEM), including co-creating a tool that helped ship owners estimate fuel usage and emissions costs. In my current role at Virtus Investment Partners, I manage and support multiple affiliate websites, working closely with development, marketing, and social media teams to implement design updates and create cohesive digital experiences. Overall, my work centers on combining strong React development skills with thoughtful UI design to build efficient and engaging web applications.",
    type: "Product",
    stack: ["Documentation", "UX", "Web"],
    liveUrl: "#",
    purpose:
      "The goal of this project was to support the successful rollout of the new Rule Manager platform by ensuring users could easily understand and navigate the system. Because the platform introduced new workflows and search functionality, it was critical to create a centralized Help Guide that reduced confusion and minimized support requests. I focused on designing a clean, structured web page that clearly explained key features such as search tools, document access, and retired publications. The objective was to make complex documentation feel approachable through strong visual hierarchy, concise explanations, and supporting interface screenshots. Ultimately, the project aimed to improve user adoption, enhance usability, and provide surveyors with a seamless way to access the rules and guides necessary for vessel classification.",
    stackExplanation:
      "This project was built using Ceros as the primary design and development tool. I chose Ceros because it allows for rapid, drag-and-drop creation of interactive web experiences without requiring extensive front-end development, making it ideal for a fast-moving enterprise rollout. Its visual editor enabled me to design structured layouts, embed visuals, and maintain strong visual hierarchy while keeping the experience user-friendly. After completing the build in Ceros, the page was integrated and hosted within Adobe Experience Manager (AEM) to align with the organization’s broader web infrastructure. Hosting it in AEM ensured consistency with brand standards, centralized content management, and seamless deployment within the existing ABS digital ecosystem. This stack allowed for both speed in design and stability in enterprise-level hosting.",
    heroImage: "/projects/rule-manager-hero.svg",
    detailImages: [],
    timeline: [
      "June 2023, Requirements",
      "July 2023, Content Design",
      "August 2023, Launch",
    ],
    role: ["UX content designer", "Implementation lead"],
  },
};

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const splitParagraphs = (text: string) =>
  text
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

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
  const isEuEts = slug === "clinic-scheduler";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-24">
        <Link
          className="relative z-10 inline-flex text-sm text-[#2E90FA] hover:text-[#1D7CE5]"
          href="/"
        >
          ← Back to home
        </Link>

        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-semibold sm:text-5xl">{project.title}</h1>
          <div className="rounded-3xl border border-[color:var(--border)] bg-[var(--surface)]/70 px-12 py-10 text-lg text-[var(--muted)]">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-36">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                  Timeline
                </p>
                {details.timeline.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                  My Role
                </p>
                {details.role.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div
              className={`flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)] ${
                isMedicalPortfolio || slug === "clinic-scheduler" ? "py-[40px]" : ""
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
            <div className="flex flex-col gap-6 py-[40px]">
              <h2 className="text-2xl font-semibold">Project Purpose and Goal</h2>
              <div className="flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)]">
                {splitParagraphs(details.purpose).map((paragraph, index) => (
                  <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {slug === "workflow-automations" && (
          <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
            <Image
              src="/projects/rule-manager-preview-v3.svg"
              alt="Day to day work development preview"
              width={1400}
              height={900}
              sizes="(max-width: 768px) 100vw, 900px"
              className="h-auto w-full"
            />
          </div>
        )}

        {isMedicalPortfolio ? (
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--surface)]">
              <Image
                src={details.heroImage}
                alt={`${project.title} preview`}
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 900px"
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {details.detailImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--surface)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={details.heroImage}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {slug === "insight-dashboard" && (
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--surface)]">
            <video
              className="h-auto w-full"
              src="/videos/mortgage-calculator.mov"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
            />
          </div>
        )}

        {!isRuleManager && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 py-[40px]">
                <h2 className="text-2xl font-semibold">Project Purpose and Goal</h2>
                <div className="flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)]">
                  {splitParagraphs(details.purpose).map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-8">
              {isMedicalPortfolio && (
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                <Image
                  src="/projects/medical-portfolio-about-section.png"
                  alt="Medical student portfolio about section preview"
                  width={1400}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="h-auto w-full"
                />
                </div>
              )}
              {slug === "clinic-scheduler" && (
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <div className="relative aspect-[5/2] w-full">
                    <Image
                      src="/projects/eu-ets-growth.png"
                      alt="EU ETS growth metrics preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-6 py-[40px]">
                <h2 className="text-2xl font-semibold">Design Approach</h2>
                <div className="flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)]">
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
                    <Image
                      src="/projects/medical-portfolio-grid-left.png"
                      alt="Medical student portfolio grid layout preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              {isMedicalPortfolio && (
                <div className="grid gap-8 md:grid-cols-2 md:gap-x-16">
                  <div className="flex flex-col gap-8 py-[40px] text-lg leading-8 text-[var(--muted)]">
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      Blue Theme
                    </h3>
                    <p>
                      Blue conveys trust, clarity, and professionalism—qualities that
                      align well with both healthcare and academic environments.
                    </p>
                    <p>
                      The rounded shapes soften the interface and create a more
                      approachable, user-friendly feel, helping balance
                      professionalism with warmth.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <Image
                      src="/projects/medical-portfolio-blue-theme-v3.png"
                      alt="Blue theme buttons and typography"
                      width={1400}
                      height={900}
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="h-auto w-full scale-[1.08]"
                    />
                  </div>
                </div>
              )}
              {slug === "workflow-automations" && (
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                  <Image
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
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <div className="relative aspect-[1/1] w-full">
                      <Image
                        src="/projects/eu-ets-color-palette-v2.png"
                        alt="EU ETS calculator color palette"
                        fill
                        sizes="(max-width: 768px) 100vw, 520px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                    <Image
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
            </div>
            <div className="flex flex-col gap-8">
            {slug === "clinic-scheduler" && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6 py-[40px]">
                  <h2 className="text-2xl font-semibold">
                    Prototype Flow Explanation
                  </h2>
                  <div className="flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)]">
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
                    <Image
                      src={details.detailImages[0].src}
                      alt={details.detailImages[0].alt}
                      width={1600}
                      height={900}
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="h-auto w-full"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-6 py-[40px]">
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                    IMO Input & Validation
                  </h2>
                  <div className="flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)]">
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
                      <Image
                        src="/projects/eu-ets-imo-invalid-v10.png"
                        alt="EU ETS calculator invalid IMO input"
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 py-[40px]">
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                    IMO Submission & Multi-Ship Entry
                  </h2>
                  <div className="flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)]">
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
                    <Image
                      src="/projects/eu-ets-imo-multi-ship.png"
                      alt="EU ETS multi-ship entry preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 py-[40px]">
                  <h2 className="text-2xl font-semibold">
                    Output & Results Display
                  </h2>
                  <div className="flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)]">
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
                    <Image
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
          <div className="flex flex-col gap-6 py-[40px]">
            <h2 className="text-2xl font-semibold">Web Stack Explanation</h2>
            <div className="flex w-full flex-col gap-8 text-lg leading-8 text-[var(--muted)]">
              {splitParagraphs(details.stackExplanation).map((paragraph, index) => (
                <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
          {slug === "clinic-scheduler" && (
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
              <div className="relative aspect-[4/1] w-full">
                <Image
                  src="/projects/eu-ets-web-stack-icons.png"
                  alt="EU ETS web stack icons"
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            </div>
          )}
          {isMedicalPortfolio && (
              <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--surface)]">
                <div className="relative aspect-[4/1] w-full">
                  <Image
                    src="/projects/medical-portfolio-stack-icons.png"
                    alt="Web stack icons"
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            {!isMedicalPortfolio && slug !== "workflow-automations" && (
              <div className="flex flex-col gap-8">
                <div className="grid gap-8 md:grid-cols-2">
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
                          <Image
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
                            <Image
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

        <section className="flex flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] p-8">
          <h2 className="text-2xl font-semibold">Lessons Learned</h2>
          <div className="flex flex-col gap-4 text-lg leading-8 text-[var(--muted)]">
            {splitParagraphs(
              "This project reinforced a clear, minimalist design approach built on the Untitled UI system in Figma, accelerated by using Cursor to scaffold the portfolio quickly, and strengthened by building reusable React components that keep the experience consistent and scalable."
            ).map((paragraph, index) => (
              <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
