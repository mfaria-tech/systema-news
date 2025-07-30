import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/admin'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));
  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get('auth-token')?.value;

  if (!token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/admin/login';
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
}
