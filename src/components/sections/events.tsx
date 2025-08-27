import { Mic, PartyPopper, Trophy, Rocket, Briefcase, Theater, CalendarDays, Guitar } from 'lucide-react';

const eventTypes = [
  {
    icon: Mic,
    title: 'Live Concerts',
    description: 'Energetic and soulful live concerts that captivate audiences.',
  },
  {
    icon: PartyPopper,
    title: 'Festivals',
    description: 'Bringing our unique unplugged sound to music and cultural festivals.',
  },
  {
    icon: Trophy,
    title: 'Award Ceremonies',
    description: 'Elegant and high-class performances for prestigious award nights.',
  },
  {
    icon: Rocket,
    title: 'Launch Events',
    description: 'Creating a memorable atmosphere for product and brand launches.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional and sophisticated musical experiences for corporate gatherings.',
  },
  {
    icon: Theater,
    title: 'Stage Performances',
    description: 'Dynamic and engaging performances on the big stage.',
  },
  {
    icon: CalendarDays,
    title: 'Private Events',
    description: 'Tailored performances for weddings, private parties, and special occasions.',
  },
  {
    icon: Guitar,
    title: 'Gigs & Showcases',
    description: 'Intimate and acoustic sessions at various venues and showcases.',
  },
];

export function Events() {
  return (
    <section id="events" className="py-1 sm:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Perfect For Any Event
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We cater to a wide variety of events, bringing a touch of class and soul to every performance.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((event) => (
            <div key={event.title} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <event.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                <p className="mt-1 text-base text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
