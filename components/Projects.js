import projects from "../projects.json"
import styles from "../styles/ProjectsContainer.module.css"
import ProjectCard from "../components/ProjectCard"
import {useState} from "react"

export default function ProjectsContainer () {

    const [shown, setShown] = useState(projects)

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.value == "all") {
            setShown(projects)
        } else {
            const filtered = projects.filter(project => project.category.includes(e.target.value))
            setShown(filtered)
        }
        
    }
    return(
        <main className={styles.container}>
            <section className={styles.projects}>
                <div className={styles.buttons}>
                    <button value="all" onClick={handleClick}>Todos</button>
                    <button value="Publicidad" onClick={handleClick}>Publicidad</button>
                    <button value="Institucional" onClick={handleClick}>Institucional</button>
                </div>
            
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
        </main>
    )
}