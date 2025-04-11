import { useState } from "react";
import { Button } from "../ui/button";

export const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Partner", href: "#partner" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1512px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white [font-family:'Gellix-Medium',Helvetica] text-base transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="https://forms.gle/Fp9KShwmEdK8V5cR6" className="ml-4 bg-white text-black hover:bg-white/90 rounded-full px-6">
              <span className="[font-family:'Gellix-Medium',Helvetica] text-base">
                Join Waitlist
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base [font-family:'Gellix-Medium',Helvetica] text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href='https://forms.gle/Fp9KShwmEdK8V5cR6' className="w-full mt-4 bg-white text-black hover:bg-white/90 rounded-full">
                <span className="[font-family:'Gellix-Medium',Helvetica] text-base">
                  Join Waitlist
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
