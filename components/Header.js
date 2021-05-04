import styles from "../styles/Header.module.css"

export default function Header ({title, subtitle, img}) {

    return (
        <div className={styles.wrapper}>
            <div style={{ backgroundImage: `url(${img})` }} className={styles.header}>
                <h1>{title}</h1>
                <h2><i className={styles.i}>{subtitle}</i></h2>
            </div>
        </div>
    )
}