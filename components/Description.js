import styles from "../styles/Description.module.css"

export default function Description ({title, text}) {
    return (
        <section className={styles.description}>
            <article>
                <h2>{title}</h2>
                <p>{text}</p>
            </article>
        </section>
    )
}