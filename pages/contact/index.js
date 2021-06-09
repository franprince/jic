import Head from "next/head"
import {useState} from "react"
import NavBar from "../../components/NavBar"
import AboutHeader from "../../components/AboutHeader"
import json from "../../aboutTest.json"
import ContactMain from "../../components/ContactMain"

export default function Contact () {


    const [color, setColor] = useState("#FFF")

    return (
        <>
        <Head>
            <title>JIC | Contact</title>
        </Head>
        <NavBar color={color} iNavRef={"6"} theme={"light"}/>
        <AboutHeader title="YA HABLAMOS DE MI, AHORA HABLEMOS DE VOS Y TU PROYECTO" mobileTitle="HABLEMOS DE TU PROYECTO" img={json[0].headerImg} contact={true}/>
        <ContactMain/>
        </>
    )
}
