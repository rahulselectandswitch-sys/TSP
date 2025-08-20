import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Events as EventsSection } from "@/components/sections/events";

export default function EventsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <EventsSection />
            </main>
            <Footer />
        </div>
    );
}
