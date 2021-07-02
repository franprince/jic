import styles from "../styles/ProjectCard.module.css"
import Link from "next/link"
import {useState, useEffect} from "react"
import { motion } from "framer-motion"
import AOS from "aos"
import 'aos/dist/aos.css';
export default function ProjectCard ({item, shown}) {

    useEffect(() => AOS.init(), [])

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

    const length = shown.length - 1

    return (
        <Link href={`/projects/${item.slug.current}`}>
            <article data-aos={shown.indexOf(item) == 0 ? "fade-up" : (shown.indexOf(item) -1) % 3 != 0 ? "fade-left" : "fade-right"} className={size.width < 700 ? styles.single : 
                            shown.indexOf(item) == 0 ? styles.double :
                            shown.indexOf(item) % 3 != 0 ? styles.single :
                            shown.indexOf(item) == length ? styles.single : styles.double}>
            <div className={styles.content}>
                <section className={styles.info}>
                    <h2>{item.name}</h2>
                    <h3>{item.categories.join(", ")}</h3>
                    {size.width < 700 ? null 
                    : shown.indexOf(item) == 0 ? 
                    <p>Ver el proyecto <img src="/arrow.png" alt="Ver el proyecto" className={styles.arrow}/></p>
                    : shown.indexOf(item) % 3 != 0 ? null
                    : shown.indexOf(item) == length ? null : <p>Ver el proyecto <img src="/arrow.png" alt="Ver el proyecto" className={styles.arrow}/></p>
                    }
                </section>
            </div>
            <div className={styles.img}>
                <img src={item.imageUrl} alt={item.name} className={styles.imgBorder}/>
            </div>
        </article>
        </Link>
    )
}