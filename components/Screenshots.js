import Image from "next/image"
import styles from "../styles/Screenshots.module.css"

export default function Screenshots ({screenshots}) {
    return (
        <section className={styles.container}>
            {screenshots && screenshots.map(item => {
                return (
                    <article key={item}>
                        <Image
                        src={item}
                        alt="Captura del video"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        />
                    </article>
                )
            })}
        </section>
    )
}