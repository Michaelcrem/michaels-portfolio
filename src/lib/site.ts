/** Homepage screenshot used for Open Graph / Twitter cards (1024×544 PNG). */
export const SOCIAL_PREVIEW_IMAGE_PATH =
  "/portfolio-share-preview-cv20260503.png";

/**
 * Canonical site origin for metadata and absolute URLs. Prefer explicit env so
 * previews match the URL people actually share (custom domain vs *.vercel.app).
 */
export function getProductionSiteUrl(): string {
  const trimmed = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (trimmed) return trimmed;

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (prod) {
    return prod.startsWith("http")
      ? prod.replace(/\/$/, "")
      : `https://${prod.replace(/\/$/, "")}`;
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "https://michaels-portfolio.vercel.app";
}
