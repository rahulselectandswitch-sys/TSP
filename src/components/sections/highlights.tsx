import { Gem, Music, Users } from 'lucide-react';

const highlights = [
  {
    icon: Gem,
    title: 'POPMIX ',
    description: 'Our Seasoned Mighty uniting unique mastery and flair.',
    videoId: 'YzVgN6q_E0A',
  },
  {
    icon: Music,
    title: 'Sound of Coke Studio - Live',
    description: 'Versatile Musical Range',
    videoId: 'Ae_U1YT03gY',
  },
  {
    icon: Users,
    title: 'Flexible Configurations',
    description: ' Flexible and Diverse configuration',
    videoId: 'AesTwpDDsNU',
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="py-8 sm:py-12 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Standing Out in Sound
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover what makes The Suryansh Project a premier choice for live unplugged music.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg group">
                <iframe
                  className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110"
                  src={`https://www.youtube.com/embed/${highlight.videoId}?autoplay=1&mute=1&loop=1&playlist=${highlight.videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={highlight.title}
                ></iframe>
                <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/70" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-primary-foreground mb-4 border-2 border-primary-foreground/50">
                      <a
                      href={`https://www.youtube.com/watch?v=${highlight.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-primary-foreground border-2 border-primary-foreground/50"
                      >
                      <highlight.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </div>
 <h3 className="text-2xl font-bold font-headline">{highlight.title}</h3>
 <p className="mt-2 text-base text-primary-foreground/90 max-w-xs">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
