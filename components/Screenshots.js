import styles from "../styles/Screenshots.module.css";

export default function Screenshots({ pictures }) {
  return (
    <>
      {pictures.length !== 0 ? (
        <section
          className={pictures.length > 1 ? styles.container : styles.single}
        >
          {pictures.length > 1 ? (
            pictures.map((item, index) => {
              return (
                <article key={item}>
                  <img src={item} alt="Screenshot" />
                </article>
              );
            })
          ) : (
            <article key={pictures} style={{ gridColumn: "1/-1" }}>
              <img src={pictures[0]} alt="Screenshot" />
            </article>
          )}
        </section>
      ) : null}
    </>
  );
}
