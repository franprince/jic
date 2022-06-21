import Head from 'next/head'
import Header from "../../components/Header"
import NavBar from "../../components/NavBar"
import WorkTogether from "../../components/WorkTogether"
import Footer from "../../components/Footer"
import ProjectsContainer from "../../components/Projects"
import PhGrid from "../../components/PhGrid"
import {useState, useEffect} from "react"
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'
import { InView } from 'react-intersection-observer';

// QUERIES PARA SANITY

const projectQuery = groq`*[ _type == 'project' ]{
    name,
    _id,
    hidden,
    categories,
    featured,
    slug,
    "imageUrl": img.asset->url,
    _createdAt
} | order(_createdAt desc)`

const projectPageQuery = groq`*[ _type == 'projectsPage' ]{
    _id,
    "headerURL": header.asset->url,
}`

const gridQuery = groq`*[_type=='phGrid'] {_id, 'assets': pics[].asset->url}`


export default function Projects({projectsApi, projectsPageApi, pics}) {

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

    const [color, setColor] = useState("#FFF")

        return(
        <>
        <Head>
            <title>JIC | Proyectos</title>
        </Head>
        <NavBar color={color} iNavRef={"1"} theme={"light"}/>
        <Header img={projectsPageApi[0].headerURL} home={false} title="PROYECTOS" size={size}/>
        <InView onChange={(InView) => InView && setColor("#FFF")}>
        <ProjectsContainer projects={projectsApi} size={size}/>
        </InView>
        <InView onChange={(InView) => InView && setColor("#FFF")}>
        <PhGrid pictures={pics[0].assets}/>
        </InView>
        <InView onChange={(InView) => InView && setColor("#000")}>
        <WorkTogether text="Trabajemos juntos!" link="/contact"/>
        </InView>
        <Footer/>
        </>
    )

}

export async function getStaticProps({ preview = false }) {
    const projectsApi = overlayDrafts(await getClient(preview).fetch(projectQuery))
    const projectsPageApi = overlayDrafts(await getClient(preview).fetch(projectPageQuery))
    const pics = overlayDrafts(await getClient(preview).fetch(gridQuery))
    return {
      props: { projectsApi, projectsPageApi, pics },
      revalidate: 1
    }
  }