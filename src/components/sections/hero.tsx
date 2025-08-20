import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="The Suryansh Project performing live on stage"
          fill
          className="object-cover"
          priority
          data-ai-hint="band stage"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 p-4 flex flex-col items-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl">
          THE SURYANSH PROJECT
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
          A remarkable unplugged ensemble delivering high-class performances rarely seen in the country's music scene.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
          <Link href="#contact">Book The Band</Link>
        </Button>
      </div>
    </section>
  );
}
