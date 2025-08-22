import { Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/thesuryanshproject/' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/suryanshproject/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@THESURYANSHPROJECT/' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} THE SURYANSH PROJECT. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
