import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Gallery as GallerySection } from "@/components/sections/gallery";

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <GallerySection />
            </main>
            <Footer />
        </div>
    );
}