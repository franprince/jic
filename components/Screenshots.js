import styles from "../styles/Screenshots.module.css"

export default function Screenshots ({pictures}) {

    const length = pictures.length

    return (
        <section className={styles.container} style={
            length >= 7 && typeof pictures != 'string' ? {display: "none"} :
            length == 1 || typeof pictures == 'string' ? {gridTemplateColumns: "1fr"} :
            length == 2 || length == 4 ? {gridTemplateColumns: "1fr 1fr"} :
            length == 3 || length == 6  || length == 5 ? {gridTemplateColumns: "1fr 1fr 1fr"} :
            null
        }>
            {pictures && typeof pictures != 'string' && pictures.map(item => {
                return (
                    <article key={item} style={length == 5 && pictures.indexOf(item) == 0 ? {gridRow: "1/3"} : null}>
                        <img src={item} alt="Screenshot" />
                    </article>
                )
            })}
            { typeof pictures == 'string' && 
                <article key={pictures}>
                        <img src={pictures} alt="Screenshot" />
                    </article>
            }

        </section>
    )
}