'use client';
import { useEffect, useState } from 'react';
import styles from './Notification.module.css';

interface NotificationProps {
    message: string;
    type: 'success' | 'error';
}

export default function Notification({ message, type }: NotificationProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`${styles.notificationContainer} ${styles[type]}`}>
            <div className={styles.notificationContent}>{message}</div>
        </div>
    );
}