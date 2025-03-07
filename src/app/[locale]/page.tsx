import About from "@/components/about/About";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "O mnie - Paweł Rozbicki - Fotograf ślubny Tarnowskie Góry",
    description: "Poznaj Pawła Rozbickiego, fotografa ślubnego z Tarnowskich Gór. Z pasją uchwyci najważniejsze momenty w Twoim życiu. Fotografia, która opowiada historie.",
    keywords: "fotograf ślubny, O mnie, Paweł Rozbicki, Tarnowskie Góry, pasja, doświadczenie, sesje ślubne",
    robots: "index, follow",
    alternates: {
        canonical: "https://rozbickipawel.pl/",
        languages: {
            "en": "https://rozbickipawel.pl/en/",
            "pl": "https://rozbickipawel.pl/pl/",
        },
    },
};


export default function HomePage() {
    return (
        <About />
    );
}