import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import styles from "../styles/Description.module.css";

export default function Description({ title, text, credits }) {
  const markup = {__html: DOMPurify.sanitize(marked(text))}
  return (
    <section
      className={styles.description}
      style={
        credits && {
          backgroundColor: "#000",
          color: "white",
          paddingTop: "7rem",
        }
      }
    >
      <article>
        {title ? <h2>{title}</h2> : null}
        <div
          dangerouslySetInnerHTML={markup}
        />
      </article>
    </section>
  );
}
