import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paweł Rozbicki Photography',
  description: 'Professional Photography Portfolio',
};

export default async function RootLayout({
                                           children,
                                           params: { locale }
                                         }: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;

  return (
      <html lang={locale}>
      <body className={montserrat.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
        <main>{children}</main>
        <Sidebar />
      </NextIntlClientProvider>
      </body>
      </html>
  );
}