import styles from "../styles/HomeSection.module.css";
import Image from "next/image";
import classNames from "classnames";

interface iHomeSection {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  type?: string;
  hidden?: boolean;
  parallax?: boolean;
  contentPosition: string;
  backgrounds: {
    desktop: {
      url: string;
      metadata: { dimensions: { width: number; height: number } };
    };
    mobile: {
      url: string;
      metadata: { dimensions: { width: number; height: number } };
    };
  };
}

const HomeSection = (props: iHomeSection) => {
  const {
    title,
    subtitle,
    type,
    parallax,
    hidden,
    backgrounds,
    contentPosition,
  } = props;

  return (
    !hidden && (
      <section className={styles.homeSection}>
        <div className={ `${styles.content} ${styles[contentPosition]} ${styles[title.toLocaleLowerCase()]}`}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <Image
          src={backgrounds?.desktop.url}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        {title === "Podcast" && (
          <img className={styles.button} src="/podcast-button.png" alt="" />
        )}
      </section>
    )
  );
};

export default HomeSection;
