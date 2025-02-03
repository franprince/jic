import Head from "next/head";
import { useContext } from "react";
import NavBar from "../../components/NavBar";
import AboutHeader from "../../components/AboutHeader";
import ContactMain from "../../components/ContactMain";
import Footer from "../../components/Footer";
import { InView } from "react-intersection-observer";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import ColorContext from "../../components/context/ColorContext";
import { useWindowSize } from "../../hooks/useWindowSize";

const headerQuery = groq`*[_type=='contact'] {
    _id,
    "headerURL": header.asset -> url,
    "budget": budget[],
    "products": product[],
    }`;

export default function Contact({ contactData }) {
  const size = useWindowSize();
  const { colorWhite, colorBlack } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.

  return (
    <>
      <Head>
        <title>JIC | Contact</title>
      </Head>
      <NavBar iNavRef={"5"} theme={"light"} />
      <AboutHeader
        title="HABLEMOS DE TU PROYECTO"
        img={contactData[0].headerURL}
        contact={true}
      />
      <InView
        rootMargin="0px 0px -90%"
        onChange={(InView) => (InView ? colorBlack() : colorWhite())}
      >
        <ContactMain size={size} />
      </InView>
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const contactData = overlayDrafts(await getClient(preview).fetch(headerQuery));
  return {
    props: { contactData },
    revalidate: 1,
  };
}
