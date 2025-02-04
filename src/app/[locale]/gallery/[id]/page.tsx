import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './gallery.module.css';

interface GalleryPageProps {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
    return {
        title: `Gallery ${params.id} | Paweł Rozbicki Photography`
    };
}

async function getGalleryImages(galleryId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/galleries/${galleryId}`);
    if (!response.ok) return null;
    return response.json();
}

export default async function GalleryPage({ params }: GalleryPageProps) {
    const images = await getGalleryImages(params.id);
    if (!images) notFound();

    return (
        <div className={styles.galleryGrid}>
            {images.map((image, index) => (
                <div key={index} className={styles.galleryItem}>
                    <Image
                        src={`/images/${params.id}/${image}`}
                        alt={`Gallery image ${index + 1}`}
                        width={800}
                        height={533}
                        className={styles.galleryImage}
                    />
                </div>
            ))}
        </div>
    );
}