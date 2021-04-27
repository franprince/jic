import styles from "../styles/Header.module.css"

export default function Header ({title, subtitle, img}) {

    return (
        <div className={styles.wrapper}>
            <div style={{ backgroundImage: `url(${img})` }} className={styles.header}>
                <h1 className={styles.h1}>{title}</h1>
            <h2>{subtitle}</h2>
            </div>
        </div>
    )
}