import styles from "../styles/Separator.module.css"
import {Parallax} from "react-parallax"


export default function Separator ({img, mobileImg, size, bgColor}) {


    var strength = 0
    var bg

    if (size.width > 600) {
        strength = 500
        bg = img
    } else {
        strength = 400
        bg = mobileImg
    }

    return (
        <>
        <div className={styles.wrapper} style={{backgroundColor: bgColor}}>
            <Parallax bgImage={ bg } className={styles.separator} strength={strength}>
            </Parallax>
        </div>
        </>
    )
}