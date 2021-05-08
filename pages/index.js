import Head from 'next/head'
import Header from "../components/Header"
import Featured from "../components/Featured"
import Separator from "../components/Separator"
import Services from "../components/Services"
import NavBar from "../components/NavBar"
import ContactCard from "../components/ContactCard"
import WorkTogether from "../components/WorkTogether"
import Footer from "../components/Footer"

import { InView } from 'react-intersection-observer';

import {useState, useEffect} from "react"

import miscPictures from "../miscPictures.json" /* Imágenes para header y separadores */

export default function Home() {

  const [color, setColor] = useState("#FFF")

  const headerImg = miscPictures[0].img
  const separator1 = miscPictures[1].img
  const separator1mobile = miscPictures[1].mobileImg
  const contactPic = miscPictures[2].img

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



  return (<>
      <Head>
        <title>JIC</title>
      </Head>
      <NavBar size={size} color={color}/>
      <Header img={headerImg} title="JUAN IGNACIO CALI" subtitle="Filmmaker | Director Creativo | Motion Designer"/>
      <Featured/>
      <Separator img={separator1} mobileImg={separator1mobile} size={size}/>
      <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
      <Services/>
      </InView>
      <InView threshold="0.5" onChange={(inView) => inView ? setColor("#FFF") : setColor("#222")}>
      <ContactCard img={contactPic}/>
      </InView>
      <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
      <WorkTogether/>
      </InView>
      <Footer/>
      </>
  )
}