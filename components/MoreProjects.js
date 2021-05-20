import styles from "../styles/ProjectPage.module.css"
import Link from "next/link"
import Image from "next/image"
export default function MoreProjects ({moreProjects}) {
    return (
        <section className={styles.moreProjectsContainer}>
          <h2>Otros proyectos</h2>
          <section className={styles.moreProjects}>
          { moreProjects && moreProjects.map(item => {
                return (
                  <Link href={`/projects/${item.slug.current}`}>
                  <article className={styles.card} key={item._id}>
                      <div className={styles.content}>
                          <section className={styles.info}>
                                <h2>{item.name}</h2>
                                <h3>{item.categories[0]}</h3>
                          </section>
                      </div>
                      <div className={styles.img}>
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className={styles.imgBorder}
                          />
                      </div>
                  </article></Link>
                          )
                      })}
          </section>
        </section>
    )
}