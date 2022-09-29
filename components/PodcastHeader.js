import styles from "../styles/PodcastHeader.module.css";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";

export default function PodcastHeader({ img }) {
  const { colorWhite } = useContext(ColorContext);
  return (
    <InView
      as="header"
      rootMargin="0px 0px -90%"
      onChange={(inView) => inView && colorWhite()}
      className={styles.header}
    >
      <div className={styles.imgContainer}>
        <Image
          src={img}
          alt="Juan Ignacio Cali's Podcast"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
        />
        <section>
          <Image
            width={475}
            height={135}
            layout="fixed"
            src="/img/thecalishow.svg"
            alt="The Cali Show Podcast"
          />
        </section>
      </div>
    </InView>
  );
}
