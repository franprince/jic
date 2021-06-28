import servicesList from "../services.json"
import styles from "../styles/Services.module.css"

export default function Services () {

    return (
        <section className={styles.wrapper}>
            <div>
            <h2>Servicios</h2>
            <section className={styles.services}>
            {servicesList.map((category => { //Por cada objecto del array servicesList devuelve una lista desordenada con el título de la categoría y cada item de la misma.
                return (
                    <article className={styles.category} key={category.title}>
                        <h3>{category.title}</h3>
                        <ul>
                            {category.items.map((item) => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })}
                        </ul>
                    </article>
                )
            }))}
            </section>
            </div>
        </section>
    )
}