import Head from "next/head";
import {
  Header,
  NavBar,
  HomeSection,
  WorkTogether,
  Footer,
  Clients,
} from "../components";
import { InView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { groq } from "next-sanity";
import { useWindowSize } from "../hooks/useWindowSize";

// QUERIES PARA SANITY

const projectQuery = groq`*[ _type == 'project' ]{
  name,
  _id,
  categories,
  featured,
  slug,
  "imageUrl": img.asset->url,
  _createdAt
} | order(_createdAt desc)`;

const homeQuery = groq`*[ _type == 'home' ]{
  _id,
  "headerURL": header.asset->url,
  "headerMobileURL": headerMobile.asset->url,
  "personalImgURL": personalImg.asset->url,
}`;

const sectionsQuery = groq`*[ _type == 'section' ]{
  _id, 
  name,
  title,
  subtitle,
  contentPosition,
  parallax,
  hidden,
  "backgrounds": {
    "desktop": backgrounds.desktop_bg.asset->{url, metadata{dimensions{width, height}}}, 
    "mobile": backgrounds.mobile_bg.asset->{url, metadata{dimensions{width, height}}}
  },
  link
} | order(_createdAt asc)`;

// HOME APP

export default function Home({ projectsApi, homeApi, sectionApi }) {

  return (
    <>
      <Head>
        <title>JIC</title>
      </Head>
      <NavBar inNavRef={"0"} theme={"light"} />
      <Header
        img={homeApi[0].headerURL}
        home={true}
        title="JUAN IGNACIO CALI"
        subtitle="Filmmaker | Director Creativo | Fotógrafo"
      />
      <Clients />
      {sectionApi?.map((section) => {
        const {
          _id,
          title,
          subtitle,
          hidden,
          parallax,
          backgrounds,
          contentPosition,
        } = section;
        return (
          <HomeSection
            key={_id}
            title={title}
            subtitle={subtitle}
            hidden={hidden}
            parallax={parallax}
            backgrounds={backgrounds}
            contentPosition={contentPosition}
          />
        );
      })}
      <WorkTogether text="Listo para que trabajemos juntos?" />
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const projectsApi = overlayDrafts(
    await getClient(preview).fetch(projectQuery)
  );

  const homeApi = overlayDrafts(await getClient(preview).fetch(homeQuery));

  const sectionApi = overlayDrafts(
    await getClient(preview).fetch(sectionsQuery)
  );

  return {
    props: { projectsApi, homeApi, sectionApi },
    revalidate: 1,
  };
}
