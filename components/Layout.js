import styles from "../styles/Layout.module.css"

export default function Layout ({children, cosas}) {

    console.log(cosas)

    return (
        <div className={styles.container}>
                {children}
        </div>
    )
}