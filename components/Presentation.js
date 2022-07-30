import styles from "../styles/Presentation.module.css";
import Image from "next/image";
import { InstagramIcon, SpotifyIcon, YoutubeIcon } from "./icons";

export default function Presentation({ img, text }) {
  return (
    <main className={styles.main}>
      <section>
        <article>
          <Image
            width={524}
            height={519}
            layout="responsive"
            src={img}
            alt=""
          />
        </article>
        <article>
          <h3>Juan Ignacio Cali</h3>
          <p>{text}</p>
          <div className={styles.links}>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a youtube"
              href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA"
            >
              <YoutubeIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a instagram"
              href="https://www.instagram.com/juanignaciocali/"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a spotify"
              href="https://www.instagram.com/juanignaciocali/"
            >
              <SpotifyIcon />
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
