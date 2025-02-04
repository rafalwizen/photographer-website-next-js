import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    const t = useTranslations('about');

    return (
        <div className={styles.about}>
            <div className={styles.content}>
                <p>{t('temp_p')}</p>
                <div className={styles.socialIcons}>
                    <a href="https://www.instagram.com/p_rozbicki/" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/Instagram_logo.png" alt="Instagram" width={40} height={40} />
                    </a>
                    <a href="https://www.rozbicki.mywed.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/MyWed_logo.png" alt="MyWed" width={40} height={40} />
                    </a>
                </div>
            </div>
        </div>
    );
}