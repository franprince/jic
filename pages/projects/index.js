import Head from 'next/head'
import Header from "../../components/Header"
import NavBar from "../../components/NavBar"
import WorkTogether from "../../components/WorkTogether"
import Separator from "../../components/Separator"
import Footer from "../../components/Footer"
import ProjectsContainer from "../../components/Projects"
import PhGrid from "../../components/PhGrid"
import miscPictures from "../../miscPictures.json"

import {useState, useEffect} from "react"

import { InView } from 'react-intersection-observer';

export default function Projects() {

    const [color, setColor] = useState("#FFF")

    const headerImg = miscPictures[3].img
    const separator1 = miscPictures[1].img
    const separator1mobile = miscPictures[1].mobileImg

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

        return(
        <>
        <Head>
            <title>JIC | Proyectos</title>
        </Head>
        <NavBar size={size} color={color} iNavRef={"1"} theme={"light"}/>
        <Header img={headerImg} title="PROYECTOS"/>
        <InView threshold="0.1" onChange={(InView) => InView ? setColor("#222") : setColor("#FFF")}>
        <ProjectsContainer/>
        </InView>
        <PhGrid/>
        <Separator img={separator1} mobileImg={separator1mobile} size={size}/>
        <InView threshold="0.5" onChange={(InView) => InView ? setColor("#222") : setColor("#FFF")}>
        <WorkTogether/>
        </InView>
        <Footer/>
        </>
    )

}