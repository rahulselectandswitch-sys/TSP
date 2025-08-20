import Image from 'next/image';

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Band performing on stage with blue lights', aiHint: 'band performance' },
  { src: 'https://placehold.co/600x400.png', alt: 'Close-up of a guitarist playing', aiHint: 'guitarist solo' },
  { src: 'https://placehold.co/600x400.png', alt: 'Lead singer in a passionate performance', aiHint: 'singer portrait' },
  { src: 'https://placehold.co/600x400.png', alt: 'Drummer in action during a concert', aiHint: 'drummer action' },
  { src: 'https://placehold.co/600x400.png', alt: 'The full band posing for a photo', aiHint: 'band portrait' },
  { src: 'https://placehold.co/600x400.png', alt: 'Audience enjoying the show', aiHint: 'concert crowd' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Gallery
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into our world of music and performance.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.aiHint}
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          For more photos and videos, follow us on our social media channels.
        </p>
      </div>
    </section>
  );
}
