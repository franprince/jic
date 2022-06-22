import ReactPlayer from "react-player";
import styles from "../styles/AboutVideo.module.css";

export default function AboutVideo({ videoID, title }) {
  return (
    <section
      className={styles.film}
      style={title ? null : { paddingBottom: "3rem", paddingTop: "0" }}
    >
      {title && <h2>{title}</h2>}
      <article>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoID}&ab_channel=JuanIgnacioCali`}
          height={"100%"}
          width={"100%"}
          controls={false}
          style={{ position: "absolute", top: "0", left: "0" }}
          config={{
            youtube: {
              playerVars: { showinfo: 0, playsinline: 1 },
            },
          }}
        />
      </article>
    </section>
  );
}
