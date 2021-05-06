import styles from "../styles/Separator.module.css"
import {Parallax} from "react-parallax"
import { useState, useEffect } from 'react';


export default function Separator ({img, mobileImg, size}) {


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
        <div className={styles.wrapper}>
            <Parallax bgImage={ bg } className={styles.separator} strength={strength}>
            </Parallax>
        </div>
        </>
    )
}