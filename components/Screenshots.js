import { useEffect, useState } from "react"
import styles from "../styles/Screenshots.module.css"

export default function Screenshots ({pictures, last}) {

    return (
        <section className={pictures.length > 1 ? styles.container : styles.single}>
            {pictures.length > 1 ? pictures.map((item, index) => {
                return (
                    <article key={item} className={((pictures.length - 1) % 3) == 0 && index == (pictures.length - 1) ? styles.lastSingle : ((pictures.length + 1) % 3 == 0 && (index - 1) % 3) == 0 ? null : styles.lastDouble}>
                        <img src={item} alt="Screenshot" />
                    </article>
                )
            }) :
            <article key={pictures} style={{gridColumn: "1/-1"}}>
                <img src={pictures} alt="Screenshot" />
            </article>}

        </section>
    )
}