import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [click, setClick] = useState(false)
    const { t, i18n } = useTranslation()

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'pl' ? 'en' : 'pl'
        i18n.changeLanguage(newLanguage)
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
                        {i18n.language === 'pl' ? 'EN' : 'PL'}
                    </button>
                </div>
            </div>
        </nav>
    )
}