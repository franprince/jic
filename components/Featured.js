import styles from "../styles/Featured.module.css"
import FeaturedCard from "../components/FeaturedCard"
import Link from 'next/link'

export default function Featured ({projects}) {

    const featured = projects.filter(project => project.featured == true)
    
    return(
        <div className={styles.container}>
            <div className={styles.grid}>
                { featured.map(item => { // Por cada item en el JSON featured, devuelve una tarjeta cuya clase va a depender o no de la key "double"
                    return(
                        <FeaturedCard key={item._id} item={item} index={featured.indexOf(item)} className={featured.indexOf(item) == 0 ? styles.f1 : styles.f2}/>
                    )
                })}
                </div>
            <Link href="/projects"><a>Ver más proyectos</a></Link>
        </div>
    )
}