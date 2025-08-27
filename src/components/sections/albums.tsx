"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Play } from "lucide-react";

const albums = [
  {
    title: "Echoes in Silence",
    releaseDate: "16th Nov 2024",
    videoId: "Ae_U1YT03gY",
    tracks: [" Echoes through cords"],
  },
  {
    title: "Urban Soulscape",
    releaseDate: "March 15, 2022",
    videoId: "LRVeMzzPans",
    tracks: ["Urban Mix tap"],
  },
  {
    title: "The Fireside Sessions",
    releaseDate: "November 01, 2020",
    videoId: "rywTJcChjIM",
    tracks: ["Warmth of the Chord"],
  },
];

export function Albums() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section id="albums" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Discography</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our collection of soulful interpretations and original compositions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => {
            const isPlaying = playingVideoId === album.videoId;

            return (
              <Card
                key={album.title}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="relative aspect-video w-full">
                  {isPlaying ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${album.videoId}?autoplay=1&mute=1&loop=1&playlist=${album.videoId}&controls=1&modestbranding=1`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={album.title}
                    />
                  ) : (
                    <>
                      {/* YouTube thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${album.videoId}/hqdefault.jpg`}
                        alt={album.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                      {/* Overlay + Play button */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      <button
                        type="button"
                        onClick={() => setPlayingVideoId(album.videoId)}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Play ${album.title}`}
                      >
                        <span className="flex items-center justify-center rounded-full p-4 bg-white/90 backdrop-blur shadow-lg transition-transform group-hover:scale-105">
                          <Play className="h-8 w-8" />
                        </span>
                      </button>
                    </>
                  )}
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
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {track}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
