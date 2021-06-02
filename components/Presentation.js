import styles from "../styles/Presentation.module.css"
import Image from "next/image"

export default function Presentation ({img}) {

    return(
        <main className={styles.main}>
    <section>
            <article>
            <div className={styles.square}></div>
            <Image
            src={img}
            alt="Juan Ignacio Cali"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100}
            />
            </article>
            <article>
                <h3>
                    JUAN IGNACIO CALI
                </h3>
                <p>
                Hola! 👋🏼  Soy Juan Ignacio.<br/>
                Tengo 27 años y vivo en La Plata,<br/>
                Argentina.<br/>
                Soy Licenciado en Diseño Multimedia y actualmente trabajo como Director Creativo, Filmmaker & Motion Designer.
                Si querés saber más sobre mi, mirá el video que está mas abajo!
                </p>
                <div className={styles.circles}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </article>
    </section>
</main>
    )
}