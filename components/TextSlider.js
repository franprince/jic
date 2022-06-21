import styles from "../styles/Slider.module.css"
import React, {useState, useEffect} from 'react'
import Slider from 'react-touch-drag-slider'

export default function TextSlider ( {slidesA} ) {

    const slides = slidesA.sort(function(a, b) {
        return a.order - b.order
    })



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
                    <article key={slide._id} className={styles.article}>
                        <h3>{slide.title}</h3>
                        {size && size.width > 700 ? <p>{slide.phrase}</p> : <p>{slide.phraseMobile}</p>}
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
