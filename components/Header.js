import styles from "../styles/Header.module.css"
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from "react"

export default function Header ({title, subtitle, img, home, mobileImg, changeOnMobile}) {

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
        <header className={home ?  styles.homeWrapper : styles.wrapper } id="header">
            <div className={styles.header}>
            <Image
                src={!changeOnMobile ? img : size.width < 700 ? mobileImg : img}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition={!changeOnMobile ?  "center" : size.width < 700 ? "bottom" : "center"}
                quality={100}
                />
                <section className={styles.elements}>
                    <h1>{title}</h1>
                {subtitle && 
                    <h2><i className={styles.i}>{subtitle}</i></h2>
                }
                {title == "JUAN IGNACIO CALI" && 
                    <Link href="/projects"><a>Mis proyectos</a></Link>
                }
                
                </section>
                
            </div>
        </header>
    )
}