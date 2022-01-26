import styles from "../styles/Footer.module.css"

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <section>
                    <h2>JIC</h2>
                    <div>
                    <a target="_blank" href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA">
                        <img src="/img/youtube.svg" alt="Ir a YouTube"/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/juanignaciocali/">
                        <img src="/img/instagram.svg" alt="Ir a Instagram"/>
                    </a>
                    </div>
                </section>
                <section className={styles.contact}>
                    <p>juan.ignacio.cali@gmail.com</p>
                    <p>Buenos Aires, Argentina</p>
                </section>
            </div>
        </footer>
    )
}