import styles from "../styles/Slider.module.css"
import React, {useState} from 'react'
import Slider from 'react-touch-drag-slider'
import { useWindowSize } from "../hooks/useWindowSize"

export default function TextSlider ( {slidesA} ) {

    const slides = slidesA.sort(function(a, b) {
        return a.order - b.order
    })

    const size = useWindowSize();

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
