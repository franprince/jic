import Head from "next/head";
import { useState } from "react";
import { NavBar, AboutHeader, ContactMain, Footer } from "../../components";
import { InView } from "react-intersection-observer";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import { useWindowSize } from "../../hooks/useWindowSize";

const headerQuery = groq`*[_type=='contact'] {
    _id,
    "headerURL": header.asset -> url,
    }`;

export default function Contact({ header }) {
  const size = useWindowSize();

  const [color, setColor] = useState("#FFF");

  return (
    <>
      <Head>
        <title>JIC | Contact</title>
      </Head>
      <NavBar color={color} iNavRef={"5"} theme={"light"} />
      <AboutHeader
        title={`YA HABLAMOS DE MI, AHORA\nHABLEMOS DE VOS Y TU PROYECTO!`}
        mobileTitle="HABLEMOS DE TU PROYECTO"
        img={header[0].headerURL}
        contact={true}
      />
      <InView
        threshold="0.3"
        onChange={(inView) => (inView ? setColor("#000") : setColor("#FFF"))}
      >
        <ContactMain size={size} />
      </InView>
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const header = overlayDrafts(await getClient(preview).fetch(headerQuery));
  return {
    props: { header },
    revalidate: 1,
  };
}
