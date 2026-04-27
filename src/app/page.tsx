"use client";

import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-20 bg-[var(--background)]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-14 py-8 md:px-24 md:py-10 lg:px-32 xl:px-40 2xl:px-52">
          <p className="text-base font-bold tracking-[0.22em] text-[var(--foreground)] md:text-lg">
            M<span className="mx-1">C</span>
          </p>
          <nav className="flex items-center gap-11 text-sm font-normal tracking-[0.06em] text-[var(--foreground)] md:gap-16 md:text-[15px] md:tracking-[0.08em]">
            <a className="transition hover:opacity-60" href="#projects">
              Work
            </a>
            <a className="transition hover:opacity-60" href="#about">
              About
            </a>
            <a className="transition hover:opacity-60" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-24 px-14 pb-28 pt-8 md:gap-28 md:px-24 md:pb-40 md:pt-14 lg:gap-32 lg:px-32 lg:pt-16 xl:px-40 2xl:px-52">
        <section id="about" className="flex w-full flex-col gap-8 md:gap-10">
          <div className="flex max-w-4xl flex-col items-start gap-3 md:gap-4">
            <h1 className="text-[clamp(2.15rem,5vw,3.15rem)] font-semibold leading-tight tracking-[0.02em] text-[var(--foreground)] md:tracking-[0.035em]">
              Michael Cremonini
            </h1>
            <p className="m-0 flex w-full flex-col gap-1 md:gap-1.5 text-[clamp(1.4rem,3.2vw,2.05rem)] font-extralight leading-tight tracking-[0.02em] text-[var(--foreground)] md:tracking-[0.035em]">
              <span className="block">Designing and building</span>
              <span className="block">thoughtful digital experiences.</span>
            </p>
          </div>
        </section>

        <section
          aria-label="Featured project previews"
          className="-mt-8 bg-[var(--background)] py-4 md:-mt-9 md:py-5"
        >
          <div className="flex w-full flex-nowrap items-center justify-center gap-0 px-1 sm:px-0">
            {projects.map((project, index) => (
              <div
                key={`preview-${project.slug}`}
                className={`group relative flex flex-col items-center ${
                  index > 0 ? "-ml-1 sm:-ml-1.5 md:-ml-1 lg:-ml-2" : ""
                }`}
                style={{ zIndex: index }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`relative aspect-square h-[5.5rem] w-[5.5rem] overflow-hidden rounded-2xl border-2 border-white bg-[var(--background)] shadow-[0_14px_30px_rgba(15,23,42,0.18),0_6px_12px_rgba(15,23,42,0.08)] transition duration-300 sm:h-32 sm:w-32 md:h-[10.5rem] md:w-[10.5rem] hover:z-20 hover:scale-[1.02] hover:rotate-0 hover:shadow-[0_26px_56px_rgba(15,23,42,0.32),0_10px_20px_rgba(15,23,42,0.14)] ${
                    index % 4 === 0
                      ? "-rotate-6"
                      : index % 4 === 1
                        ? "-rotate-3"
                        : index % 4 === 2
                          ? "rotate-3"
                          : "rotate-6"
                  }`}
                >
                  <Image
                    src={project.previewImage ?? project.image}
                    alt={`${project.title} thumbnail preview`}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 900px) 128px, 176px"
                    quality={85}
                    unoptimized={
                      Boolean(project.isWide) ||
                      (project.previewImage ?? project.image).endsWith(".svg")
                    }
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium tracking-tight text-[var(--foreground)] opacity-0 transition duration-200 group-hover:opacity-100">
                  {project.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-8 md:gap-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            Featured projects
          </h2>
          <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="flex min-w-0 flex-col gap-6 md:gap-8"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--background)] transition md:rounded-3xl"
                >
                  <div
                    className={`relative w-full ${
                      project.isWide
                        ? "aspect-[16/9] sm:aspect-[22/9]"
                        : "aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 896px"
                      quality={90}
                      unoptimized={
                        project.isWide || project.image.endsWith(".svg")
                      }
                      className="h-full w-full object-cover object-center transition duration-300 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>
                <div className="flex min-w-0 flex-col gap-2 md:gap-2.5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block w-full min-w-0 text-pretty text-lg font-semibold leading-snug tracking-tight text-[var(--foreground)] transition hover:opacity-70 md:text-xl"
                  >
                    {project.title}
                  </Link>
                  <p className="max-w-2xl text-base leading-relaxed text-[#666666]">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="flex flex-col gap-8 md:gap-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            Experience
          </h2>
          <div className="flex flex-col gap-8 md:gap-10">
            {[
              {
                role: "Digital Specialist",
                company: "Virtus Investment Partners",
                time: "2024 – now",
                detail:
                  "Designed marketing and product experiences with a focus on user experience and conversion.",
              },
              {
                role: "Web Developer",
                company: "American Bureau of Shipping",
                time: "2023 – 2024",
                detail:
                  "Developed react components and led the front-end design for EU ETS Calculator.",
              },
            ].map((item) => (
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
                  <p className="max-w-2xl text-base leading-relaxed text-[#666666]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section id="contact" className="flex flex-col gap-8 md:gap-10">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#666666]">
            Want to collaborate or chat about a new project? Send a quick note
            and I will get back to you.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <a
              className="inline-flex text-[var(--foreground)] transition hover:opacity-60"
              href="mailto:michaelcrem@gmail.com"
              aria-label="Email"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              className="inline-flex text-[var(--foreground)] transition hover:opacity-60"
              href="https://www.linkedin.com/in/michael-cremonini/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/icons/linkedin-icon.svg"
                alt=""
                width={24}
                height={24}
                className="theme-icon h-6 w-6"
              />
            </a>
            <a
              className="inline-flex text-[var(--foreground)] transition hover:opacity-60"
              href="https://github.com/Michaelcrem"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Image
                src="/icons/github-icon.svg"
                alt=""
                width={24}
                height={24}
                className="theme-icon h-6 w-6"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
