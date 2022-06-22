import Head from "next/head";
import { Header, NavBar, WorkTogether, Footer, ProjectsContainer, PhGrid } from "../../components";
import { useState } from "react";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import { InView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";

// QUERIES PARA SANITY

const projectQuery = groq`*[ _type == 'project' ]{
    name,
    _id,
    hidden,
    categories,
    featured,
    slug,
    "imageUrl": img.asset->url,
    _createdAt
} | order(_createdAt desc)`;

const projectPageQuery = groq`*[ _type == 'projectsPage' ]{
    _id,
    "headerURL": header.asset->url,
}`;

const gridQuery = groq`*[_type=='phGrid'] {_id, 'assets': pics[].asset->url}`;

export default function Projects({ projectsApi, projectsPageApi, pics }) {
    const size = useWindowSize();

    const [color, setColor] = useState("#FFF");

    return (
        <>
            <Head>
                <title>JIC | Proyectos</title>
            </Head>
            <NavBar color={color} iNavRef={"1"} theme={"light"} />
            <Header img={projectsPageApi[0].headerURL} home={false} title="PROYECTOS" size={size} />
            <InView onChange={(InView) => InView && setColor("#FFF")}>
                <ProjectsContainer projects={projectsApi} size={size} />
            </InView>
            <InView onChange={(InView) => InView && setColor("#FFF")}>
                <PhGrid pictures={pics[0].assets} />
            </InView>
            <InView onChange={(InView) => InView && setColor("#000")}>
                <WorkTogether text="Trabajemos juntos!" link="/contact" />
            </InView>
            <Footer />
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const projectsApi = overlayDrafts(await getClient(preview).fetch(projectQuery));
    const projectsPageApi = overlayDrafts(await getClient(preview).fetch(projectPageQuery));
    const pics = overlayDrafts(await getClient(preview).fetch(gridQuery));
    return {
        props: { projectsApi, projectsPageApi, pics },
        revalidate: 1,
    };
}
