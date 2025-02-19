import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import localFont from "next/font/local";
import '../../styles/globals.css'

const truesdell = localFont({
    src: "../../../public/fonts/truesdell_std_bold_italic.otf",
    style: "italic",
    variable: "--font-truesdell",
});

const monsterrat = localFont({
    src: "../../../public/fonts/montserrat_variable_font_wght.ttf",
    style: "italic",
    variable: "--font-monsterrat",
});

export default async function LocaleLayout({ children, params: {locale} } : {
    children: React.ReactNode;
    params: {locale: string};
}) {
    if (!routing.locales.includes(locale as never)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className={`${truesdell.variable} ${monsterrat.variable}`}>
        <body>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}