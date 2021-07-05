import Link from "next/link"
import styles from "../styles/DoubleCard.module.css"
import { useEffect, useState } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

export default function SingleCard ({item, index}) {

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

    return(
        <Link href={`/projects/${item.slug.current}`}>
            <article 
            data-aos={index == 0 ? "fade-down" : index % 2 == 0 ? "fade-left" : "fade-right"}
            className={styles.card}>
                <div className={styles.content}>
                    <section className={styles.info}>
                        <h2>{item.name}</h2>
                        <h3>{item.categories.join(", ")}</h3>
                    </section>
                </div>
                <div className={styles.img}>
                    <img src={item.imageUrl} alt={item.name} className={styles.imgBorder}/>
                </div>
            </article>
        </Link>
    )
}