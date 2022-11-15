import styles from "../styles/ProjectHeader.module.css";

export default function ProjectHeader({ title, brand, categories }) {
  return (
    <header className={styles.container}>
      <section className={styles.content}>
        <h2>{title}</h2>
      </section>
    </header>
  );
}
