import { Gem, Music, Users, Mic, GitMerge, Trophy } from 'lucide-react';

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

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                About The Band
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                THE SURYANSH PROJECT is a remarkable unplugged ensemble delivering high-class performances rarely seen in the country's music scene. Known for their soulful and dynamic live shows, the band has quickly established itself as one of the premier unplugged setups in the nation.
            </p>
        </div>

        <div className="mt-20">
            <h3 className="text-center font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Band Highlights
            </h3>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                {highlights.map((highlight) => (
                <div key={highlight.title} className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <highlight.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    </div>
                    <div className="mt-4">
                    <h4 className="text-xl font-bold text-foreground">{highlight.title}</h4>
                    <p className="mt-2 text-base text-muted-foreground">{highlight.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="mt-20">
            <h3 className="text-center font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Musical Style & Repertoire
            </h3>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                {styles.map((style) => (
                <div key={style.title} className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <style.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    </div>
                    <div className="mt-4">
                    <h4 className="text-xl font-bold text-foreground">{style.title}</h4>
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
