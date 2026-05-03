"use client";

import { useMemo, useState } from "react";
import Image, { type ImageProps } from "next/image";

type ZoomableImageProps = ImageProps & {
  zoomDisabled?: boolean;
};

export default function ZoomableImage({
  src,
  alt,
  fill,
  zoomDisabled = false,
  ...props
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isPriority = Boolean(props.priority);
  const computedQuality = props.quality ?? 75;
  const sharedImageProps = {
    ...props,
    quality: computedQuality,
    decoding: props.decoding ?? ("async" as const),
  };
  const loadingProps: Partial<ImageProps> = isPriority
    ? {}
    : { loading: props.loading ?? "lazy" };
  const srcValue = useMemo(() => {
    if (typeof src === "string") {
      return src;
    }
    const resolvedSrc = (src as { src?: string; default?: { src?: string } })
      .src;
    if (resolvedSrc) {
      return resolvedSrc;
    }
    return (
      (src as { src?: string; default?: { src?: string } }).default?.src ?? ""
    );
  }, [src]);

  const altText = typeof alt === "string" ? alt : "Project image";
  const zoomLabel = altText ? `Zoom image: ${altText}` : "Zoom image";

  if (fill) {
    return (
      <>
        <Image src={src} alt={alt} fill {...sharedImageProps} {...loadingProps} />
        {!zoomDisabled && (
          <button
            type="button"
            className="absolute inset-0 z-10 cursor-zoom-in"
            aria-label={zoomLabel}
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={zoomLabel}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/40 px-3 py-1 text-sm text-white hover:bg-black/60"
              onClick={() => setIsOpen(false)}
              aria-label="Close zoom view"
            >
              Close
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={srcValue}
              alt={altText}
              className="max-h-[90vh] max-w-[92vw] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="relative w-full">
        <Image src={src} alt={alt} {...sharedImageProps} {...loadingProps} />
        {!zoomDisabled && (
          <button
            type="button"
            className="absolute inset-0 z-10 cursor-zoom-in"
            aria-label={zoomLabel}
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={zoomLabel}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/40 px-3 py-1 text-sm text-white hover:bg-black/60"
            onClick={() => setIsOpen(false)}
            aria-label="Close zoom view"
          >
            Close
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={srcValue}
            alt={altText}
            className="max-h-[90vh] max-w-[92vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
