import styles from "../styles/ProjectsContainer.module.css"
import {useState, useRef, useEffect} from "react"
import SingleCard from "../components/SingleCard"
import DoubleCard from "../components/DoubleCard"

export default function ProjectsContainer ({projects}) {

    const [shown, setShown] = useState(projects)
    const filter = useRef("0")

    const size = useWindowSize();

    function useWindowSize() { // Hook para detectar el tamaño de pantalla.
            const [windowSize, setWindowSize] = useState({ // Inicializar el estado con altura y anchura undefined así cliente y servidor están coordinados
            width: undefined,
            height: undefined,
        });
    
        useEffect(() => {
            if (typeof window !== 'undefined') { // Este código se ejecuta únicamente del lado del cliente
            function handleResize() { // Función que se ejecuta al cambiar el tamaño de la pantalla
            setWindowSize({ // Cambiar el estado del tamaño de pantalla
            width: window.innerWidth,
            height: window.innerHeight,
            });
            }
            window.addEventListener("resize", handleResize); // Agregar event listener
            handleResize(); // Cuando cambia el tamaño de la pantalla, el handler se ejecuta automáticamente
            return () => window.removeEventListener("resize", handleResize); // Sacar el event listener
        }
        }, []);
        return windowSize;
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.value == "all") {
            setShown(projects)
        } else {
            const filtered = projects.filter(project => project.categories.includes(e.target.value))
            setShown(filtered)
        }
        filter.current = e.target.id
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
                    { shown.map((item, index) => {
                        return(
                            index == 0 &&  size.width > 800 && shown.length > 1 || index % 3 == 0 && size.width > 800 && index !== (shown.length -1) ? 
                            <DoubleCard item={item} index={index}/> :
                            <SingleCard item={item} index={index} size={size}/>
                        )
                    })}
                    <article className={styles.last}>
                        <article>
                            <h2>Tu marca puede<br/>estar acá ;)</h2>
                            <a href="/contact">Trabajemos juntos!</a>
                        </article>
                    </article>
                </div>
            </section>
        </main>
    )
}