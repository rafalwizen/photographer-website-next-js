'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Opinions.module.css';

interface Opinion {
    img: string;
    text: string;
}

export default function Opinions() {
    const [currentComment, setCurrentComment] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [opinionsData, setOpinionsData] = useState<Opinion[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/config/opinionsConfig.json');
                const data = await response.json();
                setOpinionsData(data);
            } catch (error) {
                console.error('Error loading opinions:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setCurrentComment(prev => (prev + 1) % (opinionsData.length + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [opinionsData.length]);

    return (
        <div className={styles.opinionsContainer}>
            <div
                className={styles.opinionsWrapper}
                style={{
                    transform: `translateX(-${currentComment * 100}%)`,
                    transition: isAnimating ? "transform 1s ease-in-out" : "none",
                }}
            >
                {opinionsData.map((opinion, index) => (
                    <div key={index} className={styles.opinion}>
                        <Image
                            src={opinion.img}
                            alt="opinion"
                            width={100}
                            height={100}
                            className={styles.opinionImage}
                        />
                        <p>{opinion.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}