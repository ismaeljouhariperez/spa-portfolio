// pages/_middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req) {
  const defaultLocale = 'fr';
  const { pathname } = req.nextUrl;

  // Only rewrite the path for root requests, not for other pages or static files
  if (pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(url);
  }

   // Redirect from '/fr' to '/'
   if (pathname.startsWith('/fr')) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/fr\/?/, '/');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
