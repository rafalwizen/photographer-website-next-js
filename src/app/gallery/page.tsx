import { Metadata } from 'next';
import path from 'path';
import fs from 'fs/promises';
import styles from './gallery.module.css';

export const metadata: Metadata = {
    title: 'Gallery | Paweł Rozbicki Photography',
};

async function getGalleryData() {
    const configPath = path.join(process.cwd(), 'public', 'config', 'galleriesConfig.json');
    const configData = await fs.readFile(configPath, 'utf8');
    return JSON.parse(configData);
}

export default async function GalleryPage() {
    const galleries = await getGalleryData();

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.thumbnailGrid}>
                {galleries.map((gallery) => (
                    <Link
                        key={gallery.id}
                        href={`/gallery/${gallery.folder}`}
                        className={styles.galleryThumbnail}
                    >
                        <Image
                            src={`/images/${gallery.folder}/${gallery.thumbnail}`}
                            alt={`${gallery.name} thumbnail`}
                            width={400}
                            height={267}
                            className={styles.thumbnailImage}
                        />
                        <div className={styles.thumbnailTitle}>{gallery.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}