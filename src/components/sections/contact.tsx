"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
  });
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      })
      return;
    }

    // In a real app, you would send this to Firebase Firestore.
    // For this example, we'll simulate a successful submission.
    console.log("Form Data Submitted:", formData);
    
    setIsSubmitted(true);
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });

    setFormData({ name: '', email: '', details: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                    Contact & Booking
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Interested in booking us for your event? Fill out the form or use the contact information below.
                </p>
                <div className="mt-8 space-y-4">
                    <Link href="https://www.instagram.com/thesuryanshproject" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <Instagram className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">@thesuryanshproject</span>
                    </Link>
                    <a href="mailto:Subir@parikramainc.com" className="flex items-center gap-4 group">
                        <Mail className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                         <span className="text-muted-foreground group-hover:text-primary transition-colors">Subir@parikramainc.com</span>
                    </a>
                    <div className="flex items-center gap-4 group">
                        <Phone className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">9810058388</span>
                    </div>
                </div>
            </div>
            <div>
                 {isSubmitted ? (
                     <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-background rounded-lg shadow-lg">
                        <h3 className="font-headline text-2xl font-bold text-primary">Thank You!</h3>
                        <p className="mt-2 text-muted-foreground">Your message has been sent successfully. We'll be in touch soon!</p>
                        <Button onClick={() => setIsSubmitted(false)} className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                            Send Another Message
                        </Button>
                    </div>
                 ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="details">Event Details</Label>
                        <Textarea
                            id="details"
                            placeholder="Tell us about your event (date, venue, type of event, etc.)"
                            rows={5}
                            value={formData.details}
                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                            required
                        />
                        </div>
                        <div className="text-left">
                        <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            Send Inquiry
                        </Button>
                        </div>
                    </form>
                 )}
            </div>
        </div>
      </div>
    </section>
  );
}
