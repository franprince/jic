import styles from "../styles/WorkTogether.module.css";
import Link from "next/link";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";
import { InView } from "react-intersection-observer";

export default function WorkTogether({ text }) {
  const { colorBlack, colorWhite } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.
  return (
    <InView
      rootMargin="0px 0px -90%"
      onChange={(InView) => (InView ? colorBlack() : colorWhite())}
      className={styles.container}
    >
      <section>
        <h2>{text}</h2>
        <Link href="/#projects" target="_blank" rel="noreferrer">
          <button>Empecemos</button>
        </Link>
      </section>
    </InView>
  );
}
