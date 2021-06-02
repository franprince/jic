import {useState, useEffect} from "react"
import { InView } from 'react-intersection-observer';
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'
import ReactPlayer from 'react-player'
import NavBar from "../../components/NavBar"
import ProjectHeader from "../../components/ProjectHeader"
import PlayArrow from "../../components/PlayArrow"
import Screenshots from "../../components/Screenshots"
import Footer from "../../components/Footer"
import styles from "../../styles/ProjectPage.module.css"
import Head from "next/head";
import MoreProjects from "../../components/MoreProjects";
import Description from "../../components/Description";
import Credits from "../../components/Credits";

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

  const [color, setColor] = useState("#000")
  const [moreProjects, setMoreProjects] = useState()

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
      <NavBar color={color} iNavRef={"1"} theme={"dark"}/>
      <ProjectHeader brand={thisProject[0].brand} title={thisProject[0].subtitle} category={thisProject[0].categories[0]}/>
      <InView threshold="0.6" onChange={(inView) => inView ? setColor("#FFF") : setColor("#000")}>
        <div className={styles.videoWrapper} style={{backgroundImage: `url(${thisProject[0].thumbnailURL})`}}>
          <ReactPlayer
                      playIcon={<PlayArrow arrowColor={thisProject[0].playbuttonColor}/>}
                      url={`${thisProject[0].videoURL}`}
                      light={`${thisProject[0].thumbnailURL}`}
                      height={"100%"} width={"100%"}
                      style={{position: "absolute", top: "0", left: "0"}}
                      config={{ vimeo: { playerOptions: { autoplay: true }} }} />
        </div>
      </InView>
        <Description text={thisProject[0].description} title="El proyecto"/>
      <InView threshold="0.3" onChange={(inView) => inView ? setColor("#FFF") : setColor("#000")}>
          <Screenshots screenshots={screenshots}/>
      </InView>
      <Description text={thisProject[0].process} title="El proceso"/>
      <InView threshold="0.3" onChange={(inView) => inView ? setColor("#FFF") : setColor("#000")}>
        <Credits text={thisProject[0].credits}/>
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