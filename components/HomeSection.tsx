import styles from "../styles/HomeSection.module.css";

interface iHomeSection {
  title: string;
  description: string;
  image: string;
  type?: string;
}
const HomeSection = (props: iHomeSection) => {
  const { title, description, image, type } = props;
  return (
    <section className={styles.homeSection}>
      {/* <div className="home-section-content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div> */}
      <img
        className={styles.background}
        src={type === "podcast" ? "/podcast.png" : "/juan1.png"}
        alt={title}
      />
      {type === "podcast" && (
        <img className={styles.button} src="/podcast-button.png" alt="" />
      )}
    </section>
  );
};

export default HomeSection;
