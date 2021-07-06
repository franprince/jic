import styles from "../styles/WorkTogether.module.css"
import Link from "next/link"

export default function WorkTogether ({text, link}) {
    return (
        <div className={styles.container}>
            <Link href={link}>
            <a>
            <section>
                <h2>{text}</h2>
                <img src="/img/arrow.svg" alt={text}/>
            </section>
            </a>
            </Link>
        </div>
    )
}