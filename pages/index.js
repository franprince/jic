import Head from 'next/head'
import Header from "../components/Header"
import Featured from "../components/Featured"
import Separator from "../components/Separator"
import Services from "../components/Services"
import NavBar from "../components/NavBar"
import ContactCard from "../components/ContactCard"
import WorkTogether from "../components/WorkTogether"
import Footer from "../components/Footer"

import miscPictures from "../miscPictures.json" /* Imágenes para header y separadores */

export default function Home() {

  const headerImg = miscPictures[0].img
  const separator1 = miscPictures[1].img
  const separator1mobile = miscPictures[1].mobileImg
  const contactPic = miscPictures[2].img

  return (<>
      <Head>
        <title>Next App</title>
      </Head>
      <NavBar/>
      <Header img={headerImg} title="JUAN IGNACIO CALI" subtitle="Filmmaker | Director Creativo | Motion Designer"/>
      <Featured/>
      <Separator img={separator1} mobileImg={separator1mobile}/>
      <Services/>
      <ContactCard img={contactPic}/>
      <WorkTogether/>
      <Footer/>
      </>
  )
}