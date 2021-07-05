import Link from "next/link"
import styles from "../styles/DoubleCard.module.css"

export default function SingleCard ({item}) {
    return(
        <Link href={`/projects/${item.slug.current}`}>
            <article className={styles.card}>
                <div className={styles.content}>
                    <section className={styles.info}>
                        <h2>{item.name}</h2>
                        <h3>{item.categories.join(", ")}</h3>
                    </section>
                </div>
                <div className={styles.img}>
                    <img src={item.imageUrl} alt={item.name} className={styles.imgBorder}/>
                </div>
            </article>
        </Link>
    )
}