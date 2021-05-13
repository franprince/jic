import styles from "../styles/Slider.module.css"
import React, {useState} from 'react'
import Slider from 'react-touch-drag-slider'

const slides = [
    {
        "title": "Slide 1",
        "description": "This is slide 1",
        "id": 1
    },
    {
        "title": "Slide 2",
        "description": "This is slide 2",
        "id": 2
    },
    {
        "title": "Slide 3",
        "description": "This is slide 3",
        "id": 3
    },
    {
        "title": "Slide 4",
        "description": "This is slide 4",
        "id": 4
    }
]

export default function TextSlider () {

    const [index, setIndex] = useState(0)

    return(
        <div className={styles.slider}>

            <Slider activeIndex={parseInt(index)} onSlideComplete={(i) => {setIndex(i)}}>
                {slides.map((slide)=> {
                    return (
                    <div key={slide.id}><p>{slide.title}</p><p>{slide.description}</p></div>
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
    )
}