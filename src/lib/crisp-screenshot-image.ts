/**
 * Hint sharper scaling for screenshots. Avoids Tailwind `contrast`/`brightness`
 * (CSS `filter`) — those can re-rasterize the bitmap and look softer when the
 * image is already scaled with `object-cover`.
 */
export const CRISP_SCREENSHOT_IMG =
  "[image-rendering:-webkit-optimize-contrast] supports-[image-rendering:high-quality]:[image-rendering:high-quality] transform-gpu [backface-visibility:hidden]";
