import { Mic, GitMerge, Trophy } from 'lucide-react';

const styles = [
  {
    icon: Mic,
    title: 'Soulful Interpretations',
    description: 'We breathe new life into every song with unique arrangements and heartfelt, soulful vocals.',
  },
  {
    icon: GitMerge,
    title: 'Genre Fusion',
    description: 'Our performances are a rich tapestry of genres, seamlessly blending Pop, Sufi, Bollywood, and Retro classics.',
  },
  {
    icon: Trophy,
    title: 'Live Excellence',
    description: 'Known for our dynamic and engaging live shows, we create an unforgettable experience for every audience.',
  },
];

export function MusicalStyle() {
  return (
    <section id="style" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Our Sound
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A fusion of passion, precision, and pure acoustic power.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {styles.map((style) => (
              <div key={style.title} className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start lg:flex-col lg:items-center lg:text-center">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <style.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4 lg:mt-4 lg:ml-0">
                  <h3 className="text-xl font-bold text-foreground">{style.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
