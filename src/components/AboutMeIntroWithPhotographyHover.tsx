"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { aboutPhotographySlides } from "@/data/about-photography-slides";

function splitParagraphs(text: string) {
  return text
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

const PHOTO_WORD = /\b(photography)\b/i;

function ParagraphWithPhotographyHover({ paragraph }: { paragraph: string }) {
  const match = paragraph.match(PHOTO_WORD);
  if (!match || match.index === undefined || aboutPhotographySlides.length === 0) {
    return <>{paragraph}</>;
  }

  const idx = match.index;
  const word = match[1];
  const before = paragraph.slice(0, idx);
  const after = paragraph.slice(idx + word.length);

  return (
    <>
      {before}
      <PhotographyHoverWord label={word} />
      {after}
    </>
  );
}

type PanelPos = {
  left: number;
  top: number;
  transform: string;
};

function PhotographyHoverWord({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [panelPos, setPanelPos] = useState<PanelPos | null>(null);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      setOpen(false);
      setPanelPos(null);
    }, 220);
  }, [clearHideTimer]);

  const openNow = useCallback(() => {
    clearHideTimer();
    setOpen(true);
  }, [clearHideTimer]);

  const updatePanelPosition = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const panelW = Math.min(16 * 16, window.innerWidth - 32);
    const gapSide = 14;
    const rightNudge = 72;
    const leftWhenRight = r.right + gapSide + rightNudge;
    if (leftWhenRight + panelW <= window.innerWidth - 16) {
      setPanelPos({
        left: leftWhenRight,
        top: r.top + r.height / 2,
        transform: "translateY(-50%)",
      });
      return;
    }
    const spaceLeft = r.left - gapSide;

    if (spaceLeft >= panelW) {
      setPanelPos({
        left: r.left - panelW - gapSide,
        top: r.top + r.height / 2,
        transform: "translateY(-50%)",
      });
      return;
    }

    const rightBias = 96;
    const left = Math.min(
      Math.max(16, r.left + r.width / 2 - panelW / 2 + rightBias),
      window.innerWidth - panelW - 16,
    );
    const spaceAbove = r.top;
    const placeAbove = spaceAbove > 260;
    const top = placeAbove ? r.top - gapSide : r.bottom + gapSide;
    setPanelPos({
      left,
      top,
      transform: placeAbove ? "translateY(-100%)" : "none",
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    updatePanelPosition();
    const onResize = () => updatePanelPosition();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [open, updatePanelPosition]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setPanelPos(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (wrapRef.current?.contains(t) || panelRef.current?.contains(t)) return;
      setOpen(false);
      setPanelPos(null);
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open]);

  useEffect(() => {
    if (!open || aboutPhotographySlides.length === 0) return;
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % aboutPhotographySlides.length);
    }, 1000);
    return () => clearInterval(id);
  }, [open]);

  const slide = aboutPhotographySlides[slideIndex]!;

  const panel =
    open && panelPos && typeof document !== "undefined" ? (
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-label="Photography samples"
        aria-live="polite"
        className="fixed z-[200] w-[min(16rem,calc(100vw-2rem))] flex flex-col overflow-hidden rounded-2xl bg-[color:color-mix(in_srgb,var(--surface-strong)_58%,transparent)] p-0 shadow-none backdrop-blur-xl backdrop-saturate-150 [&_span]:border-0 [&_span]:shadow-none [&_span]:outline-none [&_img]:border-0 [&_img]:shadow-none [&_img]:outline-none"
        style={{
          left: panelPos.left,
          top: panelPos.top,
          transform: panelPos.transform,
          border: "none",
          outline: "none",
          boxShadow: "none",
        }}
        onMouseEnter={openNow}
        onMouseLeave={scheduleClose}
      >
        <div className="relative aspect-[2/3] w-full shrink-0 overflow-hidden rounded-t-2xl">
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="256px"
            className="object-cover"
            style={{ border: "none", outline: "none", boxShadow: "none" }}
          />
        </div>
        <p className="m-0 border-0 px-3 py-2 text-center text-xs leading-snug text-[var(--muted)] sm:text-[13px]">
          some photos I took
        </p>
      </div>
    ) : null;

  return (
    <span ref={wrapRef} className="relative inline">
      <span
        role="button"
        tabIndex={0}
        className="cursor-help border-b border-dotted border-[color:var(--muted-strong)] underline-offset-2 outline-none transition hover:border-[#2E90FA] hover:text-[#2E90FA] focus-visible:ring-2 focus-visible:ring-[#2E90FA]/40 focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        aria-label="Photography: show sample images"
        onMouseEnter={openNow}
        onMouseLeave={scheduleClose}
        onFocus={openNow}
        onBlur={(e) => {
          const next = e.relatedTarget as Node | null;
          if (panelRef.current?.contains(next)) return;
          scheduleClose();
        }}
        onClick={() => {
          setOpen((v) => !v);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
      >
        {label}
      </span>
      {panel ? createPortal(panel, document.body) : null}
    </span>
  );
}

export function AboutMeIntroWithPhotographyHover({ intro }: { intro: string }) {
  return (
    <>
      {splitParagraphs(intro).map((paragraph, index) => (
        <p key={`${paragraph.slice(0, 24)}-${index}`}>
          <ParagraphWithPhotographyHover paragraph={paragraph} />
        </p>
      ))}
    </>
  );
}
