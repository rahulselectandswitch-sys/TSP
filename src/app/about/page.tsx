import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About as AboutSection } from "@/components/sections/about";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
}