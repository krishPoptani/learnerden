// ./lib/routeAccess.ts

export const publicRoutes = ['/', '/about', '/login', '/signup']

export interface RoleRoute {
  pattern: RegExp;
  allowedRoles: string[];
}

export const roleBasedRoutes: RoleRoute[] = [
  {
    pattern: /^\/(superadmin)\/quiz$/,
    allowedRoles: ['superadmin']
  },
  {
    pattern: /^\/(superadmin)\/dashboard$/,
    allowedRoles: ['superadmin']
  },
  {
    pattern: /^\/(superadmin|tutor)\/settings$/,
    allowedRoles: ['superadmin', 'tutor']
  },
]
