import { useEffect, useState } from "react"
import styles from "../styles/Screenshots.module.css"

export default function Screenshots ({pictures, last}) {

    const [finalPics, setFinalPics] = useState([])

    const checkLength = (pics) => {
        if (pics.length > 6) {
            setFinalPics(pics.slice(0,6))
        } else {
            setFinalPics(pics)
        }
    }

    useEffect(() => checkLength(pictures), [])
    
    return (
        <section className={pictures && finalPics.length > 1 ? styles.container : styles.single} style={last ? {paddingBottom: "3rem"} : null}>
            {pictures && finalPics.length > 1 ? finalPics.map((item, index) => {
                return (
                    <article key={item} className={finalPics.length == 3 && index == 2 ? styles.doubleOf3 :
                                                    finalPics.length == 5 && index == 4 ? styles.doubleOf5 : null}>
                        <img src={item} alt="Screenshot" />
                    </article>
                )
            }) :
            <article key={pictures} style={{gridColumn: "1/-1"}}>
                <img src={pictures} alt="Screenshot" />
            </article>}

        </section>
    )
}