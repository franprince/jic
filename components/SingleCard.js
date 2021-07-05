import Link from "next/link"
import styles from "../styles/SingleCard.module.css"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function SingleCard ({item, index}) {

    useEffect(() => AOS.init(), [])

    return(
        <Link href={`/projects/${item.slug.current}`}>
            <article className={styles.card}
            data-aos={index == 0 ? null : (index -1) % 3 != 0 ? "fade-left" : "fade-right"}
            >
                <div className={styles.img}>
                    <img src={item.imageUrl} alt={item.name} className={styles.imgBorder}/>
                </div>
                <div className={styles.content}>
                    <section className={styles.info}>
                        <h2>{item.name}</h2>
                        <h3>{item.categories.join(", ")}</h3>
                    </section>
                </div>
            </article>
        </Link>
    )
    
}