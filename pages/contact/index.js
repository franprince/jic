import Head from "next/head";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import AboutHeader from "../../components/AboutHeader";
import ContactMain from "../../components/ContactMain";
import Footer from "../../components/Footer";
import { InView } from "react-intersection-observer";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";

const headerQuery = groq`*[_type=='contact'] {
    _id,
    "headerURL": header.asset -> url,
    }`;

export default function Contact({ header }) {
  const size = useWindowSize();

  function useWindowSize() {
    // Hook para detectar el tamaño de pantalla.
    const [windowSize, setWindowSize] = useState({
      // Inicializar el estado con altura y anchura undefined así cliente y servidor están coordinados
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      if (typeof window !== "undefined") {
        // Este código se ejecuta únicamente del lado del cliente
        function handleResize() {
          // Función que se ejecuta al cambiar el tamaño de la pantalla
          setWindowSize({
            // Cambiar el estado del tamaño de pantalla
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize); // Agregar event listener
        handleResize(); // Cuando cambia el tamaño de la pantalla, el handler se ejecuta automáticamente
        return () => window.removeEventListener("resize", handleResize); // Sacar el event listener
      }
    }, []);
    return windowSize;
  }

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
