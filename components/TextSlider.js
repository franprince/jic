import styles from "../styles/Slider.module.css"
import React, {useState, useRef, useEffect} from 'react'
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

    const activeIndex = null
    const [index, setIndex] = useState(0)
    const currentIndex = useRef(activeIndex || 0)

    const changeIndex = (e) => {
        if (e.target.value != undefined) {
            currentIndex.current = e.target.value
            console.log(currentIndex.current)
            setIndex(e.target.value)
        }
    }

    return(
        <div className={styles.slider}>

            <Slider activeIndex={parseInt(index)} onSlideComplete={(i) => {setIndex(i)}}>

                {slides.map((slide)=>
                {
                    return (
                    <div key={slide.id}><p>{slide.title}</p><p>{slide.description}</p></div>
                )}
                )}
            </Slider>
            <div className={styles.dots}>

                {slides.map((slide) => {
                    return (
                        <label className={styles.container}>
            <input type="radio" id={slides.indexOf(slide)} name="dot" value={slides.indexOf(slide)} onChange={changeIndex} checked={index === slides.indexOf(slide) ? "checked" : "" }/>
            <span className={styles.checkmark}></span>
            </label>
                    )
                })}
            {/* <label className={styles.container}>
            <input type="radio" id="0" name="dot" value="0" checked={index === 0 ? "checked" : "" } onChange={changeIndex}/>
            <span className={styles.checkmark}></span>
            </label>

            <label className={styles.container}>
            <input type="radio" id="1" name="dot" value="1" checked={index === 1 ? "checked" : ""} onChange={changeIndex}/>
            <span className={styles.checkmark}></span>
            </label>

            <label className={styles.container}>
            <input type="radio" id="2" name="dot" value="2" checked={index === 2 ? "checked" : ""} onChange={changeIndex}/>
            <span className={styles.checkmark}></span>
            </label>

            <label className={styles.container}>
            <input type="radio" id="3" name="dot" value="3" checked={index === 3 ? "checked" : ""} onChange={changeIndex}/>
            <span className={styles.checkmark}></span>
            </label> */}
            </div>

        </div>
    )
}