import { useEffect, useState, useRef } from "react";
import styles from "../styles/NavBar.module.css"
import {Spin as Hamburger} from 'hamburger-react'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Navbar({color, iNavRef, theme}) {

    const [initialNavBar, setInitialNavbar] = useState(true)
    const [open, setOpen] = useState(true)

    const handleClick = () => { // Abre y cierra la barra de navegación haciéndole click
        setOpen(!open)
    }

    const navRef = useRef(iNavRef)

    const handleRef = (e) => {
        navRef.current = e.target.id
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

    const bgVariants = {
        open: { opacity: 1, x: 0 },
        closed: {opacity: 0, x: "300%"}
    }
    
    console.log(color)

    return (
    <nav className={styles.wrapper}>
        <main>
            <Link href="/">
                <a><h2 style={{color: color}}>JIC</h2></a>
            </Link>
        <motion.nav className={styles.nav} animate={open ? "open" : "closed"} variants={variants} transition={{ type: "spring", duration: 1, velocity: 2 }}>
        <motion.div className={styles.bg} animate={initialNavBar ? "closed" : open ? "open" : "closed"} variants={bgVariants} transition={{ type: "ease", duration: 0.1}}>
        </motion.div>
            <ul className={theme == "light" ? styles.light : initialNavBar ? styles.dark : styles.light}>
                <Link href="/projects">
                    <a onClick={handleRef}>
                        <li id="1" className={initialNavBar ? styles.liFirst : styles.liScrolledFirst}
                        style={navRef.current == "1" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "400"}}>PROYECTOS</li>
                        </a>
                </Link>
                <Link href="/#services">
                    <a onClick={() => {navRef.current == "2"}}><li id="2" className={initialNavBar ? styles.li : styles.liScrolled}
                    style={navRef.current == "2" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "400"}}>SERVICIOS</li></a>
                </Link>
                <Link href="/youtube">
                    <a href="/youtube"><li id="3" className={initialNavBar ? styles.li : styles.liScrolled}
                    style={navRef.current == "3" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "400"}}>YOUTUBE</li></a>
                </Link>
                <Link href="/podcast">
                    <a><li id="4" className={initialNavBar ? styles.li : styles.liScrolled}
                    style={navRef.current == "4" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "400"}}>PODCAST</li></a>
                </Link>
                <Link href="/about">
                    <a><li id="5" className={initialNavBar ? styles.li : styles.liScrolled}
                    style={navRef.current == "5" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "400"}}>SOBRE MI</li></a>
                </Link>
                <Link href="/contact">
                    <a><li id="6" className={initialNavBar? styles.liLast : styles.liScrolled}
                    style={navRef.current == "6" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "400"}}>CONTACTO</li></a>
                </Link>
            </ul>
        </motion.nav>
        <motion.div className={styles.hamb} animate={initialNavBar ? {opacity: 0, display: "none"} : {opacity: 1}} transition={{duration: 0.5}} >
        <Hamburger toggled={open} toggle={handleClick} size={18} className={styles.hamb}/>
        </motion.div>
        </main>
    </nav>
    );
}
