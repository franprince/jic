import styles from "../styles/Featured.module.css"
import { useEffect, useState } from "react";
import Link from 'next/link'
import SingleCard from "../components/SingleCard"
import DoubleCard from "../components/DoubleCard"

export default function Featured ({projects}) {

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

    const raw = projects.filter(project => project.featured == true)
    const featured = raw.slice(0,3)
    
    return(
        <main className={styles.container} id="projects">
            <div className={styles.grid}>
                { featured.map((item, index) => {
                    return(
                        index !== 0 ? 
                        <SingleCard item={item} index={index}/> :
                        size.width > 700 ?
                        <DoubleCard item={item} index={index}/> :
                        <SingleCard item={item} index={index}/>
                    )
                })}
                </div>
            <Link href="/projects"><a>Ver más proyectos</a></Link>
        </main>
    )
}