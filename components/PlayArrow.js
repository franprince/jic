import styles from "../styles/PlayArrow.module.css"

export default function PlayArrow ({arrowColor}) {
    return (
        <div className={styles.arrowCont}>
        <div className={styles.arrow} style={{backgroundColor: arrowColor}}></div>
        </div>
    )
}