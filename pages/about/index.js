import Head from "next/head";
import NavBar from "../../components/NavBar";
import {useState} from "react"
import AboutHeader from "../../components/AboutHeader";
import TextSlider from "../../components/TextSlider"
import PhGrid from "../../components/PhGrid"
import WorkTogether from "../../components/WorkTogether"
import Footer from "../../components/Footer"
import { InView } from 'react-intersection-observer';
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'
import Presentation from "../../components/Presentation";
import AboutVideo from "../../components/AboutVideo";

const gridQuery = groq`*[_type=='phGrid'] {_id, 'assets': pics[].asset->url}`

const aboutQuery = groq`*[_type=='about'] {
    _id,
    "headerURL": header.asset -> url,
    "personalImgURL": personalImg.asset -> url,
    text,
    videoID,
    text
    }`

export default function About ({pics, aboutApi}) {

    const [color, setColor] = useState("#FFF")

    return (
        <>
        <Head>
            <title>JIC | Sobre Mi</title>
        </Head>
        <NavBar color={color} iNavRef={"4"} theme={"light"}/>
        <AboutHeader title="SOBRE MI" img={aboutApi[0].headerURL}/>
        <Presentation img={aboutApi[0].personalImgURL} text={aboutApi[0].text}/>
        <AboutVideo videoID={aboutApi[0].videoID} title="Un film acerca de mí"/>
        <PhGrid pictures={pics[0].assets}/>
        <TextSlider />
        <InView threshold="0.5" onChange={(inView) => inView ? setColor("#000") : setColor("#FFF")}>
        <WorkTogether text="Trabajemos juntos!" link="/contact"/>
        </InView>
        <Footer/>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const pics = overlayDrafts(await getClient(preview).fetch(gridQuery))
    const aboutApi = overlayDrafts(await getClient(preview).fetch(aboutQuery))
    return {
      props: { pics, aboutApi },
      revalidate: 1
    }
  }