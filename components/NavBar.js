import { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css"
import {Spin as Hamburger} from 'hamburger-react'
import { motion } from "framer-motion"

export default function Navbar() {

    const [open, setOpen] = useState(true)
    const [scroll, setScroll] = useState(0); // Defino el estado de scroll de la página

    // Hook para detectar el scroll de la página y cambiar la barra de navegación
    useEffect(() => {
        const scroll = () => {
        setScroll(window.scrollY); // Cada vez que la página scrollea, el estado se actualiza al valor de scroll
        };
        window.addEventListener("scroll", scroll, false);
        return () => window.removeEventListener("scroll", scroll, false);
    }, []);

    const handleClick = () => { // Abre y cierra la barra de navegación haciéndole click
        setOpen(!open)
    }
    useEffect(() => { // Chequea que el menú se comprima cuando el scroll pasa de 200px
        if (scroll > 200) {
            setOpen(false)
        } else (
            setOpen(true)
        )
    }, [scroll])

    const variants = {
        open: { opacity: 1, x: 0},
        closed: { opacity: 0, x: "60%"},
    }

    return (
    <div className={styles.wrapper}>
        <motion.div className={styles.hamb} animate={scroll < 200 ? {opacity: 0, x: "60%"} : {opacity: 1}} transition={{duration: 0.5}} >
        <Hamburger toggled={open} toggle={handleClick} size={14} className={styles.hamb}/>
        </motion.div>
        <motion.div className={styles.nav} onClick={handleClick} animate={open ? "open" : "closed"} variants={variants} transition={{ type: "spring", duration: 1, velocity: 2 }}>
            <span>NAVBAR</span>
        </motion.div>
    </div>
    );
}
