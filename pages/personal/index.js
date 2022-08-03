import Head from "next/head";
import {
  Header,
  NavBar,
  WorkTogether,
  Footer,
  ProjectsContainer,
  PhGrid,
} from "../../components";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  personalQuery,
  personalPageQuery,
  gridQuery,
} from "../../queries/sanityQueries";

export default function Projects({ personalApi, personalPageApi, pics }) {
  const size = useWindowSize();
  return (
    <>
      <Head>
        <title>JIC | Proyectos</title>
      </Head>

      <NavBar iNavRef={"2"} theme={"light"} />

      <Header
        img={personalPageApi[0].headerURL}
        home={false}
        title="PERSONAL"
      />
      <ProjectsContainer projects={personalApi} size={size} sectionOrigin="personal" />

      <WorkTogether text="Listo para que trabajemos juntos?" link="/contact" />

      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const personalApi = overlayDrafts(
    await getClient(preview).fetch(personalQuery)
  );
  const personalPageApi = overlayDrafts(
    await getClient(preview).fetch(personalPageQuery)
  );
  const pics = overlayDrafts(await getClient(preview).fetch(gridQuery));
  return {
    props: { personalApi, personalPageApi, pics },
    revalidate: 1,
  };
}
