import { NextResponse } from 'next/server';

export function middleware(req:string | any, ev:string | any) {
  const defaultLocale = 'en'; // To change to your default locale
  const { pathname } = req.nextUrl;

  // If the path is the default locale, redirect to the path without the locale
  // so that Next.js will consider the path to be in the default locale
  if (pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(url);
  }

  // If the path starts with a supported locale, remove it so that Next.js
  // will consider the path to be in the default locale
  if (pathname.startsWith(`/${defaultLocale}`)) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(new RegExp(`^/${defaultLocale}/?`), '/');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
