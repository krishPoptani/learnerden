import { NextRequest, NextResponse } from 'next/server'
import { publicRoutes, roleBasedRoutes } from './lib/routeAccess'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value
  const role = request.cookies.get('role')?.value

const isPublicAsset = /\.(.*)$/.test(pathname)

if (
  pathname.startsWith('/_next') ||
  pathname.startsWith('/api') ||
  pathname === '/favicon.ico' ||
  isPublicAsset
) {
  return NextResponse.next()
}


  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Require login for all others
  if (!token || !role) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Find the first roleBasedRoute that matches the current pathname
  const matchedRoute = roleBasedRoutes.find(route => route.pattern.test(pathname))

  if (matchedRoute) {
    if (!matchedRoute.allowedRoles.includes(role)) {
      // User role not allowed for this path
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Optional: enforce role in path matches user role if you want strict matching
    // Extract role from pathname if your pattern has a capturing group, e.g. /(superadmin|admin|tutor)
    const roleMatch = matchedRoute.pattern.exec(pathname)
    if (roleMatch && roleMatch[1] && roleMatch[1] !== role && role !== 'superadmin') {
      // User role does not match the role segment in path and is not superadmin
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  }

  // Default allow if no role-based route matched
  return NextResponse.next()
}
