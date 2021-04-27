import styles from "../styles/Separator.module.css"

export default function Separator ({img}) {

    return (
        <div className={styles.wrapper}>
            <div style={{ backgroundImage: `url(${img})` }} className={styles.separator}></div>
        </div>
    )
}