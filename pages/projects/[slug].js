import {useState, useEffect} from "react"
import { InView } from 'react-intersection-observer';
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'
import ReactPlayer from 'react-player'
import Image from "next/image"
import NavBar from "../../components/NavBar"
import ProjectHeader from "../../components/ProjectHeader"
import PlayArrow from "../../components/PlayArrow"
import Screenshots from "../../components/Screenshots"
import Footer from "../../components/Footer"
import styles from "../../styles/ProjectPage.module.css"
import Head from "next/head";
import Link from "next/link"
import MoreProjects from "../../components/MoreProjects";

const projectQuery = groq`*[ _type == 'project' ]{
  _id,
  name,
  brand,
  subtitle,
  categories,
  featured,
  process,
  description,
  credits,
  playbuttonColor,
  slug,
  videoURL,
  "imageUrl": img.asset->url,
  "thumbnailURL": thumbnail.asset->url,
  "screenshots": screenshots[].asset->url,
  _createdAt
} | order(_createdAt asc)`

export default function Details ({pageSlug, projects}) {

  const thisProject = projects.filter(project => project.slug.current == pageSlug) // Evita que el proyecto actual sea sugerido en la parte de abajo
  const clearProjects = projects.filter(project => project.name != thisProject[0].name)
  const screenshots = thisProject[0].screenshots

  const [color, setColor] = useState("#222")
  const [moreProjects, setMoreProjects] = useState()
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

    function getRandom(arr, n) { // Función para conseguir dos proyectos al azar que se mostrarán al final de la página
      var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
      }
      setMoreProjects(result);
  }
  
  useEffect(() => getRandom(clearProjects, 2), [])


    return (<>
    <Head>
      <title>{thisProject[0].name}</title>
    </Head>
      <main className={styles.main}>
        <NavBar size={size} color={color} iNavRef={"1"} theme={"dark"}/>
        <ProjectHeader brand={thisProject[0].brand} title={thisProject[0].subtitle} category={thisProject[0].categories[0]}/>
        <InView threshold="0.4" onChange={(inView) => inView ? setColor("#FFF") : setColor("#222")}>
        <div className={styles.videoWrapper}>
        <ReactPlayer
                    playIcon={<PlayArrow arrowColor={thisProject[0].playbuttonColor}/>}
                    url={`${thisProject[0].videoURL}`}
                    light={`${thisProject[0].thumbnailURL}`}
                    height={"80%"} width={"100%"}
                    style={{position: "absolute", top: "0", left: "0"}}
                    config={{ vimeo: { playerOptions: { autoplay: true }} }} />
        </div>
        </InView>
        <section className={styles.description}>
          <article>
            <h2>El proyecto</h2>
            <p>
            {thisProject[0].description}
            </p>
          </article>
          <InView threshold="0.3" onChange={(inView) => inView ? setColor("#FFF") : setColor("#222")}>
          <Screenshots screenshots={screenshots}/>
          </InView>
          <article className={styles.process}>
            <h2>El proceso</h2>
            <p>
            {thisProject[0].process}
            </p>
          </article>
        </section>
        <InView threshold="0.3" onChange={(inView) => inView ? setColor("#FFF") : setColor("#222")}>
        <section className={styles.credits}>
          <article className={styles.image}>
          <Image
                src="/img/separador.png"
                alt="Imagen de separador"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                />
          </article>
          <article className={styles.creditsInfo}>
            <article>
            <h2>Créditos</h2>
            <p>
            {thisProject[0].credits}
            </p>
            </article>
          </article>
        </section>
        </InView>
        <MoreProjects moreProjects={moreProjects}/>
        <Footer/>
        </main>
        </>)
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug
    const projects = overlayDrafts(await getClient().fetch(projectQuery))
      if (!pageSlug) {
        return {
            notFound: true
        } 
      }
      return {
        props: {pageSlug, projects}
        }
}