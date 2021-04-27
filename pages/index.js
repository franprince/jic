import Head from 'next/head'
import Header from "../components/Header"
import Featured from "../components/Featured"
import Separator from "../components/Separator"

import headers from "../headers.json" /* Imágenes para header y separadores */

export default function Home() {

  const headerImg = headers[0].img
  const separator1 = headers[1].img

  return (<>
      <Head>
        <title>Next App</title>
      </Head>
      <Header img={headerImg} title="Juan Ignacio Cali" subtitle="Filmmaker | Creative Director | Motion Designer"/>
      <Featured/>
      <Separator img={separator1}/>
      </>
  )
}