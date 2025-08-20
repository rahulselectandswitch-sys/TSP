import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-xl font-bold text-primary sm:text-2xl">
            THE SURYANSH PROJECT
          </span>
        </Link>
        <nav className="flex items-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact">Book Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
