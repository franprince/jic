import styles from "../styles/ProjectsContainer.module.css";
import { useState } from "react";
import SingleCard from "../components/SingleCard";
import DoubleCard from "../components/DoubleCard";

export default function ProjectsContainer({ projects, size, sectionOrigin }) {
  const filteredProjects = projects.filter((project) => !project.hidden);

  const [shown, setShown] = useState(filteredProjects);
  return (
    <main className={styles.container}>
      <section className={styles.projects}>
        <div className={styles.grid}>
          {shown.map((item, index) => {
            return (index == 0 && size.width > 800 && shown.length > 1) ||
              (index % 3 == 0 &&
                size.width > 800 &&
                index !== shown.length - 1) ? (
              <DoubleCard
                item={item}
                index={index}
                size={size}
                sectionOrigin={sectionOrigin}
                key={item.name}
              />
            ) : (
              <SingleCard
                item={item}
                index={index}
                size={size}
                key={item.name}
                sectionOrigin={sectionOrigin}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
