import styles from "../styles/Featured.module.css"
import featured from "../featured.json"
import FeaturedCard from "../components/FeaturedCard"
import Link from 'next/link'

export default function Featured () {
    
    return(
        <div className={styles.container}>
            <div className={styles.grid}>
                { featured.map(item => { // Por cada item en el JSON featured, devuelve una tarjeta cuya clase va a depender o no de la key "double"
                    return(
                        <FeaturedCard
                        key={featured.indexOf(item)}
                        title={item.title}
                        category={item.category}
                        img={item.img}
                        className={item.double ? styles.f1 : styles.f2}
                        double={item.double}/>
                    )
                })}
                </div>
            <Link href="/projects"><a>Ver más proyectos</a></Link>
        </div>
    )
}