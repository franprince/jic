import Head from 'next/head'
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import WorkTogether from "../components/WorkTogether"
import Separator from "../components/Separator"
import Footer from "../components/Footer"
import ProjectsContainer from "../components/Projects"
import miscPictures from "../miscPictures.json"

import {useState, useEffect} from "react"

import { InView } from 'react-intersection-observer';

export default function Projects() {

    const [color, setColor] = useState("#FFF")
    const [scroll, setScroll] = useState(0); // Defino el estado de scroll de la página

    const headerImg = miscPictures[3].img
    const separator1 = miscPictures[1].img
    const separator1mobile = miscPictures[1].mobileImg

    const size = useWindowSize();


        useEffect(() => {
            const scroll = () => {
            setScroll(window.scrollY);
            };
            window.addEventListener("scroll", scroll, false);
            return () => window.removeEventListener("scroll", scroll, false);
        }, []);

        function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
        function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
            }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
        }
        }, []);
        return windowSize;
        }

        return(
        <>
        <Head>
            <title>JIC | Proyectos</title>
        </Head>
        <NavBar color={color} scroll={scroll} iNavRef={"1"}/>
        <Header img={headerImg} title="PROYECTOS"/>
        <ProjectsContainer/>
        <Separator img={separator1} mobileImg={separator1mobile} size={size}/>
        <WorkTogether/>
        <Footer/>
        </>
    )

}