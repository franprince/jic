import Image from 'next/image'
import styles from "../styles/ContactCard.module.css"

export default function ContactCard ({img}) {
    return (
        <div className={styles.container}>
            <section className={styles.picture}>
            <Image
                src={img}
                alt="Juan Ignacio Cali"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                quality={100}
                />
            </section>
            <section className={styles.info}>
                <article className={styles.content}>
                <h2>@juanignaciocali</h2>
                <h3>Contactate conmigo!</h3>
                <article className={styles.links}>
                <a href="mailto:juanignaciocali@gmail.com">
                    <img src="/img/mail.png" alt="Contactame por email" className={styles.icon}/>
                </a>
                <a href="https://www.instagram.com/juanignaciocali/">
                    <img src="/img/instagram.png" alt="Ir a Instagram" className={styles.icon}/>
                </a>
                </article>
                </article>
            </section>
        </div>
    )
}