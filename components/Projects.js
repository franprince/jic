import projects from "../projects.json"
import styles from "../styles/ProjectsContainer.module.css"
import ProjectCard from "../components/ProjectCard"
import {useState} from "react"

export default function ProjectsContainer () {

    const [shown, setShown] = useState(projects)


    return(
        <section className={styles.container}>
            <div className={styles.grid}>
                { shown.map(item => {
                    return <ProjectCard item={item} shown={shown}/>
                })}
                <article className={styles.last}>
                    <h2>Tu marca puede estar acá ;)</h2>
                    <p>Trabajemos juntos</p>
                </article>
            </div>
        </section>
    )
}