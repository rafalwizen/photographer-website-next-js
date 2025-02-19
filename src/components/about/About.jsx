import './About.css';
import {useTranslations} from 'next-intl';
import Image from "next/image";

const About = () => {
    const t = useTranslations('about');

    return (
        <div className="about">
            <div className="content">
                <p>{t('temp_p')}</p>
                <div className="social-icons">
                    <a
                        href="https://www.instagram.com/p_rozbicki/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/Instagram_logo.png"
                            alt="Instagram"
                            width={150}
                            height={50}
                        />
                    </a>
                    <a
                        href="https://www.rozbicki.mywed.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/MyWed_logo.png"
                            alt="MyWed"
                            width={150}
                            height={50}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
