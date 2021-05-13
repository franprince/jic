import projects from "../projects.json"
import styles from "../styles/ProjectsContainer.module.css"
import ProjectCard from "../components/ProjectCard"
import {useState, useRef} from "react"

export default function ProjectsContainer () {

    const [shown, setShown] = useState(projects)
    const filter = useRef("0")

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.value == "all") {
            setShown(projects)
        } else {
            const filtered = projects.filter(project => project.category.includes(e.target.value))
            setShown(filtered)
        }
        filter.current = e.target.id
    }

    const selectedStyle = {
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        color: "white",
        outline: "none",
        padding: "0.5rem 1.2rem 0.5rem 1.2rem",
        backgroundColor: "#FF7843",
        border: "2px solid #FF7843",
        borderRadius: "50px",
        cursor: "pointer",
    }

    const notSelected = {
        fontFamily: "Poppins",
        fontWeight: "600",
        color: "white",
        outline: "none",
        padding: "0.5rem 1.2rem 0.5rem 1.2rem",
        backgroundColor: "transparent",
        border: "2px solid white",
        borderRadius: "50px",
        cursor: "pointer",
    }
    return(
        <main className={styles.container}>
            <section className={styles.projects}>
                <div className={styles.buttons}>
                    <button value="all" onClick={handleClick} id="0" className={filter.current == "0" ? styles.selected : styles.button}>Todos</button>
                    <button value="Publicidad" onClick={handleClick} id="1" className={filter.current == "1" ? styles.selected : styles.button}>Publicidad</button>
                    <button value="Travel Film" onClick={handleClick} id="2" className={filter.current == "2" ? styles.selected : styles.button}>Travel Film</button>
                    <button value="Institucional" onClick={handleClick} id="3" className={filter.current == "3" ? styles.selected : styles.button}>Institucional</button>
                    <button value="Animación" onClick={handleClick} id="4" className={filter.current == "4" ? styles.selected : styles.button}>Animación</button>
                </div>
            
                <div className={styles.grid}>
                    { shown.map(item => {
                        return (
                        <ProjectCard item={item} shown={shown} key={item.id}/>)
                    })}
                    <article className={shown.length > 1 ? styles.last : styles.lastDouble}>
                        <article>
                            <h2>Tu marca puede estar acá ;)</h2>
                            <a>Trabajemos juntos!</a>
                        </article>
                    </article>
                </div>
            </section>
        </main>
    )
}