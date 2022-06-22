import styles from "../styles/WorkTogether.module.css"
import Link from "next/link"

export default function WorkTogether({ text, link }) {
    return (
        <div className={styles.container}>
                <section>
                    <h2>{text}</h2>
                    <Link href="/#projects" target="_blank"  rel="noreferrer">
                        <button>Empecemos</button>
                    </Link>
                </section>
        </div>
    )
}
