'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Notification from '../notification/Notification';
import styles from './ContactForm.module.css'

interface NotificationState {
    message: string;
    type: 'success' | 'error';
}

export default function ContactForm() {
    const t = useTranslations('contact');
    const [notification, setNotification] = useState<NotificationState | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const formDataObject = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            });

            if (response.ok) {
                setNotification({ message: t('send_alert_success'), type: 'success' });
                form.reset();
            } else {
                setNotification({ message: t('send_alert_error'), type: 'error' });
            }
        } catch (error) {
            console.error(error);
            setNotification({ message: t('send_alert_error'), type: 'error' });
        }

        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <>
            <div className={styles["contact-container"]}>
                <form onSubmit={handleSubmit} className={styles["contact-form"]}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="name">{t('name')}:</label>
                        <input type="text" id="name" name="name" value={formData.name} required onChange={handleChange} />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">{t('email')}:</label>
                        <input type="email" id="email" name="email" value={formData.email} required onChange={handleChange} />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="phone">{t('phone')}:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} required onChange={handleChange} />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="weddingDate">{t('wedding_date')}:</label>
                        <input type="date" id="weddingDate" name="weddingDate" value={formData.weddingDate} required onChange={handleChange} />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="message">{t('message')}:</label>
                        <textarea id="message" name="message" value={formData.message} required onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className={styles["submit-button"]}>{t('send')}</button>
                </form>
                <div className={styles["contact-info"]}>
                    <Image src="/images/img-test-5-small.jpg" alt="Example" width={300} height={200} />
                    <p>{t('info')}</p>
                    <p className={styles["mail"]}>pawel.rozbicki@gmail.com</p>
                </div>
            </div>
            {notification && <Notification message={notification.message} type={notification.type} />}
        </>
    );
}