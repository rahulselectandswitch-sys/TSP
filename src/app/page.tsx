import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Highlights } from '@/components/sections/highlights';
import { MusicalStyle } from '@/components/sections/musical-style';
import { Albums } from '@/components/sections/albums';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Highlights />
        <MusicalStyle />
        <Albums />
      </main>
      <Footer />
    </div>
  );
}
