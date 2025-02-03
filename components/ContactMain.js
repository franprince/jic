import styles from "../styles/ContactMain.module.css";
import Form from "./Form";
import { useState } from "react";
import { InstagramIcon, SpotifyIcon, YoutubeIcon } from "./icons";

export default function ContactMain({ size, contactData }) {
  const [sent, setSent] = useState(false);

  return (
    <main className={styles.main}>
      <section
        style={
          sent && size && size.width < 700
            ? {
                height: "100vh",
                overflow: "hidden",
                position: "fixed",
                top: "0",
                zIndex: "3",
              }
            : null
        }
      >
        <article className={styles.area1}>
          <h2>Conversemos!</h2>
          <p className={styles.border}>
            Dejame saber quién sos y<br />
            cómo puedo ayudarte.
          </p>
          <p>
            También podés escribirme un mail a juan.ignacio.cali@gmail.com
          </p>
        </article>
        <article className={styles.area4}>
          <Form
            sent={sent}
            setSent={setSent}
            size={size}
            contactData={contactData}
          />
        </article>
      </section>
    </main>
  );
}
