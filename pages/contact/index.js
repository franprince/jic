import Head from "next/head"
import {useState} from "react"
import NavBar from "../../components/NavBar"
import AboutHeader from "../../components/AboutHeader"
import ContactMain from "../../components/ContactMain"
import Footer from "../../components/Footer"
import { InView } from 'react-intersection-observer';
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'

const headerQuery = groq`*[_type=='about'] {
    _id,
    "headerURL": header.asset -> url,
    }`

export default function Contact ({header}) {


    const [color, setColor] = useState("#FFF")

    return (
        <>
        <Head>
            <title>JIC | Contact</title>
        </Head>
        <NavBar color={color} iNavRef={"6"} theme={"light"}/>
        <AboutHeader title="YA HABLAMOS DE MI, AHORA HABLEMOS DE VOS Y TU PROYECTO" mobileTitle="HABLEMOS DE TU PROYECTO" img={header[0].headerURL} contact={true}/>
        <InView threshold="0.5" onChange={(inView) => inView ? setColor("#000") : setColor("#FFF")}>
        <ContactMain/>
        </InView>
        <Footer />
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const header = overlayDrafts(await getClient(preview).fetch(headerQuery))
    return {
      props: { header },
      revalidate: 1
    }
  }