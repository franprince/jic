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
        closed: { opacity: 0, x: "10%"},
    }

    const circleVariants = {
        open: { opacity: 1, x: 0 },
        closed: {opacity: 0, x: "300%"}
    }


    return (
        <>
    <div className={styles.wrapper}>
        <motion.div className={styles.hamb} animate={scroll < 200 ? {opacity: 0, display: "none"} : {opacity: 1}} transition={{duration: 0.5}} >
        <Hamburger toggled={open} toggle={handleClick} size={18} className={styles.hamb}/>
        </motion.div>
        <motion.nav className={styles.nav} onClick={handleClick} animate={open ? "open" : "closed"} variants={variants} transition={{ type: "spring", duration: 1, velocity: 2 }}>
        <motion.div className={styles.prueba} animate={open && scroll > 200 ? "open" : "closed"} variants={circleVariants} transition={{ type: "spring", duration: 0.5, velocity: 2 }}>
        </motion.div>
            <ul>
                <li>PROYECTOS</li>
                <li>SERVICIOS</li>
                <li>YOUTUBE</li>
                <li>PODCAST</li>
                <li>SOBRE MI</li>
                <li>CONTACTO</li>
            </ul>
        </motion.nav>
    </div>
    </>
    );
}
