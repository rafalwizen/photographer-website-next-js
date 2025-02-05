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
            <div className={styles.navbarContainer}>
                <Link href="/public" onClick={closeMobileMenu} className={styles.navbarLogo}>
                    <Image
                        src="/images/logo.jpg"
                        alt="Profile"
                        width={75}
                        height={75}
                        className={styles.navbarLogoImage}
                    />
                    <span className={styles.navbarLogoText}>Paweł Rozbicki</span>
                </Link>

                <div className={styles.menuIcon} onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={`${styles.navMenu} ${click ? styles.active : ''}`}>
                    <li className={styles.navItem}>
                        <Link href="/public" className={styles.navLinks} onClick={closeMobileMenu}>
                            {t('navbar.about_me')}
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/gallery" className={styles.navLinks} onClick={closeMobileMenu}>
                            {t('navbar.gallery')}
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact" className={styles.navLinks} onClick={closeMobileMenu}>
                            {t('navbar.contact')}
                        </Link>
                    </li>
                </ul>

                <div className={styles.languageSwitcher}>
                    <button onClick={changeLanguage}>
                        {locale === 'pl' ? 'EN' : 'PL'}
                    </button>
                </div>
            </div>
        </nav>
    )
}