import NavBar from "../../components/NavBar";
import PodcastHeader from "../../components/PodcastHeader";
import Head from "next/head";
import Image from "next/image"
import Footer from "../../components/Footer"
import WorkTogether from "../../components/WorkTogether"
import { InView } from 'react-intersection-observer';
import {useState} from "react"
import styles from "../../styles/Podcast.module.css"
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import {groq} from 'next-sanity'

const podcastQuery = groq`*[_type=='podcast'] {
    _id,
    "headerURL": header.asset -> url,
    "assets": pics[].asset -> url,
    "podcastImgURL": podcastImg.asset -> url
    }`


export default function Podcast ({podcastApi}) {

    const [color, setColor] = useState("#FFF")

    return(
        <>
        <Head>
            <title>
                JIC | Podcast
            </title>
        </Head>
        <NavBar color={color} iNavRef={"4"} theme={"light"}/>
        <PodcastHeader img={podcastApi[0].headerURL}/>
        <InView threshold="0.3" onChange={(inView) => inView ? setColor("#000") : setColor("#FFF")}>
        <main className={styles.main}>
            <section>
                <article>
                Un <b>podcast</b> donde hablamos con <b>artistas</b>, <b>filmmakers</b> y <b>emprendedores</b> acerca de experiencias y procesos de trabajo.
                </article>
                <article className={styles.img}>
                    <Image
                src={podcastApi[0].podcastImgURL}
                alt="The Cali Show Podcast"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                quality={100}
                />
                </article>
                <article className={styles.disponible}>
                    <p>Disponible en</p>
                    <div className={styles.links}>
                    <a href="https://www.youtube.com/juanignaciocali"><img src="/img/yt.png" alt="Youtube" /></a>
                    <a href="https://open.spotify.com/show/6VHzEF8VKmRstoAdgwXFX9"><img src="/img/spoty.png" alt="Spotify" /></a>
                    <a href="https://podcasts.apple.com/ar/podcast/the-cali-show/id1562735300"><img src="/img/podcast.png" alt="Apple Podcasts" /></a>
                    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81NWZhNzdiMC9wb2RjYXN0L3Jzcw=="><img src="/img/gpodcast.png" alt="Google Podcasts" /></a>
                    </div>
                </article>
            </section>
            <section className={styles.circleWrapper}>
                <div className={styles.circle}></div>
            </section>
                
            
        </main>
        </InView>
        <section className={styles.pictures}>
            {podcastApi[0].assets.map(picture=>{
                return (
                    <article key={podcastApi[0].assets.indexOf(picture)} className={podcastApi[0].assets.indexOf(picture) == 2 ? styles.last : styles.notLast}>
                <Image
                src={picture}
                alt="The Cali Show Podcast"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                quality={100}
                priority={true}
                />
            </article>
                )
            })}
        </section>
        <InView threshold="0.8" onChange={(inView) => inView ? setColor("#000") : setColor("#FFF")}>
        <WorkTogether text="Instagram del Podcast" link="https://www.instagram.com/calishowpodcast/"/>
        </InView>
        <Footer/>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const podcastApi = overlayDrafts(await getClient(preview).fetch(podcastQuery))
    return {
      props: { podcastApi },
      revalidate: 1
    }
  }