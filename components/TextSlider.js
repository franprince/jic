import styles from "../styles/Slider.module.css"
import React, {useState, useEffect} from 'react'
import Slider from 'react-touch-drag-slider'

const slides = [
    {
        "title": "#1\nPROCESO\nante RESULTADO",
        "description": "El resultado importa, pero más importa el proceso.\nEs el camino donde realmente vamos a aprender y donde vamos a pasar la mayor parte de nuestro tiempo.\n\nSmall steps at a time.",
        "descriptionMobile": "El resultado importa, pero\nmás importa el proceso.\nEs el camino donde realmente vamos a aprender y donde vamos a pasar la mayor parte de nuestro tiempo.\n\nSmall steps at a time.",
        "id": 1,
        "large": true,
    },
    {
        "title": "#2\nFAIL FAST\nSUCCEED BETTER",
        "description": "Podemos fallar pero hay que intentar\nque sea rápido para poder mejorarlo y aprender de eso.",
        "descriptionMobile": "Podemos fallar pero hay que\nintentar que sea rápido para poder mejorarlo y aprender de eso.",
        "id": 2,
        "large": false,
    },
    {
        "title": "#3\nStory is the KING,\nbut concept\nis the KEY",
        "description": "No siempre tenemos que contar\nhistorias en todo lo que hacemos y creamos.\nMuchas veces el concepto es mas importante y transmite mejor aquello que queremos comunicar.",
        "descriptionMobile": "No siempre tenemos que\ncontar historias en todo lo que hacemos y creamos.\nMuchas veces el concepto es mas importante y transmite mejor aquello que queremos comunicar.",
        "id": 3,
        "large": false,
    },
    {
        "title": "#4\nDONE is better\nthan PERFECT",
        "description": "Algo en lo que estoy trabajando.\nLa frase ya se explica sola, just fu**ing do it.",
        "descriptionMobile": "Algo en lo que estoy trabajando.\nLa frase ya se explica sola,\njust fu**ing do it.",
        "id": 4,
        "large": false,
    },
    {
        "title": "#5\nDO IT\nwith PASSION",
        "description": "La clave de por qué estoy haciendo esto.\nCuando no encuentres el norte, volvé a este punto.",
        "descriptionMobile": "La clave de por qué\nestoyhaciendo esto.\nCuando no encuentres\nel norte, volvé a\neste punto.",
        "id": 5
    }
]

export default function TextSlider () {

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

    const [index, setIndex] = useState(0)

    return(
        <section className={styles.wrapper}>
        <h3>Mi Manifiesto</h3>
        <div className={styles.slider}>

            <Slider activeIndex={parseInt(index)} onSlideComplete={(i) => {setIndex(i)}}>
                {slides.map((slide)=> {
                    return (
                    <article key={slide.id} className={styles.article}>
                        <h3>{slide.title}</h3>
                        {size && size.width > 700 ? <p>{slide.description}</p> : <p>{slide.descriptionMobile}</p>}
                        </article>
                )}
                )}
            </Slider>

            <div className={styles.dots}>
                {slides.map((slide) => {
                    return (
                        <label className={styles.container} key={slides.indexOf(slide)}>
                            <input type="radio" id={slides.indexOf(slide)} name="dot" value={slides.indexOf(slide)} onChange={() => {setIndex(slides.indexOf(slide))}} checked={index == slides.indexOf(slide) ? "checked" : ""}/>
                            <span className={styles.checkmark}></span>
                        </label>
                    )
                })}
            </div>
            </div>
        </section>
    )
}