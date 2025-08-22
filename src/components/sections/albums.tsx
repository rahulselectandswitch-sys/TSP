import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const albums = [
  {
    title: 'Echoes in Silence',
    releaseDate: 'October 26, 2023',
    videoId: 'LRVeMzzPans',
    tracks: ['Serenade in Blue', 'Golden Hour Echo', 'City Lights Whisper', 'Fading Embers', 'Unspoken Melodies'],
  },
  {
    title: 'Urban Soulscape',
    releaseDate: 'March 15, 2022',
    videoId: 'WT1o011upGA',
    tracks: ['Downtown Groove', 'Rooftop Dreams', 'Neon Heartbeat', 'Asphalt Ballad', 'Morning Commute'],
  },
  {
    title: 'The Fireside Sessions',
    releaseDate: 'November 01, 2020',
    videoId: 'jini5G6nk1E',
    tracks: ['Warmth of the Chord', 'Crackling Vinyl', 'Story in a Song', 'Hearthside Harmony', 'Winter\'s Lullaby'],
  },
];

export function Albums() {
  return (
    <section id="albums" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Our Discography
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our collection of soulful interpretations and original compositions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <Card key={album.title} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110"
                  src={`https://www.youtube.com/embed/${album.videoId}?autoplay=1&mute=1&loop=1&playlist=${album.videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={album.title}
                ></iframe>
                 <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/70" />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{album.title}</CardTitle>
                <CardDescription>{album.releaseDate}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="mb-2 font-semibold text-sm text-muted-foreground">TRACKS</h4>
                <ul className="space-y-1 text-sm">
                  {album.tracks.map((track) => (
                    <li key={track} className="flex items-center">
                      <svg className="h-3 w-3 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {track}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
