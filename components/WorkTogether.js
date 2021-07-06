import styles from "../styles/WorkTogether.module.css"
import Link from "next/link"

export default function WorkTogether ({text, link}) {
    return (
        <div className={styles.container}>
            <a href={link} target={text && text == 'Trabajemos juntos!' ? "_self" : "_blank"}>
            <section>
                <h2>{text}</h2>
                <img src="/img/arrow.svg" alt={text}/>
            </section>
            </a>
        </div>
    )
}