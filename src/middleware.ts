import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip NextAuth API routes and static files
  if (pathname.startsWith("/api/auth") || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret });

  // 1️⃣ If NOT logged in → block dashboard
  if (pathname.startsWith("/dashboard") && !token) {
    const signinUrl = new URL("/signin", req.url);
    signinUrl.searchParams.set("callbackUrl", req.url); // optional: redirect back after login
    return NextResponse.redirect(signinUrl);
  }

  // 2️⃣ If logged in → block signin
  if (pathname.startsWith("/signin") && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Otherwise allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/signin"], // apply only on these
};
