import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10 md:py-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
        <p className="text-sm lowercase leading-relaxed tracking-tight text-[var(--muted-strong)]">
          built with cursor and next.js by michael cremonini
        </p>
        <nav
          aria-label="Contact and social links"
          className="flex flex-wrap items-center gap-6 text-[var(--foreground)] sm:justify-end"
        >
          <a
            className="inline-flex transition hover:opacity-60"
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
            className="inline-flex transition hover:opacity-60"
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
            className="inline-flex transition hover:opacity-60"
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
        </nav>
      </div>
    </footer>
  );
}
