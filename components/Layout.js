import styles from "../styles/Layout.module.css"
import Head from "next/head"

export default function Layout ({children}) {

    return (
        <div className={styles.container}>
            <Head>
            <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
                {children}
        </div>
    )
}