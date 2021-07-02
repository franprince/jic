import styles from "../styles/ProjectPage.module.css"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function MoreProjects ({moreProjects}) {

    useEffect(() => AOS.init(), [])

    return (
        <section className={styles.moreProjectsContainer}>
          <h2>Otros Proyectos</h2>
          <section className={styles.moreProjects}>
          { moreProjects && moreProjects.map(item => {
                return (
                  <Link href={`/projects/${item.slug.current}`} key={item._id}>
                  <article data-aos={moreProjects.indexOf(item) == 0 ? "fade-right" : "fade-left"} className={styles.card} >
                      <div className={styles.content}>
                          <section className={styles.info}>
                                <h2>{item.name}</h2>
                                <h3>{item.categories[0]}</h3>
                          </section>
                      </div>
                      <div className={styles.img}>
                      <img src={item.imageUrl} alt={item.name}/>
                      </div>
                  </article></Link>
                          )
                      })}
          </section>
        </section>
    )
}