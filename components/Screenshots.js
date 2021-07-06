import styles from "../styles/Screenshots.module.css"

export default function Screenshots ({pictures}) {

    const length = pictures.length

    return (
        <section className={styles.container}>
            {pictures && typeof pictures != 'string' && pictures.map((item, index) => {
                return (
                    <article key={item} className={pictures.length == 3 && index == 2 ? styles.doubleOf3 : pictures.length == 5 && index == 4 ? styles.doubleOf5 : null}>
                        <img src={item} alt="Screenshot" />
                    </article>
                )
            })}
            { typeof pictures == 'string' && 
                <article key={pictures} style={{gridColumn: "1/-1"}}>
                        <img src={pictures} alt="Screenshot" />
                    </article>
            }

        </section>
    )
}