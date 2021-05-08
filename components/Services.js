import servicesList from "../services.json"
import styles from "../styles/Services.module.css"

export default function Services () {

    return (
        <div className={styles.wrapper} id="services">
            <section>
            <h2>SERVICIOS</h2>
            <div className={styles.services}>
            {servicesList.map((category => { //Por cada objecto del array servicesList devuelve una lista desordenada con el título de la categoría y cada item de la misma.
                return (
                    <section className={styles.category} key={category.title}>
                        <h3>{category.title}</h3>
                        <ul>
                            {category.items.map((item) => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })}
                        </ul>
                    </section>
                )
            }))}
            </div>
            </section>
        </div>
    )
}