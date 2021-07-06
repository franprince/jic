import styles from "../styles/Screenshots.module.css"

export default function Screenshots ({pictures}) {

    const length = pictures.length

    return (
        <section className={pictures && pictures.length > 1 ? styles.container : styles.single}>
            {pictures && pictures.length > 1 ? pictures.map((item, index) => {
                return (
                    <article key={item} className={pictures.length == 3 && index == 2 ? styles.doubleOf3 :
                                                    pictures.length == 5 && index == 4 ? styles.doubleOf5 : null}>
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