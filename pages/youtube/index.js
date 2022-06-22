import NavBar from "../../components/NavBar";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { InView } from "react-intersection-observer";
import Videos from "../../components/Videos";
import Footer from "../../components/Footer";
import WorkTogether from "../../components/WorkTogether";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";

const ytQuery = groq`*[_type=='youtube'] {
    _id,
    "headerURL": header.asset -> url,
    ids,
    "personalImgURL": personalImg.asset -> url
    }`;

const bannerQuery = groq`*[_type=='banner'] {
        _id,
        "bannerURL": banner.asset -> url
        }`;

export default function Youtube({ ytApi, banner }) {
  const [color, setColor] = useState("#FFF");

  const videos = ytApi[0].ids;

  return (
    <>
      <Head>
        <title>JIC | YouTube</title>
      </Head>
      <NavBar color={color} iNavRef={"2"} theme={"light"} />
      <Header
        img={ytApi[0].headerURL}
        title={`YOUTUBER IN\nPROGRESS`}
        home={false}
      />
      <Videos videos={videos} />
      <Banner img={banner[0].bannerURL} />
      <InView
        threshold="0.5"
        onChange={(inView) => (inView ? setColor("#000") : setColor("#FFF"))}
      >
        <WorkTogether text="Trabajemos juntos!" link="/contact" />
      </InView>
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const ytApi = overlayDrafts(await getClient(preview).fetch(ytQuery));
  const banner = overlayDrafts(await getClient(preview).fetch(bannerQuery));
  return {
    props: { ytApi, banner },
    revalidate: 1,
  };
}
