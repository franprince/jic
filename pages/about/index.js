import Head from "next/head";
import NavBar from "../../components/NavBar";
import {useState, useEffect} from "react"
import json from "../../aboutTest.json"
import AboutHeader from "../../components/AboutHeader";
import Image from "next/image"
import styles from "../../styles/About.module.css"

export default function About () {

    const [color, setColor] = useState("#FFF")
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
        <>
        <Head>
            <title>JIC | Sobre Mi</title>
        </Head>
        <NavBar size={size} color={color} iNavRef={"5"} theme={"light"}/>
        <AboutHeader title="BUT FIRST, QUIÉN SOY?" img={json[0].headerImg}/>
        <main className={styles.main}>
            <section>
                    <article>
                    <div className={styles.square}></div>
                    <Image
                    src={json[0].personalImgURL}
                    alt="Juan Ignacio Cali"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    quality={100}
                    />
                    </article>
                    <article>
                        <h3>
                            JUAN IGNACIO CALI
                        </h3>
                        <p>
                        Hola! 👋🏼  Soy Juan Ignacio.<br/>
                        Tengo 27 años y vivo en La Plata,<br/>
                        Argentina.<br/>
                        Soy Licenciado en Diseño Multimedia y actualmente trabajo como Director Creativo, Filmmaker & Motion Designer.
                        Si querés saber más sobre mi, mirá el video que está mas abajo!
                        </p>
                        <div className={styles.circles}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </article>
            </section>
        </main>
        </>
    )
}