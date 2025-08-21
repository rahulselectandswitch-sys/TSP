import { Gem, Music, Users } from 'lucide-react';

const highlights = [
  {
    icon: Gem,
    title: 'Exceptional Talent',
    description: 'Our ensemble is composed of seasoned musicians, each bringing a unique flair and mastery to their craft.',
  },
  {
    icon: Music,
    title: 'Versatile Musical Range',
    description: 'From timeless classics to modern hits, our repertoire spans genres and eras, tailored to any occasion.',
  },
  {
    icon: Users,
    title: 'Flexible Configurations',
    description: 'We offer scalable setups, from an intimate duo to a full five-piece band, to perfectly match your event\'s ambiance.',
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="py-16 sm:py-24 bg-card">
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
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start lg:flex-col lg:items-center lg:text-center">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <highlight.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4 lg:mt-4 lg:ml-0">
                  <h3 className="text-xl font-bold text-foreground">{highlight.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
