import NavBar from "../../components/NavBar";
import PodcastHeader from "../../components/PodcastHeader";
import Head from "next/head";
import Image from "next/image"
import Footer from "../../components/Footer"
import WorkTogether from "../../components/WorkTogether"
import json from "../../podcastTest.json"
import { InView } from 'react-intersection-observer';
import {useState, useEffect} from "react"
import styles from "../../styles/Podcast.module.css"


export default function Podcast () {

    const [color, setColor] = useState("#FFF")

    return(
        <>
        <Head>
            <title>
                JIC | Podcast
            </title>
        </Head>
        <NavBar color={color} iNavRef={"4"} theme={"light"}/>
        <PodcastHeader img={json[0].headerURL}/>
        <InView threshold="0.3" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
        <main className={styles.main}>
            <section>
                <article>
                Un <b>podcast</b> donde hablamos con <b>artistas</b>, <b>filmmakers</b> y <b>emprendedores</b> acerca de experiencias y procesos de trabajo.
                </article>
                <article>
                    <Image
                src={json[0].podcastImgURL}
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
                    <a href="https://www.youtube.com/watch?v=1RBARH-Jpxk&list=PLNQzQMQkAiUhel2EG-MNEFdM-qZbWeMlr"><img src="/img/yt.png" alt="Youtube" /></a>
                    <a href="https://open.spotify.com/show/6VHzEF8VKmRstoAdgwXFX9"><img src="/img/spoty.png" alt="Spotify" /></a>
                    <a href="#"><img src="/img/podcast.png" alt="Apple Podcasts" /></a>
                    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81NWZhNzdiMC9wb2RjYXN0L3Jzcw"><img src="/img/gpodcast.png" alt="Google Podcasts" /></a>
                    </div>
                </article>
            </section>
            <div className={styles.circle}></div>
        </main>
        </InView>
        <section className={styles.pictures}>
            {json[0].picsURL.map(picture=>{
                return (
                    <article key={json[0].picsURL.indexOf(picture)}>
                <Image
                src={picture}
                alt="The Cali Show Podcast"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                quality={100}
                />
            </article>
                )
            })}
        </section>
        <InView threshold="0.8" onChange={(inView) => inView ? setColor("#222") : setColor("#FFF")}>
        <WorkTogether text="Mi Canal de YouTube" link="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA"/>
        </InView>
        <Footer/>
        </>
    )
}