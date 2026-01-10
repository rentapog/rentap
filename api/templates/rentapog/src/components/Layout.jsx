import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Disc3, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Layout({ children, currentPageName }) {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'How It Works', page: 'HowItWorks' },
    { name: 'Affiliate Program', page: 'AffiliateProgram' },
  ];

  // Don't show header on landing pages that have their own design
  const hideHeader = currentPageName === 'Home';

  if (hideHeader) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to={createPageUrl('Home')} className="flex items-center gap-2">
                <Disc3 className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold text-slate-900">HostingPro</span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Nav */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.page}
                        to={createPageUrl(link.page)}
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        <main className="pt-16">{children}</main>
      </>
    );
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <Disc3 className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-slate-900">HostingPro</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Nav */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="pt-16 min-h-screen bg-slate-50">{children}</main>
    </>
  );
}
