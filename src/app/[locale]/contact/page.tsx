import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt - Paweł Rozbicki - Fotograf ślubny Tarnowskie Góry",
    description: "Skontaktuj się z Pawłem Rozbickim, profesjonalnym fotografem ślubnym z Tarnowskich Gór. Zarezerwuj swoją sesję ślubną już teraz.",
    keywords: "kontakt, fotograf ślubny, Tarnowskie Góry, sesja ślubna, kontakt fotografa, zarezerwuj sesję, wesele",
    robots: "index, follow",
    alternates: {
        canonical: "https://rozbickipawel.pl/pl/contact",
        languages: {
            "en": "https://rozbickipawel.pl/en/contact",
            "pl": "https://rozbickipawel.pl/pl/contact",
        },
    },
};


export default function ContactPage() {
    return (
        <ContactForm />
    );
}