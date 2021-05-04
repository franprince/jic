import Head from 'next/head'
import Header from "../components/Header"
import Featured from "../components/Featured"
import Separator from "../components/Separator"
import Services from "../components/Services"
import NavBar from "../components/NavBar"

import headers from "../headers.json" /* Imágenes para header y separadores */

export default function Home() {

  const headerImg = headers[0].img
  const separator1 = headers[1].img
  const separator1mobile = headers[1].mobileImg

  return (<>
      <Head>
        <title>Next App</title>
      </Head>
      <NavBar/>
      <Header img={headerImg} title="JUAN IGNACIO CALI" subtitle="Filmmaker | Director Creativo | Motion Designer"/>
      <Featured/>
      <Separator img={separator1} mobileImg={separator1mobile}/>
      <Services/>
      </>
  )
}