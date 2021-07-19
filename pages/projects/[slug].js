import {useState, useEffect} from "react"
import { InView } from 'react-intersection-observer';
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'
import ReactPlayer from 'react-player'
import NavBar from "../../components/NavBar"
import ProjectHeader from "../../components/ProjectHeader"
import Screenshots from "../../components/Screenshots"
import Footer from "../../components/Footer"
import styles from "../../styles/ProjectPage.module.css"
import Head from "next/head";
import MoreProjects from "../../components/MoreProjects";
import Description from "../../components/Description";
import AboutVideo from "../../components/AboutVideo";


const projectQuery = groq`*[ _type == 'project' ]{
  _id,
  name,
  brand,
  subtitle,
  categories,
  featured,
  process,
  "processPics":processPics[].asset -> url,
  description,
  credits,
  slug,
  videoURL,
  "imageUrl": img.asset->url,
  "screenshots": screenshots[].asset->url,
  "backstagePics" : backstagePics[].asset->url,
  backstageVid,
  backstage,
  _createdAt
} | order(_createdAt asc)`


export default function Details ({pageSlug, projects}) {

  const thisProject = projects.filter(project => project.slug.current == pageSlug) // Evita que el proyecto actual sea sugerido en la parte de abajo
  const clearProjects = projects.filter(project => project.name != thisProject[0].name)
  const screenshots = thisProject[0].screenshots

  const [color, setColor] = useState("#000")
  const [moreProjects, setMoreProjects] = useState()

  const size = useWindowSize();

  console.log(thisProject[0])
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
  
  useEffect(() => getRandom(clearProjects, 2), [pageSlug])
    return (<>
    <Head>
      <title>{thisProject[0].name}</title>
    </Head>
    <main className={styles.main}>
      <NavBar color={color} iNavRef={"1"} theme={"dark"}/>
      <InView onChange={(inView) => inView && setColor("#000")}>
        <ProjectHeader brand={thisProject[0].brand} title={thisProject[0].subtitle} categories={thisProject[0].categories}/>
      </InView>
      {
        thisProject[0].videoURL != null &&
        <div className={styles.videoWrapper}>
          <ReactPlayer
                      url={`${thisProject[0].videoURL}`}
                      height={"100%"} 
                      width={"100%"}
                      muted={true}
                      style={{position: "absolute", top: "0", left: "0"}}
                      config={{
                        vimeo: {
                          playerOptions: {autoplay: true}
                        }
                      }}
                      />
        </div>
      }
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#000")}>
        {thisProject[0].description != null && 
        <Description text={thisProject[0].description} title="El proyecto"/>
            }
      </InView>
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#FFF")}>
        {thisProject[0].screenshots != null &&
          <Screenshots pictures={screenshots}/>
          }
      </InView>
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#000")}>
        {thisProject[0].process != null &&
          <Description text={thisProject[0].process} title="El proceso"/>
        }
      </InView>
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#FFF")}>
        {thisProject[0].processPics != null  && 
          <Screenshots pictures={thisProject[0].processPics} last={thisProject[0].backstage == null ? true : false}/>}
      </InView>
      {
        thisProject[0].backstage != null && 
        <>
        <InView threshold="0.3" onChange={(inView) => inView && setColor("#000")}>
          <Description text={thisProject[0].backstage} title="El backstage"/>
        </InView>
        {thisProject[0].backstageVid != null  && 
          <AboutVideo videoID={thisProject[0].backstageVid}/>
        }
        {thisProject[0].backstagePics != null  && 
          <InView threshold="0.3" onChange={(inView) => inView && setColor("#FFF")}>
            <Screenshots pictures={thisProject[0].backstagePics} last={true}/>
          </InView>
        }
        </>
      }
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#FFF")}>
        {
          thisProject[0].credits &&
          <Description text={thisProject[0].credits} title="Créditos" credits={true}/>
        }
      </InView>
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#000")}>
      <MoreProjects moreProjects={moreProjects} size={size}/>
      </InView>
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