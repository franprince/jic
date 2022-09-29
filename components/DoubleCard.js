import Link from "next/link";
import styles from "../styles/DoubleCard.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function SingleCard({ item, index, size, sectionOrigin }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link href={`/${sectionOrigin}/${item?.slug?.current}`} key={item._id}>
      <article
        data-aos={
          index == 0 ? "fade-down" : index % 2 == 0 ? "fade-left" : "fade-right"
        }
        className={styles.card}
      >
        <div className={styles.content}>
          <section className={styles.info}>
            <h2>{item.name != null && item.name}</h2>
          </section>
        </div>
        <div className={styles.img}>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ borderRadius: "0 20px 20px 0" }}
            src={item.imageUrl}
            alt={item.name}
            className={styles.imgBorder}
            quality={90}
          />
        </div>
      </article>
    </Link>
  );
}
