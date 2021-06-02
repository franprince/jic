import styles from "../styles/Description.module.css"

export default function Description ({title, text, credits}) {
    return (
        <section className={styles.description} style={credits && {backgroundColor: "#000", color: "white"}}>
            <article>
                <h2>{title}</h2>
                <p>{text}</p>
            </article>
        </section>
    )
}