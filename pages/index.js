import Head from 'next/head'
import Header from "../components/Header"
import Featured from "../components/Featured"
import Separator from "../components/Separator"
import Services from "../components/Services"
import NavBar from "../components/NavBar"
import ContactCard from "../components/ContactCard"
import WorkTogether from "../components/WorkTogether"
import Footer from "../components/Footer"

import { InView, useInView } from 'react-intersection-observer';

import {useState, useEffect} from "react"

import miscPictures from "../miscPictures.json" /* Imágenes para header y separadores */

export default function Home() {


  const [color, setColor] = useState("#FFF")
  const [scroll, setScroll] = useState(0); // Defino el estado de scroll de la página

  const headerImg = miscPictures[0].img
  const separator1 = miscPictures[1].img
  const separator1mobile = miscPictures[1].mobileImg
  const contactPic = miscPictures[2].img

  const size = useWindowSize();


  // Hook para detectar el scroll de la página y cambiar la barra de navegación
  useEffect(() => {
      const scroll = () => {
      setScroll(window.scrollY); // Cada vez que la página scrollea, el estado se actualiza al valor de scroll
      };
      window.addEventListener("scroll", scroll, false);
      return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  // Hook para detectar el tamaño de pantalla.
function useWindowSize() {
  // Inicializar el estado con altura y anchura undefined así cliente y servidor están coordinados
  const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
  });

useEffect(() => {
// Este código se ejecuta únicamente del lado del cliente
if (typeof window !== 'undefined') {
  // Función que se ejecuta al cambiar el tamaño de la pantalla
  function handleResize() {
    // Cambiar el estado del tamaño de pantalla
  setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
  });
  }
  // Agregar event listener
  window.addEventListener("resize", handleResize);
  // Cuando cambia el tamaño de la pantalla, el handler se ejecuta automáticamente
  handleResize();
  // Sacar el event listener
  return () => window.removeEventListener("resize", handleResize);
}
}, []);
return windowSize;
}



  return (<>
      <Head>
        <title>Next App</title>
      </Head>
      <NavBar size={size} color={color} scroll={scroll}/>
      <Header img={headerImg} title="JUAN IGNACIO CALI" subtitle="Filmmaker | Director Creativo | Motion Designer"/>
      <Featured/>
      <Separator img={separator1} mobileImg={separator1mobile} size={size}/>
      <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
      <Services/>
      </InView>
      <ContactCard img={contactPic}/>
      <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
      <WorkTogether/>
      </InView>
      <Footer/>
      </>
  )
}