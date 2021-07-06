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
                <img src="/img/thecalishow.svg" alt="The Cali Show Podcast"></img>
                </section>
            </div>
        </header>
    )
}