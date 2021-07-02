import {useState, useEffect} from "react"
import { InView } from 'react-intersection-observer';
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'
import ReactPlayer from 'react-player'
import NavBar from "../../components/NavBar"
import Banner from "../../components/Banner"
import ProjectHeader from "../../components/ProjectHeader"
import PlayArrow from "../../components/PlayArrow"
import Screenshots from "../../components/Screenshots"
import Footer from "../../components/Footer"
import styles from "../../styles/ProjectPage.module.css"
import Head from "next/head";
import Image from "next/image"
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
  "processPics":processPics[0].asset -> url,
  description,
  credits,
  playbuttonColor,
  slug,
  videoURL,
  "imageUrl": img.asset->url,
  "thumbnailURL": thumbnail.asset->url,
  "screenshots": screenshots[].asset->url,
  "backstagePics" : backstagePics[].asset->url,
  backstageVid,
  backstage,
  _createdAt
} | order(_createdAt asc)`

const bannerQuery = groq`*[_type=='banner'] {
  _id,
  "headerURL": header.asset -> url
  }`


export default function Details ({pageSlug, projects, banner}) {

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
  console.log(thisProject[0].backstageVid)
    return (<>
    <Head>
      <title>{thisProject[0].name}</title>
    </Head>
    <main className={styles.main}>
      <NavBar color={color} iNavRef={"1"} theme={"dark"}/>
      <InView onChange={(inView) => inView && setColor("#000")}>
      <ProjectHeader brand={thisProject[0].brand} title={thisProject[0].subtitle} category={thisProject[0].categories[0]}/>
      </InView>
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

      <Description text={thisProject[0].description} title="El proyecto"/>
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#FFF")}>
      <Screenshots pictures={screenshots}/>
      </InView>
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#000")}>
      <Description text={thisProject[0].process} title="El proceso"/>
      </InView>
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#FFF")}>
      {thisProject[0].processPics != null  && <Screenshots pictures={thisProject[0].processPics}/>}
      </InView>
      {
        thisProject[0].backstage && 
        <>
        <Description text={thisProject[0].backstage} title="El backstage"/>
      {thisProject[0].backstagePics != null  && <Screenshots pictures={thisProject[0].backstagePics}/>}
      {thisProject[0].backstageVid != null  && <AboutVideo videoID={thisProject[0].backstageVid}/>}</>
      }
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#FFF")}>
      <Description text={thisProject[0].credits} title="Créditos" credits={true}/>
      </InView>
      <InView threshold="0.3" onChange={(inView) => inView && setColor("#000")}>
      <MoreProjects moreProjects={moreProjects}/>
      </InView>
      <Footer/>
      </main>
      </>)
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug
    const projects = overlayDrafts(await getClient().fetch(projectQuery))
    const banner = overlayDrafts(await getClient().fetch(bannerQuery))
      if (!pageSlug) {
        return {
            notFound: true
        } 
      }
      return {
        props: {pageSlug, projects, banner}
        }
}