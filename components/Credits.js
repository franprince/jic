import styles from "../styles/Credits.module.css"
import Image from "next/image"

export default function Credits ({text}) {
    return(
        <section className={styles.credits}>
          <article className={styles.image}>
          <Image
                src="/img/separador.png"
                alt="Imagen de separador"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                />
          </article>
          <article className={styles.creditsInfo}>
            <article>
            <h2>Créditos</h2>
            <p>
            {text}
            </p>
            </article>
          </article>
        </section>
    )
}