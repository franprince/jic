import styles from "../styles/ProjectHeader.module.css"

export default function ProjectHeader ({title, brand, category}) {
    return (
        <header className={styles.container}>
            <section className={styles.content}>
                <h3>{brand}</h3>
                <h2>{title}</h2>
                <h4>{category}</h4>
            </section>
        </header>
    )
}