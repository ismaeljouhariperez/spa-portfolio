import { NextResponse } from 'next/server';

export function middleware(req:string | any, ev:string | any) {
  const defaultLocale = 'en';
  const { pathname } = req.nextUrl;

  // Only rewrite the path for root requests, not for other pages or static files
  if (pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(url);
  }

  // Redirect from /defaultLocale to '/'
  if (pathname.startsWith(`/${defaultLocale}`)) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(new RegExp(`^/${defaultLocale}/?`), '/');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
