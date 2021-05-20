import NavBar from "../../components/NavBar";
import {useState, useEffect} from "react"
import Head from "next/head";
import json from "../../youtubeTest.json"
import Header from "../../components/Header";
import Separator from "../../components/Separator"
import { InView } from 'react-intersection-observer';
import Videos from "../../components/Videos";
import Footer from "../../components/Footer"
import ContactCard from "../../components/ContactCard"
import WorkTogether from "../../components/WorkTogether"

export default function Youtube () {

    const [color, setColor] = useState("#FFF")
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
    const videos = json[0].urls

    return (
        <div>
            <Head>
            <title>JIC | YouTube</title>
            </Head>
            <NavBar size={size} color={color} iNavRef={"3"} theme={"light"}/>
            <Header img={json[0].headerURL} title="YOUTUBE EN PROCESO"/>
            <Videos videos={videos}/>
            <Separator img={json[0].parallaxURL} mobileImg={json[0].parallaxURL} size={size} bgColor="#222"/>
            <ContactCard img={json[0].personalImgURL}/>
            <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
            <WorkTogether/>
            </InView>
            <Footer/>
        </div>
    )
}