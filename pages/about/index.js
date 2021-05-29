import Head from "next/head";
import NavBar from "../../components/NavBar";
import {useState, useEffect} from "react"
import json from "../../aboutTest.json"
import AboutHeader from "../../components/AboutHeader";
import Image from "next/image"
import styles from "../../styles/About.module.css"
import ReactPlayer from 'react-player'
import PlayArrow from "../../components/PlayArrow"
import TextSlider from "../../components/TextSlider"
import PhGrid from "../../components/PhGrid"
import WorkTogether from "../../components/WorkTogether"
import Footer from "../../components/Footer"
import { InView } from 'react-intersection-observer';
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'

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
        <main className={styles.main}>
            <section>
                    <article>
                    <div className={styles.square}></div>
                    <Image
                    src={json[0].personalImgURL}
                    alt="Juan Ignacio Cali"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    quality={100}
                    />
                    </article>
                    <article>
                        <h3>
                            JUAN IGNACIO CALI
                        </h3>
                        <p>
                        Hola! 👋🏼  Soy Juan Ignacio.<br/>
                        Tengo 27 años y vivo en La Plata,<br/>
                        Argentina.<br/>
                        Soy Licenciado en Diseño Multimedia y actualmente trabajo como Director Creativo, Filmmaker & Motion Designer.
                        Si querés saber más sobre mi, mirá el video que está mas abajo!
                        </p>
                        <div className={styles.circles}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </article>
            </section>
        </main>
        <section className={styles.film}>
            <h2>Un film acerca de mí</h2>
            <div className={styles.videoWrapper}>
                    <ReactPlayer
                        url={json[0].url}
                        playIcon={<PlayArrow arrowColor={"#FFF"}/>}
                        light={true}
                        height={"100%"}
                        width={"100%"}
                        quality={100}
                        controls={true}
                        style={{position: "absolute", top: "0", left: "0"}}
                        config={{
                            youtube: {
                                playerVars: { autoplay: 1 }
                                    }
                                }}
                    />
            </div>
        </section>
        <section className={styles.grid}>
            <PhGrid pictures={pics[0].assets}/>
        </section>
        <section className={styles.slider}>
            <h3>MI MANIFIESTO</h3>
            <TextSlider />
        </section>
        <InView threshold="0.5" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
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