'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from '../contact/ContactForm';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const t = useTranslations();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={sidebarRef} className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.sidebarIcon} onClick={() => setIsOpen(!isOpen)}>
                <span>☰ {t('sidebar.contact')}</span>
            </div>
            <div className={`${styles.sidebarContent} ${isOpen ? styles.open : ''}`}>
                <ContactForm />
            </div>
        </div>
    );
}