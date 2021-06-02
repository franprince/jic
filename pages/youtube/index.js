import NavBar from "../../components/NavBar";
import {useState, useEffect} from "react"
import Head from "next/head";
import json from "../../youtubeTest.json"
import Header from "../../components/Header";
import Separator from "../../components/Separator"
import { InView } from 'react-intersection-observer';
import Videos from "../../components/Videos";
import Footer from "../../components/Footer"
import ContactCard from "../../components/ContactCard"
import WorkTogether from "../../components/WorkTogether"

export default function Youtube () {

    const [color, setColor] = useState("#FFF")

    const videos = json[0].ids

    return (
        <>
            <Head>
            <title>JIC | YouTube</title>
            </Head>
            <NavBar color={color} iNavRef={"3"} theme={"light"}/>
            <Header img={json[0].headerURL} title="YOUTUBE EN PROCESO"/>
            <Videos videos={videos}/>
            {/* <Separator img={json[0].parallaxURL} mobileImg={json[0].parallaxURL} size={size} bgColor="#000"/> */}
            <ContactCard img={json[0].personalImgURL}/>
            <InView threshold="0.5" onChange={(inView) => inView ? setColor("#000") : setColor("#FFF")}>
            <WorkTogether text="Trabajemos juntos!" link ="/"/>
            </InView>
            <Footer/>
        </>
    )
}