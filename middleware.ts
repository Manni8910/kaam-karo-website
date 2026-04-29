import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow policy pages (needed for payment gateway verification)
  const allowedPages = ['/maintenance', '/privacy', '/terms', '/shipping', '/contact', '/cancellation'];
  if (allowedPages.includes(pathname)) return NextResponse.next();

  // Allow static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Redirect to maintenance, preserving UTM params so Google Analytics can attribute the visit
  const maintenanceUrl = new URL('/maintenance', request.url);
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  utmParams.forEach(param => {
    const val = request.nextUrl.searchParams.get(param);
    if (val) maintenanceUrl.searchParams.set(param, val);
  });
  return NextResponse.redirect(maintenanceUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
