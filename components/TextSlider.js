import styles from "../styles/Slider.module.css"
import React, {useState} from 'react'
import Slider from 'react-touch-drag-slider'

const slides = [
    {
        "title": "#1\nLorem Ipsum",
        "description": "Algo en lo que estoy trabajando.\nLa frase ya se explica sola, just fu**ing do it.",
        "id": 1
    },
    {
        "title": "#2\nLorem Ipsum",
        "description": "Algo en lo que estoy trabajando.\nLa frase ya se explica sola, just fu**ing do it.",
        "id": 2
    },
    {
        "title": "#3\nLorem Ipsum",
        "description": "Algo en lo que estoy trabajando.\nLa frase ya se explica sola, just fu**ing do it.",
        "id": 3
    },
    {
        "title": "#4\nDONE is better than PERFECT.",
        "description": "Algo en lo que estoy trabajando.\nLa frase ya se explica sola, just fu**ing do it.",
        "id": 4
    },
    {
        "title": "#5\nLorem Ipsum",
        "description": "Algo en lo que estoy trabajando.\nLa frase ya se explica sola, just fu**ing do it.",
        "id": 5
    }
]

export default function TextSlider () {

    const [index, setIndex] = useState(0)

    return(
        <section className={styles.slider}>

            <Slider activeIndex={parseInt(index)} onSlideComplete={(i) => {setIndex(i)}}>
                {slides.map((slide)=> {
                    return (
                    <article key={slide.id} className={styles.article}><h3>{slide.title}</h3><p>{slide.description}</p></article>
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

        </section>
    )
}