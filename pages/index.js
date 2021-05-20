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
import { getClient, overlayDrafts } from '../lib/sanity.server'
import {groq} from 'next-sanity'

// QUERIES PARA SANITY

const projectQuery = groq`*[ _type == 'project' ]{
  name,
  _id,
  categories,
  featured,
  slug,
  "imageUrl": img.asset->url,
  _createdAt
} | order(_createdAt asc)`

const homeQuery = groq`*[ _type == 'home' ]{
  _id,
  "headerURL": header.asset->url,
  "parallaxURL": parallax.asset->url,
  "personalImgURL": personalImg.asset->url,
  "parallaxMobileURL": parallaxMobile.asset->url
}`

// HOME APP

export default function Home({projectsApi, homeApi}) {

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
    
  return (<>
      <Head>
        <title>JIC</title>
      </Head>
      <NavBar size={size} color={color} inNavRef={"0"} theme={"light"}/>
      <InView threshold="1" onChange={(inView) => inView ? setColor("#FFF") : setColor("#222")}>
      <Header img={homeApi[0].headerURL} title="JUAN IGNACIO CALI" subtitle="Filmmaker | Director Creativo | Motion Designer"/>
      </InView>
      <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
      <Featured projects={projectsApi}/>
      </InView>
      <Separator img={homeApi[0].parallaxURL} mobileImg={homeApi[0].parallaxMobileURL} size={size} bgColor={"white"}/>
      <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
      <Services/>
      </InView>
      <InView threshold="0.3" onChange={(inView) => inView ? setColor("#FFF") : setColor("#222")}>
      <ContactCard img={homeApi[0].personalImgURL}/>
      </InView>
      <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
      <WorkTogether/>
      </InView>
      <Footer/>
      </>
  )
}

export async function getStaticProps({ preview = false }) {
  const projectsApi = overlayDrafts(await getClient(preview).fetch(projectQuery))
  const homeApi = overlayDrafts(await getClient(preview).fetch(homeQuery))
  return {
    props: { projectsApi, homeApi },
    revalidate: 1
  }
}
