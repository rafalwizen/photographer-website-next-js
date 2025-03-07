import Gallery from "@/components/gallery/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galeria - Paweł Rozbicki - Fotograf ślubny w Tarnowskich Górach i Polsce",
    description: "Zobacz galerię zdjęć ślubnych autorstwa Pawła Rozbickiego. Uchwycone emocje, piękne momenty i niezapomniane wspomnienia z sesji ślubnych w Tarnowskich Górach i całej Polsce.",
    keywords: "fotografia ślubna, galeria, sesja ślubna, Tarnowskie Góry, wesele, zdjęcia ślubne, fotografia, ślub, Polska",
    robots: "index, follow",
    alternates: {
        canonical: "https://rozbickipawel.pl/pl/gallery",
        languages: {
            "en": "https://rozbickipawel.pl/en/gallery",
            "pl": "https://rozbickipawel.pl/pl/gallery",
        },
    },
};


export default function GalleryPage() {
    return (
        <Gallery />
    );
}