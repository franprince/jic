import Head from "next/head";
import NavBar from "../../components/NavBar";
import {useState, useEffect} from "react"
import json from "../../aboutTest.json"
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

export default function About ({pics}) {


    const [color, setColor] = useState("#FFF")

    return (
        <>
        <Head>
            <title>JIC | Sobre Mi</title>
        </Head>
        <NavBar color={color} iNavRef={"5"} theme={"light"}/>
        <AboutHeader title="BUT FIRST, QUIÉN SOY?" img={json[0].headerImg}/>
        <Presentation img={json[0].personalImgURL}/>
        <AboutVideo video={json[0].url}/>
        <PhGrid pictures={pics[0].assets} width="73%"/>
        <TextSlider />
        <InView threshold="0.5" onChange={(inView) => inView ? setColor("#000") : setColor("#FFF")}>
        <WorkTogether text="Trabajemos juntos!" link="/"/>
        </InView>
        <Footer/>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const pics = overlayDrafts(await getClient(preview).fetch(gridQuery))
    return {
      props: { pics },
      revalidate: 1
    }
  }