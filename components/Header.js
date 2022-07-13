import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header({ title, subtitle, home }) {
  return (
    <header className={home ? styles.homeWrapper : styles.wrapper} id="header">
      <div className={styles.header}>
        <video src="/video-bg.mp4" muted loop autoPlay />
        <section className={styles.elements}>
          <h1>{title}</h1>
          {subtitle && (
            <h2>
              <i className={styles.i}>{subtitle}</i>
            </h2>
          )}
          {title == "JUAN IGNACIO CALI" && (
            <Link href="/#projects">
              <a>Mis proyectos</a>
            </Link>
          )}
        </section>
      </div>
    </header>
  );
}
