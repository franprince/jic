import { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css"
import {Spin as Hamburger} from 'hamburger-react'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Navbar({color, scroll}) {

    const [initialNavBar, setInitialNavbar] = useState(true)
    const [open, setOpen] = useState(true)

    const handleClick = () => { // Abre y cierra la barra de navegación haciéndole click
        setOpen(!open)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })
    
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setInitialNavbar(false)
            setOpen(false)
        } else {
            setInitialNavbar(true)
            setOpen(true)
        }
    }
    

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
            <Link href="/#header">
                <a><h2 style={{"color": color}}>JIC</h2></a>
            </Link>
        <motion.nav className={styles.nav} animate={open ? "open" : "closed"} variants={variants} transition={{ type: "spring", duration: 1, velocity: 2 }}>
        <motion.div className={styles.prueba} animate={initialNavBar ? "closed" : open ? "open" : "closed"} variants={circleVariants} transition={{ type: "ease", duration: 0.1}}>
        </motion.div>
            <ul style={{color: "white"}}>
                <Link href="/projects">
                    <a><li style={initialNavBar ? liFirst : liScrolledFirst}>PROYECTOS</li></a>
                </Link>
                <Link href="#services">
                    <a><li style={initialNavBar ? li : liScrolled}>SERVICIOS</li></a>
                </Link>
                <Link href="/youtube">
                    <a><li style={initialNavBar ? li : liScrolled}>YOUTUBE</li></a>
                </Link>
                <Link href="/podcast">
                    <a><li style={initialNavBar ? li : liScrolled}>PODCAST</li></a>
                </Link>
                <Link href="/about">
                    <a><li style={initialNavBar ? li : liScrolled}>SOBRE MI</li></a>
                </Link>
                <Link href="/contact">
                    <a><li style={initialNavBar? liLast : liScrolled}>CONTACTO</li></a>
                </Link>
            </ul>
        </motion.nav>
        <motion.div className={styles.hamb} animate={initialNavBar ? {opacity: 0, display: "none"} : {opacity: 1}} transition={{duration: 0.5}} >
        <Hamburger toggled={open} toggle={handleClick} size={18} className={styles.hamb}/>
        </motion.div>
        </main>
    </div>
    );
}
