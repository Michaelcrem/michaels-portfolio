import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Ask caches not to retain stale HTML when social scrapers fetch the page. */
const PREVIEW_BOT_UA =
  /linkedinexternalhit|facebookexternalhit|Facebot|Twitterbot|WhatsApp|Pinterestbot|Slackbot|Discordbot|TelegramBot/i;

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const ua = request.headers.get("user-agent") ?? "";

  if (PREVIEW_BOT_UA.test(ua)) {
    response.headers.set(
      "Cache-Control",
      "private, no-store, no-cache, must-revalidate",
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    response.headers.set("Vary", "User-Agent");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?)$).*)",
  ],
};
