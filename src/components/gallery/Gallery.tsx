'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from './Gallery.module.css'

import img1 from "../../../public/images/gallery/1-1.jpg";
import img2 from "../../../public/images/gallery/1-3.jpg";
import img3 from "../../../public/images/gallery/1-4.jpg";
import img4 from "../../../public/images/gallery/1-4a.jpg";
import img5 from "../../../public/images/gallery/1-6.jpg";
import img6 from "../../../public/images/gallery/3-1.jpg";
import img7 from "../../../public/images/gallery/3-4.png";
import img8 from "../../../public/images/gallery/4-0.jpg";
import img9 from "../../../public/images/gallery/4-1.jpg";
import img10 from "../../../public/images/gallery/4-2.jpg";
import img11 from "../../../public/images/gallery/4-3.jpg";
import img12 from "../../../public/images/gallery/4-4.jpg";
import img13 from "../../../public/images/gallery/4-7.jpg";
import img14 from "../../../public/images/gallery/5-1.jpg";
import img15 from "../../../public/images/gallery/5-2.jpg";
import img16 from "../../../public/images/gallery/6-1.jpg";
import img17 from "../../../public/images/gallery/6-2.jpg";
import img18 from "../../../public/images/gallery/6-3.jpg";
import img19 from "../../../public/images/gallery/6-4.jpg";
import img20 from "../../../public/images/gallery/6-5.jpg";
import img21 from "../../../public/images/gallery/7-1.jpg";
import img22 from "../../../public/images/gallery/7-2.jpg";
import img23 from "../../../public/images/gallery/7-3.jpg";
import img24 from "../../../public/images/gallery/7-4.jpg";
import img25 from "../../../public/images/gallery/7-5.jpg";
import img26 from "../../../public/images/gallery/8-1.jpg";
import img27 from "../../../public/images/gallery/8-2.jpg";
import img28 from "../../../public/images/gallery/9-1.jpg";
import img29 from "../../../public/images/gallery/9-2.jpg";
import img30 from "../../../public/images/gallery/9-3.jpg";
import img31 from "../../../public/images/gallery/9-4.jpg";
import img32 from "../../../public/images/gallery/9-6.jpg";
import img33 from "../../../public/images/gallery/9-7.jpg";
import img34 from "../../../public/images/gallery/9-8.jpg";
import img35 from "../../../public/images/gallery/9-9.jpg";
import img36 from "../../../public/images/gallery/9-10.jpg";
import img37 from "../../../public/images/gallery/9-10a.jpg";
import img38 from "../../../public/images/gallery/9-11.jpg";
import img39 from "../../../public/images/gallery/9-12.jpg";
import img40 from "../../../public/images/gallery/9-13.jpg";
import img41 from "../../../public/images/gallery/9-14.jpg";
import img42 from "../../../public/images/gallery/9-15.jpg";
import img43 from "../../../public/images/gallery/9-15a.jpg";
import img44 from "../../../public/images/gallery/10-1.jpg";
import img45 from "../../../public/images/gallery/10-3.jpg";
import img46 from "../../../public/images/gallery/10-4.jpg";
import img47 from "../../../public/images/gallery/10-5.jpg";
import img48 from "../../../public/images/gallery/10-5a.jpg";
import img49 from "../../../public/images/gallery/10-6.jpg";
import img50 from "../../../public/images/gallery/10-7.jpg";
import img51 from "../../../public/images/gallery/10-10.jpg";

type ImageType = {
    src: string;
    width: number;
    height: number;
};

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedImage]);

    // Przygotowanie tablicy obrazów ze ścieżkami src
    const images: ImageType[] = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
        img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
        img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
        img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51
    ];

    return (
        <>
            <div className={styles["gallery-container"]}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles["gallery-item"]}
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <Image
                            src={image}
                            alt={`Img ${index + 1}`}
                            fill
                            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                            className={styles["gallery-image"]}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className={styles["modal-overlay"]}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className={styles["modal-content"]}>
                        <Image
                            src={selectedImage}
                            alt="Selected photo"
                            className={styles["modal-image"]}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
