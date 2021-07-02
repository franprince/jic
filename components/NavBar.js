import { useEffect, useState, useRef } from "react";
import styles from "../styles/NavBar.module.css"
import {Spin as Hamburger} from 'hamburger-react'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Navbar({color, iNavRef, theme}) {

    const [initialNavBar, setInitialNavbar] = useState(true)
    const [open, setOpen] = useState(false)
    const [mobile, setMobile] = useState(true)
    const navRef = useRef(iNavRef)
    
    if (iNavRef == undefined) {
        navRef.current = "0"
    }

    const size = useWindowSize();

    function useWindowSize() { // Hook para detectar el tamaño de pantalla.
            const [windowSize, setWindowSize] = useState({ // Inicializar el estado con altura y anchura undefined así cliente y servidor están coordinados
            width: undefined,
            height: undefined,
        });
    
        useEffect(() => {
            if (typeof window !== 'undefined') { // Este código se ejecuta únicamente del lado del cliente
            function handleResize() { // Función que se ejecuta al cambiar el tamaño de la pantalla
            setWindowSize({ // Cambiar el estado del tamaño de pantalla
            width: window.innerWidth,
            height: window.innerHeight,
            });
            }
            window.addEventListener("resize", handleResize); // Agregar event listener
            handleResize(); // Cuando cambia el tamaño de la pantalla, el handler se ejecuta automáticamente
            return () => window.removeEventListener("resize", handleResize); // Sacar el event listener
        }
        }, []);
        return windowSize;
    }

    const handleScroll = () => {
        if (window.scrollY > 10 && size.width > 700) {
            setInitialNavbar(false)
            setOpen(false)
        } else if (window.scrollY == 0 && size.width > 700) {
            setOpen(true)
            setInitialNavbar(true)
        }
        else {
            setOpen(open)
            setInitialNavbar(false)
        } 
    }

    const handleSize = () => {
        if (size.width < 700) {
            setInitialNavbar(false)
            if (window.scrollY == 0) {
                setOpen(false)
            } else {setOpen(open)}
            } else {
            setInitialNavbar(true)
            setOpen(true)
        }
        if (size.width && size.width < 1000) {
            setOpen(false)
            setInitialNavbar(false)
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    const handleClick = () => { // Abre y cierra la barra de navegación haciéndole click
        setOpen(!open)
    }

    const handleRef = (e) => {
        navRef.current = e.target.id
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })
    useEffect(() => handleSize(), [size])

    // Variantes para las animaciones con Framer Motion.

    const variants = {
        open: { opacity: 1, x: 0, display: "flex"},
        closed: { opacity: 0, pointerEvents: "none", x: "300%", display: "none"},
    }

    const bgVariants = {
        open: { opacity: 1, x: 0 },
        closed: {opacity: 0, x: "300%", width: "0px"}
    }

    return (
    <nav className={styles.wrapper}>
        <main style={!open && !mobile ? {justifyContent: "space-between"} : null}>
            <Link href="/">
                <a><h2 style={!mobile ? {color: color, opacity: "1"} : open ? {color: "#FFF", opacity: "1"} : {opacity: "0"}}>JIC</h2></a>
            </Link>
            <div style={mobile ? {display: "none"} : {flex: "1"}}></div>
        <motion.nav className={styles.nav} animate={open ? "open" : "closed"} variants={variants} transition={{ type: "spring", duration: 0.6}}>
                    <motion.div className={styles.bg} animate={initialNavBar ? "closed" : open ? "open" : "closed"} variants={bgVariants} transition={{ type: "ease", duration: 0.2}}></motion.div>
            <ul className={theme == "light" ? styles.light : initialNavBar ? styles.dark : styles.light}>
                <Link href="/">
                    <a onClick={handleRef}>
                        <li id="0" className={initialNavBar ? styles.liFirst : styles.liScrolledFirst}
                        style={navRef.current == "0" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "300"}}>HOME</li>
                        </a>
                </Link>
                <Link href="/projects">
                    <a onClick={handleRef}>
                        <li id="1" className={initialNavBar ? styles.li : styles.liScrolled}
                        style={navRef.current == "1" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "300"}}>PROYECTOS</li>
                        </a>
                </Link>
                <Link href="/youtube">
                    <a href="/youtube"><li id="3" className={initialNavBar ? styles.li : styles.liScrolled}
                    style={navRef.current == "3" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "300"}}>YOUTUBE</li></a>
                </Link>
                <Link href="/podcast">
                    <a><li id="4" className={initialNavBar ? styles.li : styles.liScrolled}
                    style={navRef.current == "4" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "300"}}>PODCAST</li></a>
                </Link>
                <Link href="/about">
                    <a><li id="5" className={initialNavBar ? styles.liLast : styles.liLastScrolled}
                    style={navRef.current == "5" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "300"}}>SOBRE MI</li></a>
                </Link>
                <Link href="/contact">
                    <a><li id="6" className={initialNavBar? styles.contact : styles.contactScrolled}
                    style={navRef.current == "6" ? {fontWeight: "700", pointerEvents: "none"} : {fontWeight: "300"}}>CONTACTO</li></a>
                </Link>
                <li className={styles.links} style={mobile ? {display: "flex"} : {display: "none"}}>
                    <a href="https://www.instagram.com/juanignaciocali/" target="_blank">
                        <img src="/img/instagram.svg" alt="Ir a Instagram"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA" target="_blank">
                        <img src="/img/youtube.svg" alt="Ir a YouTube"/>
                    </a>
                    <a href="mailto:juanignaciocali@gmail.com" target="_blank">
                        <img src="/img/gmail.svg" alt="Contactame por email"/>
                    </a>
                    <a href="https://wa.me/542213563090" target="_blank">
                        <img src="/img/wsp.svg" alt="Contactame por WhatsApp"/>
                    </a>
                </li>
            </ul>
        </motion.nav>
        <motion.div className={styles.hamb} animate={initialNavBar ? {opacity: 0, display: "none"} : {opacity: 1}} transition={{duration: 0.5}} >
        <Hamburger toggled={open} toggle={handleClick} size={18} className={styles.hamb}/>
        </motion.div>
        </main>
    </nav>
    );
}
