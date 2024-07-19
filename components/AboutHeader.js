import styles from "../styles/AboutHeader.module.css";
import Image from "next/image";

export default function AboutHeader({ title, img, contact, mobileTitle }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <Image
          src={img}
          alt="Sobre mi"
          quality={100}
          priority={true}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }} />
        <section
          className={contact ? styles.contactTitles : styles.aboutTitles}
        >
          <h1>{title}</h1>
        </section>
      </div>
    </header>
  );
}
