import styles from "../styles/AboutHeader.module.css"
import Image from "next/image"

export default function AboutHeader ({title, img}) {
    return (
        <header className={styles.wrapper}>
            <div className={styles.header}>
            <Image
                src={img}
                alt="Sobre mi"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority={true}
                />
                <section>
                    <h1>{title}</h1>
                </section>
            </div>
        </header>
    )
}