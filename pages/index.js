import Head from 'next/head'
import Header from "../components/Header"
import Featured from "../components/Featured"
import Separator from "../components/Separator"
import Services from "../components/Services"
import NavBar from "../components/NavBar"
import ContactCard from "../components/ContactCard"
import WorkTogether from "../components/WorkTogether"
import Footer from "../components/Footer"

import {useState, useEffect} from "react"

import miscPictures from "../miscPictures.json" /* Imágenes para header y separadores */

export default function Home() {

  const headerImg = miscPictures[0].img
  const separator1 = miscPictures[1].img
  const separator1mobile = miscPictures[1].mobileImg
  const contactPic = miscPictures[2].img

  const breakpointsMobile = [[2337, 2916], [3724, 4000]]
  const breakpointsSmall = [[2156, 2796], [3603, 4003]]
  const breakpointsBig = [[3085, 4404], [5838, 6000]]
  
  const size = useWindowSize();

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
      <NavBar breakpointsBig={breakpointsBig} breakpointsSmall={breakpointsSmall} breakpointsMobile={breakpointsMobile} size={size}/>
      <Header img={headerImg} title="JUAN IGNACIO CALI" subtitle="Filmmaker | Director Creativo | Motion Designer"/>
      <Featured/>
      <Separator img={separator1} mobileImg={separator1mobile} size={size}/>
      <Services/>
      <ContactCard img={contactPic}/>
      <WorkTogether/>
      <Footer/>
      </>
  )
}