import NavBar from "../../components/NavBar";
import PodcastHeader from "../../components/PodcastHeader";
import Head from "next/head";
import Footer from "../../components/Footer"
import ContactCard from "../../components/ContactCard"
import WorkTogether from "../../components/WorkTogether"
import json from "../../podcastTest.json"
import {useState, useEffect} from "react"


export default function Podcast () {

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


    return(
        <>
        <Head>
            <title>
                JIC | Podcast
            </title>
        </Head>
        <NavBar size={size} color={color} iNavRef={"4"} theme={"light"}/>
        <PodcastHeader img={json[0].headerURL}/>
        </>
    )
}