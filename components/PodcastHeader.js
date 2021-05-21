import styles from "../styles/PodcastHeader.module.css"
import Image from "next/image"

export default function PodcastHeader ({img}) {
    return (
        <header className={styles.wrapper}>
            <div className={styles.header}>
            <Image
                src={img}
                alt="Juan Ignacio Cali's Podcast"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority={true}
                />
                <section>
                <h1><i>THE CALI SHOW</i></h1>
                <h2><i>PODCAST</i></h2>
                </section>
            </div>
        </header>
    )
}