import { Mic, GitMerge, Trophy } from 'lucide-react';

const styles = [
  {
    icon: Mic,
    title: 'The Grand Musical Theatre',
    description: 'Music through the years 1950s',
    videoId: 'WT1o011upGA',
  },
  {
    icon: GitMerge,
    title: 'The Suryansh Project',
    description: 'Mighty 10 Super Ensemble',
    videoId: 'mTJmeegEbkk',
  },
  {
    icon: Trophy,
    title: 'Punjabi Mixtape',
    description: 'Live Showreel 2024 | an unforgettable experience for every audience.',
    videoId: 'jini5G6nk1E',
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {styles.map((style) => (
              <div key={style.title} className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg group">
                <iframe
                  className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110"
                  src={`https://www.youtube.com/embed/${style.videoId}?autoplay=1&mute=1&loop=1&playlist=${style.videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={style.title}
                ></iframe>
                <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/70" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                  <a
                  href={`https://www.youtube.com/watch?v=${style.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-primary-foreground mb-4 border-2 border-primary-foreground/50"
                  >
                  <style.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
 <h3 className="text-2xl font-bold font-headline">{style.title}</h3>
                    <p className="mt-2 text-base text-primary-foreground/90 max-w-xs">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
