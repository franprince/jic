import styles from "../styles/Featured.module.css"
import Link from 'next/link'
import ProjectCard from "../components/ProjectCard"

export default function Featured ({projects}) {

    const featured = projects.filter(project => project.featured == true)
    
    return(
        <div className={styles.container}>
            <div className={styles.grid}>
                { featured.map(item => {
                    return(
                        <ProjectCard item={item} shown={featured} key={item._id}/>
                    )
                })}
                </div>
            <Link href="/projects"><a>Ver más proyectos</a></Link>
        </div>
    )
}