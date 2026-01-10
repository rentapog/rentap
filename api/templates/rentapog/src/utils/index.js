// Utility to create page URLs for react-router
export function createPageUrl(page) {
  switch (page) {
    case 'Home':
      return '/';
    case 'HowItWorks':
      return '/how-it-works';
    case 'AffiliateProgram':
      return '/affiliate-program';
    case 'Blog':
      return '/blog';
    case 'Packages':
      return '/packages';
    case 'Login':
      return '/login';
    case 'Dashboard':
      return '/dashboard';
    default:
      return '/';
  }
}
