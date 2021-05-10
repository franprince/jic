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
                    <button value="all" onClick={handleClick} id="0" style={filter.current == "0" ? selectedStyle : notSelected}>Todos</button>
                    <button value="Publicidad" onClick={handleClick} id="1" style={filter.current == "1" ? selectedStyle : notSelected}>Publicidad</button>
                    <button value="Travel Film" onClick={handleClick} id="2" style={filter.current == "2" ? selectedStyle : notSelected}>Travel Film</button>
                    <button value="Institucional" onClick={handleClick} id="3" style={filter.current == "3" ? selectedStyle : notSelected}>Institucional</button>
                    <button value="Animación" onClick={handleClick} id="4" style={filter.current == "4" ? selectedStyle : notSelected}>Animación</button>
                </div>
            
                <div className={styles.grid}>
                    { shown.map(item => {
                        return <ProjectCard item={item} shown={shown}/>
                    })}
                    <article className={shown.length > 1 ? styles.last : styles.lastDouble}>
                        <h2>Tu marca puede estar acá ;)</h2>
                        <p>Trabajemos juntos</p>
                    </article>
                </div>
            </section>
        </main>
    )
}