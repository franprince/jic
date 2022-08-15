import { NavBar, PodcastHeader, Footer, WorkTogether } from "../../components";
import Head from "next/head";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useContext, useState } from "react";
import styles from "../../styles/Podcast.module.css";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import ColorContext from "../../components/context/ColorContext";
import ReactPlayer from "react-player";

const podcastQuery = groq`*[_type=='podcast'] {
    _id,
    "headerURL": header.asset -> url,
    "assets": pics[].asset -> url,
    "podcastImgURL": podcastImg.asset -> url
    }`;

export default function Podcast({ podcastApi }) {
  const { colorWhite, colorBlack } = useContext(ColorContext);

  return (
    <>
      <Head>
        <title>JIC | Podcast</title>
        <meta
          name="description"
          content="The Cali Show - Un Podcast para filmmakers, artistas y emprendedores"
        />
      </Head>
      <NavBar iNavRef={"3"} theme={"light"} />
      <PodcastHeader img={podcastApi[0].headerURL} />
      <InView
        rootMargin="0px 0px -90%"
        onChange={(inView) => inView && colorBlack()}
      >
        <main className={styles.main}>
          <section>
            <article className={styles.text}>
              Un <b>podcast</b> donde hablamos con <b>artistas</b>,<br />{" "}
              <b>filmmakers</b> y <b>emprendedores</b> sobre
              <br /> experiencias y procesos de trabajo.
            </article>
            <article className={styles.imgContainer}>
              <div className={styles.img}></div>
              <Image
                src={podcastApi[0].podcastImgURL}
                alt="The Cali Show Podcast"
                layout="responsive"
                width={`32vw`}
                height={`32vw`}
                objectPosition="top"
                style={{ borderRadius: "20px" }}
              />
            </article>
            <article className={styles.disponible}>
              <p>Disponible en</p>
              <div className={styles.links}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/juanignaciocali"
                >
                  <img src="/img/podYT.svg" alt="Youtube" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://open.spotify.com/show/6VHzEF8VKmRstoAdgwXFX9"
                >
                  <img src="/img/podSpotify.svg" alt="Spotify" />
                </a>
              </div>
            </article>
          </section>
          <section className={styles.circleWrapper}>
            <div className={styles.circle}></div>
          </section>
        </main>
      </InView>
      <section className={styles.pictures}>
        {podcastApi[0].assets.map((picture) => {
          return (
            <article
              key={podcastApi[0].assets.indexOf(picture)}
              className={
                podcastApi[0].assets.indexOf(picture) == 2
                  ? styles.last
                  : styles.notLast
              }
            >
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
          );
        })}
      </section>
      <section className={styles.watch}>
        <h3>Ver último capítulo</h3>
        <div className={styles.preWrapper}>
          <div className={styles.videoWrapper}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=rNr9S5GkeWE&ab_channel=JuanIgnacioCali`}
              height={"100%"}
              width={"100%"}
              controls={false}
              style={{ position: "absolute", top: "0", left: "0" }}
              config={{
                youtube: {
                  playerVars: { showinfo: 0, playsinline: 1 },
                },
              }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const podcastApi = overlayDrafts(
    await getClient(preview).fetch(podcastQuery)
  );
  return {
    props: { podcastApi },
    revalidate: 1,
  };
}
