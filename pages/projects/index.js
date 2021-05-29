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
    categories,
    featured,
    slug,
    "imageUrl": img.asset->url,
    _createdAt
} | order(_createdAt asc)`

const projectPageQuery = groq`*[ _type == 'projectsPage' ]{
    _id,
    "headerURL": header.asset->url,
    "parallaxURL": parallax.asset->url,
    "parallaxMobileURL": parallaxMobile.asset->url
}`

const gridQuery = groq`*[_type=='phGrid'] {_id, 'assets': pics[].asset->url}`


export default function Projects({projectsApi, projectsPageApi, pics}) {

    const [color, setColor] = useState("#FFF")

        return(
        <>
        <Head>
            <title>JIC | Proyectos</title>
        </Head>
        <NavBar color={color} iNavRef={"1"} theme={"light"}/>
        <Header img={projectsPageApi[0].headerURL} title="PROYECTOS"/>
        <InView onChange={(InView) => InView && setColor("#222")}>
        <ProjectsContainer projects={projectsApi}/>
        </InView>
        <InView onChange={(InView) => InView && setColor("#FFF")}>
        <PhGrid pictures={pics[0].assets}/>
        </InView>
        <InView onChange={(InView) => InView && setColor("#222")}>
        <WorkTogether text="Trabajemos juntos!" link="/"/>
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