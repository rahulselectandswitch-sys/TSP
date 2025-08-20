"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
  });
  const { toast } = useToast();

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

    const subject = encodeURIComponent(`Booking Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nEvent Details:\n${formData.details}`
    );
    window.location.href = `mailto:booking@thesuryanshproject.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening Email Client",
      description: "Please complete the booking inquiry in your email application.",
    });

    setFormData({ name: '', email: '', details: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Contact & Booking
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Interested in booking us for your event? Fill out the form below.
          </p>
        </div>
        <div className="mt-12">
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
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
