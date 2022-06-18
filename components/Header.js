import React from 'react'
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header({ title, subtitle, img, home, mobileImg, changeOnMobile, size }) {
    const videoRef = React.useRef();
    React.useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <header className={home ? styles.homeWrapper : styles.wrapper} id="header">
            <div className={styles.header}>
                {/* <Image
                    src={!changeOnMobile ? img : size.width < 700 ? mobileImg : img}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={!changeOnMobile ? "center" : size.width < 700 && "center"}
                    quality={100}
                /> */}
                <video ref={videoRef} src="/video-bg.mp4" muted loop autoplay></video>
                <section className={styles.elements}>
                    <h1>{title}</h1>
                    {subtitle && (
                        <h2>
                            <i className={styles.i}>{subtitle}</i>
                        </h2>
                    )}
                    {title == "JUAN IGNACIO CALI" && (
                        <Link href="/#projects">
                            <a>Ver trabajos</a>
                        </Link>
                    )}
                </section>
            </div>
        </header>
    );
}
