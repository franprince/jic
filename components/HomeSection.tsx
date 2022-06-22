import styles from '../styles/HomeSection.module.css';

interface iHomeSection {
    title: string;
    description: string;
    image: string;
}
const HomeSection = (props: iHomeSection) => {
    const { title, description, image } = props;
    return (
        <section className={styles.homeSection}>
        {/* <div className="home-section-content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div> */}
        <div className="home-section-image">
            <img src="/juan1.png" alt={title} />
        </div>
        </section>
    );
};

export default HomeSection;
