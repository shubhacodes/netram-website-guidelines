// middleware.js
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};

export default function middleware(req) {
  const url = new URL(req.url);
  const host = url.host.toLowerCase();

  // LASIK subdomain
  if (host.startsWith("lasik.")) {
    if (url.pathname === "/") {
      url.pathname = "/lasik";
      return NextResponse.rewrite(url);
    }
    if (url.pathname === "/thank-you" || url.pathname === "/thank-you-lasik") {
      url.pathname = "/thank-you-lasik";
      return NextResponse.rewrite(url);
    }
  }

  // CATARACT subdomain
  if (host.startsWith("cataract.")) {
    if (url.pathname === "/") {
      url.pathname = "/cataract";
      return NextResponse.rewrite(url);
    }
    if (url.pathname === "/thank-you" || url.pathname === "/thank-you-cataract") {
      url.pathname = "/thank-you-cataract";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}
