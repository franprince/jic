import styles from "../styles/Featured.module.css"
import Link from 'next/link'
import ProjectCard from "../components/ProjectCard"

export default function Featured ({projects}) {

    const raw = projects.filter(project => project.featured == true)
    const featured = raw.slice(0,3)
    
    return(
        <main className={styles.container} id="projects">
            <div className={styles.grid}>
                { featured.map(item => {
                    return(
                        <ProjectCard item={item} shown={featured} key={item._id}/>
                    )
                })}
                </div>
            <Link href="/projects"><a>Ver más proyectos</a></Link>
        </main>
    )
}