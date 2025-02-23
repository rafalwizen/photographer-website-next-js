'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import { useTranslations } from 'next-intl';
import styles from './Navbar.module.css'

export default function Navbar() {
    const router = useRouter()
    const locale = useLocale()
    const [click, setClick] = useState(false)
    const t = useTranslations('navbar');

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeLanguage = () => {
        const newLocale = locale === 'pl' ? 'en' : 'pl'
        router.push(`/${newLocale}`)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <Link href={`/${locale}/`} onClick={closeMobileMenu} className={styles['navbar-logo']}>
                    <Image
                        src="/images/logo.jpg"
                        alt="Profile"
                        width={75}
                        height={75}
                        className={styles['navbar-logo-image']}
                    />
                    <span className={styles['navbar-logo-text']}>Paweł Rozbicki</span>
                </Link>

                <div className={styles['menu-icon']} onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={`${styles['nav-menu']} ${click ? styles.active : ''}`}>
                    <li className={styles['nav-item']}>
                        <Link href={`/${locale}/`} className={styles['nav-links']} onClick={closeMobileMenu}>
                            {t('about_me')}
                        </Link>
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href={`/${locale}/gallery`} className={styles['nav-links']} onClick={closeMobileMenu}>
                            {t('gallery')}
                        </Link>
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href={`/${locale}/contact`} className={styles['nav-links']} onClick={closeMobileMenu}>
                            {t('contact')}
                        </Link>
                    </li>
                </ul>

                <div className={styles['language-switcher']}>
                    <button onClick={changeLanguage}>
                        {locale === 'pl' ? 'EN' : 'PL'}
                    </button>
                </div>
            </div>
        </nav>
    )
}