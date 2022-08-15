import styles from "../styles/Header.module.css";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";
import { YellowButton } from ".";

export default function Header({ title, subtitle, home, posterSrc, videoSrc }) {
  const { colorWhite } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.

  return (
    <InView
      as="header"
      className={home ? styles.homeWrapper : styles.wrapper}
      id="header"
      rootMargin="0px 0px -90%"
      onChange={(InView) => InView && colorWhite()}
    >
      <div className={styles.header}>
        <video muted loop autoPlay playsInline preload="auto" poster={posterSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <section className={styles.elements}>
          <h1>{title}</h1>
          {subtitle && (
            <h2>
              <i className={styles.i}>{subtitle}</i>
            </h2>
          )}
          {title == "JUAN IGNACIO CALI" && (
            <YellowButton link="/trabajos" text="Mis proyectos"  hoverColor="white" />
          )}
        </section>
      </div>
    </InView>
  );
}
