import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
