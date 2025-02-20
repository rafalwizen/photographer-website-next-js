import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
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