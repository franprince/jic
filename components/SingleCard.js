import Link from "next/link";
import styles from "../styles/SingleCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/legacy/image";

export default function SingleCard({ item, index, size, mp, sectionOrigin }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Link
      href={`/${sectionOrigin}/${item?.slug?.current}`}
      key={item}
      legacyBehavior>
      <article
        className={mp ? styles.mpCard : styles.card}
        data-aos={
          mp
            ? index == 0
              ? "fade-right"
              : "fade-left"
            : size && size.width > 700
            ? index - 1 == 0 || (index - 1) % 3 == 0
              ? "fade-right"
              : "fade-left"
            : index == 0
            ? "null"
            : index % 2 == 0
            ? "fade-left"
            : "fade-right"
        }
      >
        <div className={styles.img}>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={item.imageUrl}
            alt={item.name}
            className={styles.imgBorder}
            style={{borderRadius:"20px 20px 0 0"}}
          />
        </div>
        <div className={styles.content}>
          <section className={styles.info}>
            <h2>{item.name != null && item.name}</h2>
          </section>
        </div>
      </article>
    </Link>
  );
}
