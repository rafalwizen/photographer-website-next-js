import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function HomePage() {
    const t = useTranslations('navbar');
    return (
        <div>
            <h1>{t('home')}</h1>
            <Link href="/about">{t('about_me')}</Link>
        </div>
    );
}