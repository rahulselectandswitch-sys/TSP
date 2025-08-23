import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Music } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const videos = [
  { videoId: 'WT1o011upGA', title: 'Live at the Grand Theater' },
  { videoId: 'mTJmeegEbkk', title: 'The Suryansh Project | Super Ensemble' },
  { videoId: 'jini5G6nk1E', title: 'Punjabi Mixtape | Live Showreel 2024' },
  { videoId: 'YzVgN6q_E0A', title: 'POPMIX | Live Showreel 2024 ' },
  { videoId: 'Ae_U1YT03gY', title: 'Sab Jag Soye | Live at The Piano Man' },
  { videoId: 'rywTJcChjIM', title: 'Kadi Aavo Ni | The Suryansh Project Live' },
  { videoId: 'fNHatg48Cis', title: 'Sab Jag Soye | All About Dance and Music' },
  { videoId: 'LRVeMzzPans', title: 'Half Love | The Suryansh Project Originals | 2024' },
];

const galleryImages = [
  { src: '/gallery/photo1.jpg', alt: 'Band performing on stage with blue lights', aiHint: 'band performance' },
  { src: '/gallery/photo2.jpg', alt: 'Close-up of a guitarist playing', aiHint: 'guitarist solo' },
  { src: '/gallery/photo3.jpg', alt: 'Lead singer in a passionate performance', aiHint: 'singer portrait' },
  { src: '/gallery/photo4.jpg', alt: 'Drummer in action during a concert', aiHint: 'drummer action' },
  { src: '/gallery/photo5.jpg', alt: 'The full band posing for a photo', aiHint: 'band portrait' },
  { src: '/gallery/photo6.jpg', alt: 'Audience enjoying the show', aiHint: 'concert crowd' },
];

const recentEvents = [
  {
    title: 'City Music Festival',
    location: 'Mumbai, India',
    date: 'October 28, 2023',
    icon: Music,
  },
  {
    title: 'Corporate Gala',
    location: 'Bengaluru, India',
    date: 'September 15, 2023',
    icon: CalendarDays,
  },
  {
    title: 'Unplugged at The Finch',
    location: 'New Delhi, India',
    date: 'August 05, 2023',
    icon: MapPin,
  },
];

const latestAlbum = {
    title: 'Echoes in Silence',
    releaseDate: 'October 26, 2023',
    videoId: 'LRVeMzzPans',
    tracks: ['Serenade in Blue', 'Golden Hour Echo', 'City Lights Whisper', 'Fading Embers', 'Unspoken Melodies'],
};

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

        <Tabs defaultValue="videos" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="events">Recent Events</TabsTrigger>
            <TabsTrigger value="album">Latest Album</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="mt-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {videos.map((video, index) => (
                <div key={index} className="group relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                   <iframe
                        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110"
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={video.title}
                    ></iframe>
                    <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/70" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                        <h3 className="text-xl font-bold font-headline">{video.title}</h3>
                    </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos" className="mt-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
          </TabsContent>

          <TabsContent value="events" className="mt-8">
            <div className="max-w-2xl mx-auto">
                <ul className="space-y-6">
                {recentEvents.map((event, index) => (
                    <li key={index} className="flex items-center p-4 bg-card rounded-lg shadow-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mr-6">
                            <event.icon className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-foreground">{event.title}</h4>
                            <p className="text-sm text-muted-foreground">{event.location} - {event.date}</p>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
          </TabsContent>

          <TabsContent value="album" className="mt-8">
            <div className="flex justify-center">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group max-w-md">
                <div className="relative aspect-video w-full">
                <iframe
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110"
                    src={`https://www.youtube.com/embed/${latestAlbum.videoId}?autoplay=1&mute=1&loop=1&playlist=${latestAlbum.videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={latestAlbum.title}
                ></iframe>
                    <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/70" />
                </div>
                <CardHeader>
                <CardTitle className="font-headline text-2xl">{latestAlbum.title}</CardTitle>
                <CardDescription>{latestAlbum.releaseDate}</CardDescription>
                </CardHeader>
                <CardContent>
                <h4 className="mb-2 font-semibold text-sm text-muted-foreground">TRACKS</h4>
                <ul className="space-y-1 text-sm">
                    {latestAlbum.tracks.map((track) => (
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
            </div>
          </TabsContent>

        </Tabs>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          For more photos and videos, follow us on our social media channels.
        </p>
      </div>
    </section>
  );
}
