import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Contact as ContactSection } from "@/components/sections/contact";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}