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
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/public" onClick={closeMobileMenu} className="navbarLogo">
                    <Image
                        src="/images/logo.jpg"
                        alt="Profile"
                        width={75}
                        height={75}
                        className="navbarLogoImage"
                    />
                    <span className="navbarLogoText">Paweł Rozbicki</span>
                </Link>

                <div className="menuIcon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={`${styles.navMenu} ${click ? styles.active : ''}`}>
                    <li className="navItem">
                        <Link href="/public" className="navLinks" onClick={closeMobileMenu}>
                            {t('about_me')}
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link href="/gallery" className="navLinks" onClick={closeMobileMenu}>
                            {t('gallery')}
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link href="/contact" className="navLinks" onClick={closeMobileMenu}>
                            {t('contact')}
                        </Link>
                    </li>
                </ul>

                <div className="languageSwitcher">
                    <button onClick={changeLanguage}>
                        {locale === 'pl' ? 'EN' : 'PL'}
                    </button>
                </div>
            </div>
        </nav>
    )
}