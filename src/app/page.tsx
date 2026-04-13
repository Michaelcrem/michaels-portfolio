"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { projects } from "@/data/projects";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [sweepColor, setSweepColor] = useState("#ffffff");

  const handleThemeToggle = (previousTheme: "light" | "dark") => {
    setSweepColor(previousTheme === "dark" ? "#0a0a0a" : "#ffffff");
    setAnimationKey((key) => key + 1);
    setIsAnimating(true);
    window.setTimeout(() => setIsAnimating(false), 700);
  };
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {isAnimating && (
        <div
          key={animationKey}
          className="theme-curtain"
          style={{ ["--curtain-color" as string]: sweepColor }}
          aria-hidden="true"
        />
      )}
      <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--background)]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
            MC
          </p>
          <nav className="flex items-center gap-6 text-sm text-[var(--muted)]">
            <a className="hover:text-[var(--foreground)]" href="#projects">
              Projects
            </a>
            <a className="hover:text-[var(--foreground)]" href="#experience">
              Experience
            </a>
            <a className="hover:text-[var(--foreground)]" href="#contact">
              Contact
            </a>
            <ThemeToggle onToggle={handleThemeToggle} />
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-16">
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="relative flex flex-col gap-2 text-[var(--muted-strong)]">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-[color:var(--border)]" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[var(--muted)] transition hover:border-[color:var(--foreground)] hover:text-[var(--foreground)]"
                    href="https://www.linkedin.com/in/michael-cremonini/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Image
                      src="/icons/linkedin-icon.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="theme-icon h-[18px] w-[18px]"
                    />
                  </a>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[var(--muted)] transition hover:border-[color:var(--foreground)] hover:text-[var(--foreground)]"
                    href="https://github.com/Michaelcrem"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Image
                      src="/icons/github-icon.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="theme-icon h-[18px] w-[18px]"
                    />
                  </a>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[var(--muted)] transition hover:border-[color:var(--foreground)] hover:text-[var(--foreground)]"
                    href="https://dribbble.com/michaelcrem"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Dribbble"
                  >
                    <Image
                      src="/icons/dribbble-icon.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="theme-icon h-4 w-4"
                    />
                  </a>
                </div>
              </div>
              
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Howdy, I&apos;m Michael.
              <span className="block">
                Web <span className="text-[#2E90FA]">Developer</span>, Designer,
              </span>
              <span className="block">and Life Long Learner.</span>
            </h1>
            <p className="max-w-2xl text-lg text-[var(--muted)]">
              I&apos;m a creative web developer and digital marketing strategist
              who loves turning ideas into polished, user-centered experiences.
              With a background in front-end development and UI/UX design, I
              build products that are visually compelling and thoughtfully
              engineered.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-[#2E90FA] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1D7CE5]"
              href="#contact"
            >
              Let&apos;s talk
            </a>
            <a
              className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[color:var(--foreground)]"
              href="#projects"
            >
              View projects
            </a>
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.slug}
                className={`group rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/20 ${
                  project.isWide ? "md:col-span-2" : ""
                }`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block overflow-hidden rounded-xl border border-[color:var(--border)] bg-[var(--surface-strong)]"
                >
                  <div
                    className={`relative w-full ${
                      project.isWide ? "aspect-[21/8]" : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes={
                        project.isWide
                          ? "(max-width: 768px) 100vw, (max-width: 1400px) 1400px, 1600px"
                          : "(max-width: 768px) 100vw, 520px"
                      }
                      quality={90}
                      unoptimized={project.isWide}
                      className={`object-cover transition duration-300 ${
                        project.isWide
                          ? "scale-[1.08] group-hover:scale-[1.1]"
                          : "group-hover:scale-[1.03]"
                      }`}
                    />
                  </div>
                </Link>
                <div className="mt-5 flex flex-col gap-3">
                  <div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-lg font-semibold text-[var(--foreground)] hover:text-[#1D7CE5]"
                    >
                      {project.title}
                    </Link>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {project.description}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-semibold text-[#2E90FA] hover:text-[#1D7CE5]"
                  >
                    View project →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="flex flex-col gap-6">
            {[
              {
                role: "Digital Marketing Specialist",
                company: "Virtus Investment Partners",
                time: "2024 - Present",
                detail: "Designed marketing and product experiences with a focus on user experience and conversion."
,
              },
              {
                role: "Web Developer",
                company: "American Bureau of Shipping",
                time: "2023 - 2024",
                detail:
                  "Developed react components and led the front-end design for EU ETS Calculator.",
              },
        
            ].map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm text-[var(--muted-strong)]">{item.company}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                    {item.time}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[var(--muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>


        <section id="contact" className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
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
