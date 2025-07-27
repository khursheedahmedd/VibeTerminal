import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Terminal } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

const navItems = [
  { label: 'Features', path: '/features' },
  { label: 'Install', path: '/install' },
  { label: 'Docs', path: '/docs' },
  { label: 'Plans', path: '/plans' },
  { label: 'About', path: '/about' },
];

const Navigation = () => {
  const location = useLocation();
  const [sheetOpen, setSheetOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#f7f7f8] border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0 group">
          <Terminal className="w-7 h-7 text-black" />
          <span className="text-xl font-black text-black tracking-tight">VibeTerminal</span>
        </Link>

        {/* Navigation center (desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium px-2 py-1 transition-colors ${
                  isActive(item.path)
                    ? "text-black"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Actions (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Button className="bg-black text-white font-semibold px-5 py-2 rounded-xl hover:bg-gray-900 transition">Get a Demo</Button>
          <Button className="bg-black text-white font-semibold px-5 py-2 rounded-xl hover:bg-gray-900 transition">Get Started</Button>
        </div>

        {/* Hamburger (mobile) using SheetTrigger */}
        <div className="md:hidden flex items-center">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none relative bg-transparent group"
                aria-label="Open menu"
              >
                <span className="block w-7 h-1 bg-black rounded transition-transform duration-200 group-hover:scale-x-110" />
                <span className="block w-7 h-1 bg-black rounded my-1 transition-transform duration-200 group-hover:scale-x-110" />
                <span className="block w-7 h-1 bg-black rounded transition-transform duration-200 group-hover:scale-x-110" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#f7f7f8] px-0 pt-2 w-72 max-w-full animate-slide-in-right">
              <div className="flex flex-col gap-6 items-start justify-start h-full px-5 py-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-black font-semibold text-lg py-2 ${
                      isActive(item.path) ? "underline" : "hover:underline"
                    }`}
                    onClick={() => setSheetOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition mt-8">Get a Demo</Button>
                <Button className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
