import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { Metadata } from "next";
import {routing} from '@/i18n/routing';
import localFont from "next/font/local";
import '../../styles/globals.css'
import Navbar from "@/components/navbar/Navbar";

const truesdell = localFont({
    src: "../../../public/fonts/truesdell_std_bold_italic.otf",
    style: "italic",
    variable: "--font-truesdell",
});

const montserrat = localFont({
    src: "../../../public/fonts/montserrat_variable_font_wght.ttf",
    style: "italic",
    variable: "--font-monsterrat",
});

export const metadata: Metadata = {
    title: "Paweł Rozbicki - Fotograf ślubny Tarnowskie Góry i cała Polska",
    description: "Profesjonalna fotografia ślubna w Tarnowskich Górach oraz całej Polsce. Uchwycimy najpiękniejsze momenty Waszego życia.",
    keywords: "fotograf ślubny, Tarnowskie Góry, sesja ślubna, fotografia ślubna, ślub, wesele, fotografia, Polska",
    robots: "index, follow",
    alternates: {
        canonical: "https://rozbickipawel.pl/",
        languages: {
            "en": "https://rozbickipawel.pl/en",
            "pl": "https://rozbickipawel.pl/pl",
        },
    },
};

export default async function LocaleLayout({ children, params }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = await Promise.resolve(params);

    if (!routing.locales.includes(locale as never)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className={`${truesdell.variable} ${montserrat.variable}`} suppressHydrationWarning>
        <body>
        <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}