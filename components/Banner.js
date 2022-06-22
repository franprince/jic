import Image from "next/image"
import styles from "../styles/Banner.module.css"
import { useEffect, useState } from "react";

export default function Banner ({ img }) {

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

    return (
            <article className={styles.banner}>
            <Image
                src={img}
                alt="Imagen de separador"
                layout="fill"
                objectFit="cover"
                objectPosition={size.width > 700 ? "center" : "bottom"}
                quality={100}
                priority={true}
                />
            </article>
    )
}