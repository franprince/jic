import styles from "../styles/Presentation.module.css"
import Image from "next/image"

export default function Presentation ({img}) {

    return(
        <main className={styles.main}>
    <section>
            <article>
            <Image
            src={img}
            alt="Juan Ignacio Cali"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100}
            priority={true}
            />
            </article>
            <article>
                <h3>
                    Juan Ignacio Cali
                </h3>
                <p>
                Hola! 👋🏼  Soy Juan Ignacio.<br/>
                Tengo 27 años y vivo en Buenos Aires, 
                Argentina.<br/>
                Soy Licenciado en Diseño Multimedia y actualmente trabajo como Director Creativo, Filmmaker & Motion Designer.<br/>
                Si querés saber más sobre mi, mirá el video que está mas abajo!
                </p>
                <div className={styles.links}>
                    <a href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA">
                        <img src="/img/youtube.svg" alt="Ir a YouTube"/>
                    </a>
                    <a href="mailto:juanignaciocali@gmail.com">
                        <img src="/img/gmail.svg" alt="Contactame por email"/>
                    </a>
                    <a href="https://www.instagram.com/juanignaciocali/">
                        <img src="/img/instagram.png" alt="Ir a Instagram"/>
                    </a>
                    <a href="wa.link/yxd518">
                        <img src="/img/wsp.svg" alt="Contactame por WhatsApp"/>
                    </a>
                </div>
            </article>
    </section>
</main>
    )
}