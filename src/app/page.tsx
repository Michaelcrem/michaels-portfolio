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

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-24 px-14 pb-28 pt-12 md:gap-28 md:px-24 md:pb-40 md:pt-20 lg:gap-32 lg:px-32 lg:pt-24 xl:px-40 2xl:px-52">
        <section id="about" className="flex w-full flex-col gap-8 md:gap-10">
          <div className="flex max-w-4xl flex-col items-start gap-3 md:gap-4">
            <h1 className="text-[clamp(2.15rem,5vw,3.15rem)] font-semibold leading-tight tracking-[0.02em] text-[var(--foreground)] md:tracking-[0.035em]">
              Michael Cremonini —
            </h1>
            <p className="m-0 flex w-full flex-col gap-3 md:gap-4 text-[clamp(1.65rem,3.9vw,2.45rem)] font-extralight leading-tight tracking-[0.02em] text-[var(--foreground)] md:tracking-[0.035em]">
              <span className="block">Designing and building</span>
              <span className="block">thoughtful digital experiences.</span>
            </p>
          </div>
          <a
            href="#projects"
            className="inline-block w-fit border-b border-[var(--foreground)] pb-0.5 text-[15px] font-normal tracking-[0.04em] text-[var(--foreground)] transition hover:opacity-60 md:text-base"
          >
            View work{"\u00a0\u00a0"}→
          </a>
        </section>

        <section id="projects" className="flex flex-col gap-8 md:gap-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            Featured projects
          </h2>
          <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col gap-6 md:gap-8"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-[#f2f2f2] transition md:rounded-3xl"
                >
                  <div
                    className={`relative w-full ${
                      project.isWide ? "aspect-[22/9]" : "aspect-[16/9]"
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
                <div className="flex flex-col gap-2 md:gap-2.5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-fit text-xl font-semibold leading-snug tracking-tight text-[var(--foreground)] transition hover:opacity-70 md:text-2xl"
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
                role: "Digital Marketing Specialist",
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
                className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(6.25rem,max-content)_1fr] sm:gap-x-10 sm:gap-y-0 md:gap-x-14 lg:gap-x-20"
              >
                <p className="text-sm tabular-nums text-[var(--muted-strong)] sm:pt-0.5">
                  {item.time}
                </p>
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="text-base font-semibold leading-snug tracking-tight text-[var(--foreground)]">
                    {item.role} at {item.company}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section id="contact" className="flex flex-col gap-8 md:gap-10">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="max-w-xl text-sm text-[var(--muted)]">
            Want to collaborate or chat about a new project? Send a quick note
            and I will get back to you.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              className="rounded-full border border-[color:var(--border)] px-5 py-2 hover:border-[color:var(--foreground)]"
              href="mailto:michaelcrem@gmail.com"
            >
              michaelcrem@gmail.com
            </a>
            <a
              className="rounded-full border border-[color:var(--border)] px-5 py-2 hover:border-[color:var(--foreground)]"
              href="https://www.linkedin.com/in/michael-cremonini/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-[color:var(--border)] px-5 py-2 hover:border-[color:var(--foreground)]"
              href="https://github.com/Michaelcrem"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
