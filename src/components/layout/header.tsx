"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

const BandLogo = () => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid meet"
      className="text-primary"
      fill="currentColor"
    >
      <g
        transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M5617 4518 c-41 -163 -41 -1043 0 -1206 10 -40 22 -10 35 88 18 132
  18 898 0 1030 -13 98 -25 128 -35 88z"
        />
        <path
          d="M5896 4525 c-30 -79 -43 -884 -18 -1103 20 -171 34 -171 54 2 15 135
  15 849 0 984 -13 111 -24 148 -36 117z"
        />
        <path
          d="M13196 4525 c-30 -78 -43 -884 -18 -1103 20 -171 34 -171 54 2 16
  135 15 848 0 984 -13 112 -24 148 -36 117z"
        />
        <path
          d="M13477 4533 c-22 -35 -32 -227 -32 -618 0 -403 11 -595 34 -618 51
  -51 62 1090 12 1226 -4 11 -11 16 -14 10z"
        />
      </g>
    </svg>
  );

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <BandLogo />
          <span className="font-headline text-xl font-bold text-primary sm:text-2xl">
            THE SURYANSH PROJECT
          </span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
           <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Get Quote</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}