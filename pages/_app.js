import Layout from "../components/Layout"
import '../styles/globals.css'
import App from 'next/app'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import {groq} from 'next-sanity'
import {useState, useEffect} from "react"

function MyApp({ Component, pageProps }) {

  // const [projects, setProjects] = useState([])

  // const cosasApi = {
  //   projects,
  // }

  // async function getProjects () {
  //   const projectQuery = groq`*[ _type == 'project' ]`
  //   const result = overlayDrafts(await getClient().fetch(projectQuery))
  //   setProjects(result)
  // }

  // useEffect(() => getProjects(), [])

  // if(cosasApi.projects.length > 0) {console.log(cosasApi.projects[0].name)}


MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

  return ( 
      <Component {...pageProps}/>
  )
}

export default MyApp

//  const projectQuery = groq`*[ _type == 'project' ]`
//  export async function getStaticProps({ preview = false }) {
//    const cosas = overlayDrafts(await getClient(preview).fetch(projectQuery))
//    console.log(cosas)
//    return {
//      props: { cosas },
//    }
//  }