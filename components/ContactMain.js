import styles from "../styles/ContactMain.module.css"
import Form from "./Form"
import {useRef, useState, useEffect} from "react"

export default function ContactMain () {

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

    const [sent, setSent] = useState(false)

    return (
        <main className={styles.main}>
            <section style={sent && size && size.width < 700 ? {height: "100vh", overflow: "hidden", position: "fixed", top: "0", zIndex: "3"} : null}>
                <article className={styles.area1}>
                    <h2>Conversemos!</h2>
                    <p className={styles.border}>Dejame saber quien sos y<br />cómo puedo ayudarte.</p>
                    <p>Si no querés llenar el<br />formulario, podes enviarme<br />un mail o llamarme. </p>
                </article>
                <article className={styles.area2}>
                    <h3>Mis datos</h3>
                    <p>juan.ignacio.cali@gmail.com</p>
                    <p>+54 221 356-3090</p>
                    <h3>Seguime</h3>
                    <article className={styles.links}>
                        <a href="https://www.instagram.com/juanignaciocali/">
                            <img src="/img/instagram.svg" alt="Ir a Instagram" className={styles.icon}/>
                        </a>
                        <a href="mailto:juanignaciocali@gmail.com">
                            <img src="/img/gmail.svg" alt="Contactame por email" className={styles.icon}/>
                        </a>
                </article>
                </article>
                <article className={styles.area3}>
                    <h2>Llená<br />el formulario</h2>
                    <p className={styles.border}>Dejame tus datos, así<br />podemos estar en contacto.</p>
                </article>
                <article className={styles.area4}>
                    <Form sent={sent} setSent={setSent}/>
                </article>
                <article className={styles.area5}>
                    <h2>Cuál es<br />tu idea?</h2>
                    <p className={styles.border}>Hablemos sobre<br />tu proyecto.</p>
                </article>
            </section>
        </main>
    )
}