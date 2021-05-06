import { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css"
import {Spin as Hamburger} from 'hamburger-react'
import { motion } from "framer-motion"

export default function Navbar({breakpoints}) {

    var combinedBreakpoints = []

    const range = (start, end) => {
        const length = end - start;
        return Array.from({ length }, (_, i) => start + i);
    }

    for (let i = 0; i < breakpoints.length; i++) {
        const br = range(breakpoints[i][0], breakpoints[i][1]);
        combinedBreakpoints = [...combinedBreakpoints, br]
    }

    var merged = [].concat.apply([], combinedBreakpoints)

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
        } else {
            setOpen(true)
        }
        console.log(merged.includes(scroll))
    }, [scroll])

    // Variantes para las animaciones con Framer Motion.

    const variants = {
        open: { opacity: 1, x: 0},
        closed: { opacity: 0, x: "10%"},
    }

    const circleVariants = {
        open: { opacity: 1, x: 0 },
        closed: {opacity: 0, x: "300%"}
    }
    

    // Estilos de los elementos de la barra de navegación, que cambian en función del scrolleo.

    const liFirst = {
        borderRight: "1px solid white",
        paddingRight: "0.5rem"
    }

    const li = {
        borderRight: "1px solid white",
        padding: "0 0.5rem 0 0.5rem"
    }

    const liLast = {
        border: "none",
        paddingLeft: "0.5rem"
    }

    const liScrolledFirst = {
        paddingRight: "1rem",
    }

    const liScrolled = {
        padding: "0 0.5rem 0 0.5rem"
    }

    return (
    <div className={styles.wrapper}>
        <main>
        <h2 style={merged.includes(scroll) ? {color: "#222222"} : {color: "white"}}>JIC</h2>
        <motion.nav className={styles.nav} animate={open ? "open" : "closed"} variants={variants} transition={{ type: "spring", duration: 1, velocity: 2 }}>
        <motion.div className={styles.prueba} animate={open && scroll > 200 ? "open" : "closed"} variants={circleVariants} transition={{ type: "ease", duration: 0.1}}>
        </motion.div>
            <ul style={{color: "white"}}>
                <li style={scroll < 200 ? liFirst : liScrolledFirst}>PROYECTOS</li>
                <li style={scroll < 200 ? li : liScrolled}>SERVICIOS</li>
                <li style={scroll < 200 ? li : liScrolled}>YOUTUBE</li>
                <li style={scroll < 200 ? li : liScrolled}>PODCAST</li>
                <li style={scroll < 200 ? li : liScrolled}>SOBRE MI</li>
                <li style={scroll < 200 ? liLast : liScrolled}>CONTACTO</li>
            </ul>
        </motion.nav>
        <motion.div className={styles.hamb} style={merged.includes(scroll) ? {color: "#222222"} : {color: "white"}} animate={scroll < 200 ? {opacity: 0, display: "none"} : {opacity: 1}} transition={{duration: 0.5}} >
        <Hamburger toggled={open} toggle={handleClick} size={18} className={styles.hamb}/>
        </motion.div>
        </main>
    </div>
    );
}
