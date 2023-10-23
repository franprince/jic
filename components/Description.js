import styles from "../styles/Description.module.css";
import MarkdownText from "./MarkdownText";

export default function Description({ title, text, credits, markdown }) {
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
        {markdown ? <MarkdownText markupText={text} /> : <p>{text}</p>}
      </article>
    </section>
  );
}
