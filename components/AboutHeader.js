import styles from "../styles/AboutHeader.module.css"
import Image from "next/image"

export default function AboutHeader ({title, img, contact, mobileTitle}) {
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
                <section className={contact && styles.contactTitles}>
                    <h1>{title}</h1>
                    {
                        contact && <h1>{mobileTitle}</h1>
                    }
                </section>
            </div>
        </header>
    )
}