'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import { Notification } from '../Notification';

export default function ContactForm() {
    const t = useTranslations('contact');
    const [notification, setNotification] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/config/config.json');
            const config = await response.json();

            await emailjs.sendForm(
                config.emailjs.serviceID,
                config.emailjs.templateID,
                e.target,
                config.emailjs.userID
            );

            setNotification({ message: t('send_alert_success'), type: 'success' });
            e.target.reset();
        } catch (error) {
            setNotification({ message: t('send_alert_error'), type: 'error' });
        }

        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">{t('name')}:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                {/* Similar structure for other form fields */}
                <button type="submit" className={styles.submitButton}>
                    {t('send')}
                </button>
            </form>
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                />
            )}
        </>
    );
}