import styles from "../styles/Presentation.module.css"
import Image from "next/image"

export default function Presentation ({img, text}) {

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
                {text}
                </p>
                <div className={styles.links}>
                    <a href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA">
                        <img src="/img/youtube.svg" alt="Ir a YouTube"/>
                    </a>
                    <a href="mailto:juanignaciocali@gmail.com">
                        <img src="/img/gmail.svg" alt="Contactame por email"/>
                    </a>
                    <a href="https://www.instagram.com/juanignaciocali/">
                        <img src="/img/instagram.svg" alt="Ir a Instagram"/>
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