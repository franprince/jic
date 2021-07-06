import Layout from "../components/Layout"
import '../styles/globals.css'
import App from 'next/app'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
    window.scroll({
      top: 0,
      left: 0
   })
  }, []);

  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp